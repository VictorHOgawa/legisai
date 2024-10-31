"use client";
import { ArrowRight, List, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-20 items-center justify-between bg-[#202020] p-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={500}
          height={200}
          className="h-full w-56 cursor-pointer object-contain"
        />
        <div className="hidden items-center text-xs lg:flex lg:gap-4 xl:gap-16 xl:text-sm">
          <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
            HOME
          </span>
          <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
            QUEM PODE USAR?
          </span>
          <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
            FUNCIONALIDADES
          </span>
          <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
            DÚVIDAS
          </span>
          <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
            PLANOS
          </span>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <button className="rounded-3xl border border-primary px-4 py-2 transition duration-200 hover:border-black hover:bg-primary hover:text-white">
            CADASTRE-SE
          </button>
          <button className="group flex items-center gap-2 rounded-3xl border border-primary bg-primary px-4 py-2 transition duration-200 hover:bg-transparent">
            ACESSAR
            <ArrowRight className="group-hover:animate-bounceHorizontal" />
          </button>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="h-6 w-6 rounded bg-[#202020] p-1 lg:hidden"
        >
          <Menu />
        </button>
      </div>
      {isSidebarOpen && (
        <>
          <div className="fixed z-[9999999] flex h-screen w-2/3 flex-col gap-8 bg-[#202020] p-2 lg:hidden">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={200}
              className="h-auto w-56 cursor-pointer object-contain"
            />
            <div className="flex flex-col items-center gap-4 text-xs">
              <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
                HOME
              </span>
              <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
                QUEM PODE USAR?
              </span>
              <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
                FUNCIONALIDADES
              </span>
              <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
                DÚVIDAS
              </span>
              <span className="h-full cursor-pointer rounded p-2 transition duration-200 hover:bg-primary">
                PLANOS
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="rounded-3xl border border-primary px-4 py-2 transition duration-200 hover:border-black hover:bg-primary hover:text-white">
                CADASTRE-SE
              </button>
              <button className="group flex items-center gap-2 rounded-3xl border border-primary bg-primary px-4 py-2 transition duration-200 hover:bg-transparent">
                ACESSAR
                <ArrowRight className="group-hover:animate-bounceHorizontal" />
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="fixed right-0 z-[9999999] h-screen w-1/3 bg-black/50 lg:hidden"
          />
        </>
      )}
    </>
  );
}
