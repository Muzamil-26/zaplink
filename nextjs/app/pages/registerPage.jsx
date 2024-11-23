"use client";
import React, { useState, useRef } from "react";
import { Button } from "flowbite-react";
import { FileInput, Label } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
function RegisterForm() {
  const inputFile = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    coverpic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const ClearAll = () => {
    setFormData({
      username: "",
      name: "",
      email: "",
      password: "",
      coverpic: null,
    });
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic, e.g., send form data to server
    console.log(formData);

    ClearAll();
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      
      <form
        method="POST"
        className="flex w-96 flex-col gap-4 rounded-lg bg-white p-4 shadow-md"
      >
        <h1 className="mb-6 text-3xl text-center">Register</h1>
        <FloatingLabel
          variant="outlined"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="bg-[#fff!important]"
        />
        <FloatingLabel
          variant="outlined"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#fff!important]"
        />

        <FloatingLabel
          variant="outlined"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#fff!important]"
        />
        <FloatingLabel
          variant="outlined"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="bg-[#fff!important]"
        />
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Upload file"
              className="text-[#374151!important]"
            />
          </div>
          <FileInput
            id="file-upload"
            ref={inputFile}
            onChange={handleChange}
            name="coverpic"
          />
        </div>
        <Button color="blue" onClick={handleSubmit}>
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
