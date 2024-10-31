"use client";
import useOnScreen from "@/utils/IsOnScreen";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Cities() {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(ref).isIntersecting;

  const locked = useOnScreen(ref).visibilityLocked;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div className="relative mt-40 flex w-full flex-col gap-16 overflow-hidden px-4 pb-20 lg:flex-row lg:px-16">
      <div className="flex w-full flex-col justify-between lg:w-1/2">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">
            Você quer saber sobre a Análise Automática do Legis AI nas cidades
            do Brasil?
          </span>
          <span>
            Para você saber o que está acontecendo dentro do Legislativo do País
          </span>
        </div>
        <div className="relative flex w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-[#00A15D] from-25% via-[#006E40] to-[#00A15D] to-75% p-4">
          <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-[#09AC6E]" />
          <div className="z-10 flex w-full flex-col gap-8">
            <span className="text-2xl font-semibold">
              Com o Legis AI você pode pesquisar sobre o meio Político de
              diversas Cidades:
            </span>
            <div className="mx-auto flex w-[95%] flex-col">
              <span>Escreva o nome da cidade que quer pesquisar:</span>
              <div className="flex w-full gap-2">
                <input
                  className="w-full rounded-2xl border border-white bg-transparent p-2 placeholder:text-white focus:outline-none active:outline-none"
                  placeholder="Digite sua cidade"
                />
                <button className="rounded-2xl bg-white p-2 xl:hidden">
                  <Search className="text-primary" />
                </button>
                <button className="hidden w-max rounded-2xl border border-white bg-white px-4 py-2 font-semibold text-[#00A15D] transition duration-200 hover:bg-transparent hover:text-white xl:flex">
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-8 rounded-2xl bg-[#202020] px-2 py-4 xl:w-1/2 xl:px-8">
        <div className="flex w-1/2 flex-col gap-4 xl:gap-8">
          <span className="text-xs font-semibold text-[#00A15D] xl:text-base">
            São Paulo - SP
          </span>
          <div
            ref={ref}
            className={twMerge(
              "flex w-full translate-x-20 cursor-pointer flex-col gap-2 rounded p-1 opacity-0 transition delay-0 hover:bg-background xl:flex-row xl:gap-4",
              isVisible && !hasAnimated
                ? "translate-x-0 opacity-100 delay-200 duration-500"
                : isVisible
                  ? "translate-x-0 opacity-100 duration-200"
                  : "duration-200",
            )}
            onMouseEnter={() => {
              if (isVisible && !hasAnimated) {
                setHasAnimated(true);
              }
            }}
          >
            <Image
              src="/citiesImg1.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col gap-2 xl:gap-4">
              <span className="text-xs font-semibold xl:text-sm">
                Jair Bolsonaro - PL
              </span>
              <span className="text-xs text-gray-400">
                Durante a votação houve alguns incidentes que coincidiram com o
                PT (...)
              </span>
            </div>
          </div>
          <div
            ref={ref}
            className={twMerge(
              "flex w-full translate-x-20 cursor-pointer flex-col gap-2 rounded p-1 opacity-0 transition delay-0 hover:bg-background xl:flex-row xl:gap-4",
              isVisible && !hasAnimated
                ? "translate-x-0 opacity-100 delay-[400ms] duration-500"
                : isVisible
                  ? "translate-x-0 opacity-100 duration-200"
                  : "duration-200",
            )}
            onMouseEnter={() => {
              if (isVisible && !hasAnimated) {
                setHasAnimated(true);
              }
            }}
          >
            <Image
              src="/citiesImg2.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col gap-2 xl:gap-4">
              <span className="text-xs font-semibold xl:text-sm">
                Lula da Silva - PT
              </span>
              <span className="text-xs text-gray-400">
                Teve condutas diferentes das cotidianas ao longo dos últimos
                dias (...)
              </span>
            </div>
          </div>
          <div
            ref={ref}
            className={twMerge(
              "flex w-full translate-x-20 cursor-pointer flex-col gap-2 rounded p-1 opacity-0 transition delay-0 hover:bg-background xl:flex-row xl:gap-4",
              isVisible && !hasAnimated
                ? "translate-x-0 opacity-100 delay-[600ms] duration-500"
                : isVisible
                  ? "translate-x-0 opacity-100 duration-200"
                  : "duration-200",
            )}
            onMouseEnter={() => {
              if (isVisible && !hasAnimated) {
                setHasAnimated(true);
              }
            }}
          >
            <Image
              src="/citiesImg3.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col gap-2 xl:gap-4">
              <span className="text-xs font-semibold xl:text-sm">
                Leonardo Loiola - PSDB
              </span>
              <span className="text-xs text-gray-400">
                Se mostrou muito forte ao longo dos diversos ataques dos
                opositores e (...)
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4 xl:gap-8">
          <span className="text-xs font-semibold text-[#00A15D] xl:text-base">
            Rio de Janeiro - RJ
          </span>
          <div
            ref={ref}
            className={twMerge(
              "flex w-full translate-x-20 cursor-pointer flex-col gap-2 rounded p-1 opacity-0 transition delay-0 hover:bg-background xl:flex-row xl:gap-4",
              isVisible && !hasAnimated
                ? "translate-x-0 opacity-100 delay-200 duration-500"
                : isVisible
                  ? "translate-x-0 opacity-100 duration-200"
                  : "duration-200",
            )}
            onMouseEnter={() => {
              if (isVisible && !hasAnimated) {
                setHasAnimated(true);
              }
            }}
          >
            <Image
              src="/citiesImg1.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col gap-2 xl:gap-4">
              <span className="text-xs font-semibold xl:text-sm">
                Jair Bolsonaro - PL
              </span>
              <span className="text-xs text-gray-400">
                Durante a votação houve alguns incidentes que coincidiram com o
                PT (...)
              </span>
            </div>
          </div>
          <div
            ref={ref}
            className={twMerge(
              "flex w-full translate-x-20 cursor-pointer flex-col gap-2 rounded p-1 opacity-0 transition delay-0 hover:bg-background xl:flex-row xl:gap-4",
              isVisible && !hasAnimated
                ? "translate-x-0 opacity-100 delay-[400ms] duration-500"
                : isVisible
                  ? "translate-x-0 opacity-100 duration-200"
                  : "duration-200",
            )}
            onMouseEnter={() => {
              if (isVisible && !hasAnimated) {
                setHasAnimated(true);
              }
            }}
          >
            <Image
              src="/citiesImg2.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col gap-2 xl:gap-4">
              <span className="text-xs font-semibold xl:text-sm">
                Lula da Silva - PT
              </span>
              <span className="text-xs text-gray-400">
                Teve condutas diferentes das cotidianas ao longo dos últimos
                dias (...)
              </span>
            </div>
          </div>
          <div
            ref={ref}
            className={twMerge(
              "flex w-full translate-x-20 cursor-pointer flex-col gap-2 rounded p-1 opacity-0 transition delay-0 hover:bg-background xl:flex-row xl:gap-4",
              isVisible && !hasAnimated
                ? "translate-x-0 opacity-100 delay-[600ms] duration-500"
                : isVisible
                  ? "translate-x-0 opacity-100 duration-200"
                  : "duration-200",
            )}
            onMouseEnter={() => {
              if (isVisible && !hasAnimated) {
                setHasAnimated(true);
              }
            }}
          >
            <Image
              src="/citiesImg3.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col gap-2 xl:gap-4">
              <span className="text-xs font-semibold xl:text-sm">
                Leonardo Loiola - PSDB
              </span>
              <span className="text-xs text-gray-400">
                Se mostrou muito forte ao longo dos diversos ataques dos
                opositores e (...)
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/footerArt.png"
        alt=""
        width={500}
        height={500}
        className="absolute -right-10 bottom-0 -z-10 h-40 w-auto"
      />
    </div>
  );
}
