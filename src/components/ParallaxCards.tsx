"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

export function ParallaxCards() {
  return (
    <div className="relative flex flex-col">
      <div className="absolute -top-40 left-[2.5%] z-[999999] mx-auto flex w-[95%] items-center justify-between lg:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides
          loop
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
              <Image
                className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
                alt=""
                src="/parallaxCard1.png"
                width={500}
                height={400}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />
              <div className="z-10 flex w-40 flex-col justify-center gap-4">
                <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
                  DOCUMENTOS
                </span>
                <span>Construa seus Documentos Aqui:</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
              <Image
                className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
                alt=""
                src="/parallaxCard2.png"
                width={500}
                height={400}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />

              <div className="z-10 flex w-40 flex-col justify-center gap-4">
                <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
                  REVISÃO COM IA
                </span>
                <span>Revise seus Documentos em Instantes com IA</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
              <Image
                className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
                alt=""
                src="/parallaxCard3.png"
                width={500}
                height={400}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />

              <div className="z-10 flex w-40 flex-col justify-center gap-4">
                <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
                  MODERNIZAÇÃO
                </span>
                <span>
                  Facilidade no uso com Inteligência Artificial amigável:
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
              <Image
                className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
                alt=""
                src="/parallaxCard1.png"
                width={500}
                height={400}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />
              <div className="z-10 flex w-40 flex-col justify-center gap-4">
                <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
                  DOCUMENTOS
                </span>
                <span>Construa seus Documentos Aqui:</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
              <Image
                className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
                alt=""
                src="/parallaxCard2.png"
                width={500}
                height={400}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />

              <div className="z-10 flex w-40 flex-col justify-center gap-4">
                <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
                  REVISÃO COM IA
                </span>
                <span>Revise seus Documentos em Instantes com IA</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
              <Image
                className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
                alt=""
                src="/parallaxCard3.png"
                width={500}
                height={400}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />

              <div className="z-10 flex w-40 flex-col justify-center gap-4">
                <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
                  MODERNIZAÇÃO
                </span>
                <span>
                  Facilidade no uso com Inteligência Artificial amigável:
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute -top-40 left-[2.5%] z-[999999] mx-auto hidden w-[95%] items-center justify-between lg:flex">
        <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
          <Image
            className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
            alt=""
            src="/parallaxCard1.png"
            width={500}
            height={400}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />
          <div className="z-10 flex w-40 flex-col justify-center gap-4">
            <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
              DOCUMENTOS
            </span>
            <span>Construa seus Documentos Aqui:</span>
          </div>
        </div>
        <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
          <Image
            className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
            alt=""
            src="/parallaxCard2.png"
            width={500}
            height={400}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />

          <div className="z-10 flex w-40 flex-col justify-center gap-4">
            <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
              REVISÃO COM IA
            </span>
            <span>Revise seus Documentos em Instantes com IA</span>
          </div>
        </div>
        <div className="group relative flex h-48 w-60 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-12 xl:h-60 xl:w-80">
          <Image
            className="absolute bottom-0 left-0 object-cover transition duration-200 group-hover:rotate-3 group-hover:scale-[1.05]"
            alt=""
            src="/parallaxCard3.png"
            width={500}
            height={400}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-transparent group-hover:bg-black/10 group-hover:backdrop-blur-sm" />

          <div className="z-10 flex w-40 flex-col justify-center gap-4">
            <span className="w-max rounded bg-[#27AE60] px-4 py-1 text-xs">
              MODERNIZAÇÃO
            </span>
            <span>Facilidade no uso com Inteligência Artificial amigável:</span>
          </div>
        </div>
      </div>
    </div>
  );
}
