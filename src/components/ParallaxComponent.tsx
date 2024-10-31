"use client";
import Image from "next/image";
import { Parallax } from "react-parallax";

export function ParallaxComponent() {
  return (
    <div className="relative flex flex-col">
      <div className="z-10 h-20 w-full bg-gradient-to-b from-background to-transparent xl:h-40" />
      <Parallax
        bgImage="/parallaxImg.png"
        bgImageAlt=""
        bgClassName="object-cover w-full"
        strength={750}
      >
        <div className="relative flex h-[60vh] flex-col items-center justify-center xl:h-screen">
          <div className="absolute -left-[5vw] -top-10 z-20 h-20 w-[110vw] bg-background blur-lg" />
          <Image
            src="/logoWhitee.png"
            alt="logo"
            width={1500}
            height={600}
            quality={100}
            priority
            className="w-3/4 lg:w-1/2"
          />
          <div className="absolute -bottom-10 -left-[5vw] z-20 h-[60vh] w-[110vw] bg-gradient-to-b from-transparent from-50% to-primary to-90% xl:h-[80vh]" />
        </div>
      </Parallax>
      <div className="z-[9999] h-20 w-full bg-gradient-to-b from-primary to-transparent xl:h-80" />
    </div>
  );
}
