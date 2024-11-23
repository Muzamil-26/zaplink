import { ZapLinkSchema } from "../models/shorturl.js";

export const RedirectURL = async (req, res) => {
  try {
    const { slug } = req.body; // Get the slug from the request body

    if (!slug) {
      return res.status(400).json({
        message: "Please provide a valid slug",
        success: false,
      });
    }

    // Find the document by slug
    const response = await ZapLinkSchema.findOne({ shorturl: slug });

    if (!response) {
      return res.status(404).json({
        message: "URL does not exist",
        success: false,
      });
    }

    // Increment the click count
    response.clicks += 1;
    await response.save();

    // Return the long URL
    return res.status(200).json({ longurl: response.longurl });
  } catch (error) {
    console.error("Error while fetching data from DB:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
