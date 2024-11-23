import { Userschema } from "../models/User.model.js";

export const HandleRegister = async (req, res) => {
  try {
    const { email, name, id, image } = req.body.user;

    // Log the incoming request data
    console.log("Request data:", req.body.user);

    // Validate required fields
    if (!email || !name || !id) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Check if the user already exists
    const existingUser = await Userschema.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        user: existingUser,
      });
    }

    // Create a new user if not found
    const newUser = await Userschema.create({
      email,
      username: email.split('@')[0], // Generate username from email
      name,
      id,
      image,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
