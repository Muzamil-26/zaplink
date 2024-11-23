"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import axios from "axios";


export default function Page() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const generateShortUrl = async () => {
    if (!longUrl) return alert("Please enter a valid URL.");
    const randomString = Math.random().toString(36).substring(2, 8);

    try {
      const result = await axios.post("https://zaplink.onrender.com/api/zapurl",{
        randomString,
        longUrl,
      });
      if(!result){
        console.log("Error while recieving result from backend");
      }

      console.log("Rersult ",result);
    } catch (error) {
      console.log("Error while Posat request using axios");
    }


    setShortUrl(`http://localhost:3000/${randomString}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold text-blue-600">
          Shorten Your URL
        </h1>
        <div className="flex flex-col gap-4">
          {/* Input for Long URL */}
          <input
            type="text"
            placeholder="Enter your long URL here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full rounded-md border px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button to Generate Short URL */}
          <Button color="blue" onClick={generateShortUrl}>
            Generate Short URL
          </Button>
          {/* <button
           
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Generate Short URL
          </button> */}

          {/* Display the Short URL */}
          {shortUrl && (
            <div className="mt-4 rounded-md bg-gray-100 p-4 text-center">
              <p className="text-lg text-gray-800">
                Your shortened URL:{" "}
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {shortUrl}
                </a>
              </p>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}




