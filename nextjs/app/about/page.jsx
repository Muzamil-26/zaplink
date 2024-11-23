"use client";
import Image from "next/image";
// import Aboutus from "@/public/assets/4966418.jpg";
import {
  SparklesIcon,
  UserGroupIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent">
            About Us
          </h1>
        </div>

        {/* Company Description */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="w-full text-center lg:w-3/5 lg:text-left">
            <p className="max-w-3xl text-xl text-gray-700">
              ZapLink is a fast, secure, and easy-to-use URL shortener service
              designed to help businesses and individuals shorten, track, and
              share their links efficiently.
            </p>
          </div>
          <Image
            src="/assets/4966418.jpg"
            alt="ZapLink Logo"
            width={500}
            height={500}
            className="mt-8 lg:mt-0"
          />
        </div>

        {/* What is ZapLink? */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-black">
            What is ZapLink?
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-[0.9rem] text-gray-600">
            ZapLink allows you to quickly shorten long URLs from any platform
            such as Instagram, YouTube, Twitter, LinkedIn, and more. You can
            easily shorten links, track the number of clicks, and share them
            with anyone—whether for personal use or business marketing.
          </p>
        </div>

        {/* Benefits */}
        <div className="flex items-center justify-center">
          <div className="grid w-full gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="transform rounded-xl bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105">
              <div className="mb-6 flex items-center justify-center">
                <SparklesIcon className="h-16 w-16 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600">
                Simple & Fast
              </h3>
              <p className="mt-4 text-gray-600">
                Enter a long link, and in seconds, you&apos;ll get your shortened URL
                ready to share across social media, emails, and more.
              </p>
            </div>

            <div className="transform rounded-xl bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105">
              <div className="mb-6 flex items-center justify-center">
                <UserGroupIcon className="h-16 w-16 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600">
                Robust Tracking
              </h3>
              <p className="mt-4 text-gray-600">
                Track the number of clicks your shortened URLs receive and gain
                valuable insights into your audience&apos;s behavior and
                interactions.
              </p>
            </div>

            <div className="transform rounded-xl bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105">
              <div className="mb-6 flex items-center justify-center">
                <LockClosedIcon className="h-16 w-16 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600">
                Secure & Reliable
              </h3>
              <p className="mt-4 text-gray-600">
                With HTTPS encryption and secure protocols, ZapLink ensures your
                links and data are protected.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-black">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have any questions or suggestions? Feel free to reach out to us at{" "}
            <a
              href="mailto:muzamilkhan.26.10thc@gmail.com"
              className="text-blue-500"
            >
              muzamilkhan.26.10thc@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
