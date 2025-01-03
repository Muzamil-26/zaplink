"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page({ params }) {  // Rename `page` to `Page`
  const slug = params.shorturl; // Get the slug from route params
  const [originalURL, setoriginalURL] = useState("");
  const [loader, setloader] = useState(false);

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        const res = await axios.post("https://zaplink.onrender.com/api/redirect", {
          slug,
        });

        if (res.data.longurl) {
          // Perform the redirect to the long URL using window.location.href
          console.log(res.data.longurl);
          setoriginalURL(res.data.longurl);
          setloader(true);
          window.location.replace(res.data.longurl);

        } else {
          console.error("Slug not found or invalid response");
        }
      } catch (error) {
        console.error("Error while redirecting:", error.message);
      }
    };

    fetchAndRedirect();
  }, [slug]);

  return (
    <>
      {loader ? (
        <div className="text-3xl text-black">Redirecting...{originalURL}</div>
      ) : (
        <div className="text-3xl text-black">Please Provide Valid URL...</div>
      )}
    </>
  );
}
