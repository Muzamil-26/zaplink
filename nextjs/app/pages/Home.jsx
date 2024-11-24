"use client";
import React from "react";
import Link from "next/link";
// import docslogo from '@/public/assets/docsicon.svg';
import shorturlLogo from "@/public/assets/4714353.jpg";
import githublog from "@/public/assets/github2.png";
import Image from "next/image";
import {
  CheckCircleIcon,
  LinkIcon,
  LockClosedIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const ShortUrl = () => {
  return (
    <>
<div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-[30px] px-5 py-[9.5rem] text-black lg:flex-row">
  <div className="left flex max-w-[600px] flex-col justify-center gap-4">
    <h1 className="text-5xl">Zap Link</h1>
    <p>ZapLink Shorten Links, Expand Your Reach.</p>
    <div className="buttons mt-4 flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-start lg:flex-row">
      <Link href={"/shorturl"}>
        <button className="flex items-center justify-center gap-4 rounded-sm border border-white bg-black p-4 px-6 text-white">
          Try Now
        </button>
      </Link>
      <Link href={"https://github.com/Muzamil-26/"}>
        <button className="flex items-center justify-center gap-4 rounded-sm border border-black bg-white p-4 text-black transition-all duration-500 hover:bg-black hover:text-white">
          View on Github{" "}
          <Image
            src={githublog}
            alt="GitHubLogo"
            className="w-[15px] rounded-full bg-white"
          />
        </button>
      </Link>
    </div>
  </div>

  <div className="middle flex flex-col items-center justify-center mt-8 w-full lg:mt-0 lg:max-w-[500px]">
    <Image
      src={shorturlLogo}
      alt="Ecommerce Img"
      className="h-auto w-full object-contain mb-8 lg:mb-0"
    />
  </div>
</div>



      <div className="bg-zinc-50 px-6 py-16">
        <div className="container mx-auto text-center">
          {/* Header Section */}
          <h1 className="mb-6 text-4xl font-bold text-[#007DFE]">
            Simple and Fast URL Shortener!
          </h1>
          <p className="mb-12 text-lg text-gray-700 sm:px-6 md:px-16 lg:px-64">
            ZapLink allows you to quickly shorten long URLs from platforms like
            Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, TikTok,
            blogs, and websites. Simply paste your long URL and click the
            Shorten URL button. On the next page, copy the shortened link and
            share it across your favorite platforms, chats, and emails. After
            shortening your URL, you can even track how many clicks it receives!
          </p>

          <div className="mt-16">
            <h2 className="mb-4 text-3xl font-semibold text-[#007DFE]">
              Shorten, Share, and Track
            </h2>
            <p className="mb-6 text-lg text-gray-700 sm:px-6 md:px-16 lg:px-64">
              Your shortened links can be used in publications, documents, ads,
              blogs, forums, instant messages, and more. ZapLink offers robust
              tracking features to monitor the number of clicks on your URLs.
              Whether it&apos;s for business or personal use, track and analyze the
              performance of your shared links to gain valuable insights.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="container mx-auto w-4/5 text-center">
          <h2 className="mb-12 text-4xl font-bold text-black">
            Why Choose ShortURL?
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1: Easy */}
            <div className="feature-card flex flex-col items-center rounded-lg bg-white p-6 text-gray-600 shadow-lg">
              <CheckCircleIcon className="mb-4 h-12 w-12 text-blue-500" />
              <p className="text-xl font-semibold">Easy</p>
              <p className="mt-2 text-sm">
                ShortURL is easy and fast, enter the long link to get your
                shortened link.
              </p>
            </div>

            {/* Feature 2: Shortened */}
            <div className="feature-card flex flex-col items-center rounded-lg bg-white p-6 text-gray-600 shadow-lg">
              <LinkIcon className="mb-4 h-12 w-12 text-blue-500" />
              <p className="text-xl font-semibold">Shortened</p>
              <p className="mt-2 text-sm">
                Use any link, no matter what size, ShortURL always shortens it.
              </p>
            </div>

            {/* Feature 3: Secure */}
            <div className="feature-card flex flex-col items-center rounded-lg bg-white p-6 text-gray-600 shadow-lg">
              <LockClosedIcon className="mb-4 h-12 w-12 text-blue-500" />
              <p className="text-xl font-semibold">Secure</p>
              <p className="mt-2 text-sm">
                It is fast and secure, with HTTPS protocol and data encryption.
              </p>
            </div>

            {/* Feature 4: Statistics */}
            <div className="feature-card flex flex-col items-center rounded-lg bg-white p-6 text-gray-600 shadow-lg">
              <ChartBarIcon className="mb-4 h-12 w-12 text-blue-500" />
              <p className="text-xl font-semibold">Statistics</p>
              <p className="mt-2 text-sm">
                Check the number of clicks your shortened URL received.
              </p>
            </div>

            {/* Feature 5: Reliable */}
            <div className="feature-card flex flex-col items-center rounded-lg bg-white p-6 text-gray-600 shadow-lg">
              <CheckCircleIcon className="mb-4 h-12 w-12 text-blue-500" />
              <p className="text-xl font-semibold">Reliable</p>
              <p className="mt-2 text-sm">
                Links that try to disseminate spam, viruses, and malware are
                deleted.
              </p>
            </div>

            {/* Feature 6: Devices */}
            <div className="feature-card flex flex-col items-center rounded-lg bg-white p-6 text-gray-600 shadow-lg">
              <DevicePhoneMobileIcon className="mb-4 h-12 w-12 text-blue-500" />
              <p className="text-xl font-semibold">Devices</p>
              <p className="mt-2 text-sm">
                Compatible with smartphones, tablets, and desktops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortUrl;
