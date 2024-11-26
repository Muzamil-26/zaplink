"use client";
import React, { useEffect, useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

const Page = () => {
  const [copiedIndex, setCopiedIndex] = useState(null); // Track which item is copied
  const { data: session } = useSession();
  const [history, setHistory] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchHistory = async () => {
      if (!session) {
        setLoading(false);
        toast.error("Session not found!");

        return;
      }

      try {
        const res = await axios.post(
          "https://zaplink.onrender.com/api/history",
          {
            session,
          },
        );

        if (!res || !res.data) {
          toast.error("Error while loading history");
          setLoading(false);
          return;
        }

        setHistory(res.data.response || []);
        // Ensure history is always an array
        setLoading(false); // Data fetched, stop loading
      } catch (error) {
        console.error("Error fetching history:", error);
        toast.error("Failed to fetch history");
        setLoading(false); // Stop loading even if there was an error
      }
    };

    fetchHistory();
  }, [session]); // Adding session to the dependency array ensures the effect runs when session changes

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="my-4 mx-auto w-full max-w-[1600px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:w-[90%] md:w-[80%]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white">
        <h2 className="text-2xl font-bold">Your Shortened URLs</h2>
      </div>

      {/* Body */}
      {loading ? (
        <div className="p-8 text-center text-gray-500">Loading...</div>
      ) : history.length > 0 ? (
        history.map((item, index) => (
          <div key={index} className="border-b p-8 last:border-none">
            {/* URL and Copy Button */}
            <div className="relative mb-6 flex items-center justify-between">
              <a
                href={`https://zaplink-ten.vercel.app/${item?.shorturl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full truncate text-lg font-medium text-blue-600 hover:underline sm:w-3/4"
              >
                {`https://zaplink-ten.vercel.app/${item?.shorturl}`}
              </a>
              <button
                onClick={() =>
                  handleCopy(
                    `https://zaplink-ten.vercel.app/${item?.shorturl}`,
                    index,
                  )
                }
                className={`ml-4 rounded-full border p-2 transition-transform duration-200 ${
                  copiedIndex === index
                    ? "scale-110 border-green-400 bg-green-100 text-green-600"
                    : "border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 active:scale-95"
                }`}
              >
                {copiedIndex === index ? (
                  <CheckIcon className="h-5 w-5" />
                ) : (
                  <ClipboardIcon className="h-5 w-5" />
                )}
              </button>
              {/* Tooltip */}
              {copiedIndex === index && (
                <div className="absolute -top-10 right-0 rounded-lg bg-black px-3 py-1 text-sm text-white">
                  Copied!
                </div>
              )}
            </div>

            {/* Clicks Count and Created Date */}
            <div className="flex flex-col items-center sm:flex-row sm:space-x-3">
              <span className="text-lg font-semibold text-gray-800">
                Clicks:
              </span>
              <span className="text-2xl font-bold text-indigo-600">
                {item?.clicks || 0}
              </span>
            </div>

            {/* Created Date */}
            <div className="mt-2 text-sm text-gray-500">
              <span className="font-semibold">Created on:</span>{" "}
              {item?.createdAt
                ? new Date(item?.createdAt).toLocaleDateString()
                : "N/A"}
            </div>
          </div>
        ))
      ) : (
        <div className="p-8 text-center text-gray-500">No URLs found.</div>
      )}
    </div>
  );
};

export default Page;
