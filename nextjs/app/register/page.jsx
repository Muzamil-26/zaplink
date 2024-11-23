"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/compat/router'

function RegisterForm() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isMounted, setIsMounted] = useState(false);

  // Set the mounted state after the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Redirect if session exists (client-side only)
  useEffect(() => {
    if (session && isMounted) {
      router.push("/"); // Redirect if session exists
    }
  }, [session, isMounted, router]);

  // Don't render the form until the component is mounted to avoid SSR issues
  if (!isMounted) {
    return null;
  }

  return (
    <div className="main-signup flex h-screen w-full flex-col items-center justify-center gap-3">
      <div className="rounded-lg bg-white p-4 text-[#000000!important] shadow-md">
        <h1 className="mb-2 p-1 text-center text-xl font-bold text-black">
          Sign Up with Social Media
        </h1>
        <div className="flex w-96 flex-col items-center justify-center gap-4">
          <button
            onClick={() => {
              signIn("google");
            }}
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <svg
              className="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    >
                      {" "}
                    </path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    >
                      {" "}
                    </path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    >
                      {" "}
                    </path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    >
                      {" "}
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
          <button
            onClick={() => {
              signIn("github");
            }}
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <svg
              className="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 73 73"
              version="1.1"
            >
              <g
                id="team-collaboration/version-control/github"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="container"
                  transform="translate(2.000000, 2.000000)"
                  fillRule="nonzero"
                >
                  <rect
                    id="mask"
                    stroke="#000000"
                    strokeWidth="2"
                    fill="#000000"
                    x="-1"
                    y="-1"
                    width="71"
                    height="71"
                    rx="14"
                  ></rect>
                  <path
                    d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,58.8332679 28.1339306,58.4853136 27.8485027,58.2510159 C27.4331157,57.8242645 26.8174511,57.3952919 26.2266431,56.9630885 C21.9072927,54.7167584 19.3527869,50.5332072 20.957124,46.4871472 C22.5574432,42.5571176 27.2638839,40.4864748 30.4796157,39.1728956 C33.3468359,37.9121674 36.2614429,37.1450845 39.5494113,37.5048476 C41.1157967,37.7845772 43.4395919,39.6505857 44.2751602,40.5310512 C43.8044316,41.9150166 42.8560152,42.7565277 42.0666185,42.8901293 C41.6343096,43.0086644 40.5572557,42.7662294 40.1855884,42.3292781 C39.8684828,41.9734735 39.8684811,41.2952079 40.184157,40.9517242 C41.3549389,39.1167585 41.0718005,36.4579456 40.0337574,35.2060157 C39.2330698,34.2656272 37.9467132,33.8362066 36.5333519,33.9529687 C35.1582066,34.0650653 34.2724775,34.6655251 34.0621091,35.7976442 C33.806858,37.0840874 34.0177326,38.5754319 35.095568,39.4037466 C36.5280884,40.3726465 38.9172056,40.2866127 39.6997487,39.3197538 C40.3506829,38.6214539 41.2079393,37.6891362 42.2336624,37.2347725 C42.5394624,37.0499085 42.9057743,36.8201495 43.0976642,36.4700122 C43.3554727,36.0492808 42.8742592,35.4282164 42.3107108,35.3637081 C41.3274304,35.2879282 40.1438699,35.2274414 38.8232629,35.4386942 C37.6199561,35.6483345 36.2811428,36.0781326 35.8592921,37.0531839 C35.4391281,37.9963791 35.9170563,38.8011917 36.8246709,39.0235046 C38.1877408,39.3756484 40.3945387,40.4067156 41.4061231,41.4203917 C43.3436165,43.5302671 44.016367,45.8458294 43.6272599,47.4741539 C43.3317118,48.4987796 42.4964739,49.2733694 41.6203766,49.6930892 C40.7423307,50.1128895 39.795237,50.4025861 38.961259,50.3083895 C38.2953373,50.2294518 37.7613072,49.6486854 37.5314349,49.1073959 C37.2449731,48.3693804 37.456805,47.4974853 38.1616589,46.8353915 C40.0167853,45.0914396 41.6896098,43.4380475 43.2825352,42.4876972 C44.8790973,41.5310769 46.3353359,39.7342009 47.0874403,38.0174636 C47.6594684,36.6023802 47.5792805,35.2452326 46.1454545,34.3201798"
                    fill="#181717"
                  ></path>
                </g>
              </g>
            </svg>
            <span>Continue with Github</span>
          </button>
        </div>
      </div>
      <div className="text-center text-black">
        Already have an account?{" "}
        <Link href="/login" className="text-[#3b82f6]">
          Login
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
