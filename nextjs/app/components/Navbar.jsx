"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
// import logo from "@/public/logo.png";
import { Button } from "flowbite-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import zaplogo from '@/public/assets/zaplogo.png';

export function NavbarComponent() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for the session to load
    if (
      !session &&
      router.pathname !== "/login" &&
      router.pathname !== "/register"
    ) {
      router.push("/login"); // Redirect to login if not authenticated and not already on login/register
    }
  }, [session, status, router]);

  return (
    <Navbar fluid rounded className="bg-[#fff!important] backdrop:blur-[3px] relative">
      <Navbar.Brand href="/">
        <Image
          src={zaplogo}
          className="mr-3 h-6 rounded-full sm:h-9"
          alt="Flowbite React Logo"
          width={45}
          height={45}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        {session ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                session?.user?.image ? (
                  <div
                    className="flex items-center justify-center space-x-4 rounded"
                    data-testid="flowbite-avatar"
                  >
                    <div className="relative">
                      <img
                        alt="User settings"
                        src={session?.user?.image}
                        className="h-10 w-10 rounded-full"
                        data-testid="flowbite-avatar-img"
                      />
                    </div>
                  </div>
                ) : (
                  <Avatar
                    alt="User settings"
                    img="/path/to/fallback-image.jpg"
                    rounded
                  />
                )
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{session?.user?.name}</span>
                <span className="block truncate text-sm font-medium">
                  {session?.user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>History</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <>
            <Button
              color="purple"
              className="ml-4"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              color="purple"
              className="ml-4"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:justify-center items-center">
        <div className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium justify-center items-center ">
        <Link href="/" passHref   className="text-[#5a5a5a!important] hover:text-[#000000!important]">
            Home
        </Link>

        <Link href="/about" passHref className="text-[#5a5a5a!important] hover:text-[#000000!important]">
            About
        </Link>

        <Link href="/shorturl" passHref className="text-[#5a5a5a!important] hover:text-[#000000!important]">
            Short URL
        </Link>

        <Link href={"https://github.com/Muzamil-26/"} passHref className="text-[#5a5a5a!important] hover:text-[#000000!important]">
            Github
        </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
