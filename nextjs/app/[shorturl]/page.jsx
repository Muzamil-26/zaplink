"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page({ params }) {
  const slug = params?.shorturl; // Get the slug from route params
  const [originalURL, setOriginalURL] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false); // Error state to handle failures

  useEffect(() => {
    if (!slug) {
      setError(true);
      return;
    }

    const fetchAndRedirect = async () => {
      try {
        const res = await axios.post("http://localhost:4000/api/redirect", {
          slug,
        });

        if (res.data.longurl) {
          setOriginalURL(res.data.longurl);
          setLoader(true);
          window.location.replace(res.data.longurl);
        } else {
          setError(true);
          console.error("Slug not found or invalid response");
        }
      } catch (error) {
        setError(true);
        console.error("Error while redirecting:", error.message);
      }
    };

    fetchAndRedirect();
  }, [slug]);

  if (error) {
    return <div className="text-3xl text-black">Invalid or missing URL...</div>;
  }

  return (
    <>
      {loader ? (
        <div className="text-3xl text-black">Redirecting to {originalURL}...</div>
      ) : (
        <div className="text-3xl text-black">Please Provide a Valid URL...</div>
      )}
    </>
  );
}
