"use client";

import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container className="bg-[#fff!important]">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="ZapLink™" year={2024} />
          <Footer.LinkGroup className="justify-center mt-3">
            <Footer.Link href="#" className="text-[#000000!important]">About</Footer.Link>
            <Footer.Link href="#" className="text-[#000000!important]">Privacy Policy</Footer.Link>
            <Footer.Link href="#" className="text-[#000000!important]">Licensing</Footer.Link>
            <Footer.Link href="#" className="text-[#000000!important]">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="border-[#e5e7eb!important]" />
        <Footer.Link href="https://github.com/Muzamil-26/" className="text-[#000000!important] list-none">Made with Love By Muzamil Khan ❤️.</Footer.Link>
       
      </div>
    </Footer>
  );
}



// import { Footer } from "flowbite-react";

// export function FooterComponent() {
//   return (
//     <>
//     <Footer container className="bg-[#fff!important]">
//       <Footer.Copyright href="/" className="" by="Zap Link" year={2024} />

//       <Footer.LinkGroup className="text-[#000000!important]">
//       <Footer.Link href="https://github.com/Muzamil-26/" className="text-[#000000!important] list-none ml-60">Made with Love By Muzamil Khan ❤️.</Footer.Link>
//       </Footer.LinkGroup>
//       <Footer.LinkGroup className="text-[#000000!important]">
//         <Footer.Link href="#" >About</Footer.Link>
//         <Footer.Link href="#">Privacy Policy</Footer.Link>
//         <Footer.Link href="#">Licensing</Footer.Link>
//         <Footer.Link href="#">Contact</Footer.Link>
//       </Footer.LinkGroup>
//     </Footer>
//     </>
//   );
// }

