"use client";
import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import '@/public/css/loader.css';
import Home from '@/app/pages/Home';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

  }, [pathname, status, router]);

  return (
    <div className='w-full'>
        <Home/>
    </div>
  );
};

export default Page;
