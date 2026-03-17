"use client";

import { LoadingAnimation } from "@/animations/LoadingAnimation";
import { useGSAP } from "@gsap/react";
import React from "react";

const Loading = () => {
  useGSAP(() => {
    LoadingAnimation();
  }, []);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden loading_screen_container lg:block hidden">
        <div className="fixed slide_1 bottom-0 left-0 h-[70vh] w-[40vw] loaderBg z-[9999999999999] overflow-hidden"></div>
        <div className="fixed slide_2 top-0 left-1/2 h-[20vw] -translate-1/2 w-[20vw] loaderBg z-[9999999999999] overflow-hidden rotate-45"></div>
        <div className="fixed slide_3 right-0 translate-x-1/2 top-0 h-[100vh] w-[60vw] loaderBg z-[9999999999999] overflow-hidden rotate-45"></div>
        {/* Second layer. It's a patch work kinda. */}
        <div className="w-[40vw] fixed slide_4 top-0 left-0 loaderBg h-[50vh] z-[9999999999999] "></div>
        <div className="w-[40vw] fixed slide_5 top-0 right-0 loaderBg h-[50vh] z-[9999999999999] "></div>
        <div className="w-[40vw] fixed slide_6 bottom-0 left-1/2 -translate-x-1/2 loaderBg h-[50vh] z-[9999999999999] "></div>
        <div className="w-[40vw] fixed slide_7 bottom-0 right-0 loaderBg h-[50vh] z-[9999999999999] "></div>
        <div className="w-[40vw] fixed top-0 slide_8 left-1/2 -translate-x-1/2 loaderBg h-[50vh] z-[9999999999999] "></div>

        <div className="fixed left-1/2 flex flex-col leading-7 metamask logo opacity-0 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl loaderBg z-[999999999999999999] overflow-hidden text-white text-center">
          KIET <br />
          CS
        </div>
      </div>
    </>
  );
};

export default Loading;
