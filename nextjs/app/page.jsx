"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import axios from 'axios';
import { CardsComponent } from '../app/components/Cards';
import '@/public/css/loader.css';
import Home from '@/app/pages/Home';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  // const [Products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products only if on homepage and session exists
    // if (pathname === "/" && status === "authenticated") {
    //   setLoading(true);
    //   axios
    //     .get("https://progidyapi.onrender.com/api/products")
    //     .then((res) => {
    //       setProducts(res.data.AllProducts);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       setError("Failed to load products");
    //       setLoading(false);
    //     });
    // } else 
    if (status === "unauthenticated") {
      router.push("/login");
    }

  }, [pathname, status, router]);

  return (
    <div className='w-full'>
      {/* {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : error ? (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="text-red-500">{error}</p>
        </div>
      ) : ( */}
        <Home/>

        {/* // <CardsComponent products={Products} /> */}
      {/* )} */}
    </div>
  );
};

export default Page;
