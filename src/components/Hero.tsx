"use client";
import useOnScreen from "@/utils/IsOnScreen";
import {
  ChartLine,
  ChevronUp,
  Copy,
  EllipsisVertical,
  File,
  Flag,
  GraduationCap,
  House,
  Loader2,
  Rss,
  Settings,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div className="mx-auto flex w-[95%] flex-col gap-4">
      <div className="relative flex h-[500px] w-full flex-col gap-4 overflow-hidden">
        <Image
          src="/heroImg.png"
          className="absolute h-full rounded-b-3xl object-cover lg:w-full"
          alt=""
          width={2000}
          height={500}
          quality={100}
        />
        <div className="absolute bottom-0 z-10 flex h-20 w-full items-center justify-evenly gap-2 overflow-y-hidden overflow-x-scroll rounded-b-3xl bg-primary p-4 text-xs lg:overflow-x-hidden xl:text-sm">
          <div className="flex w-full items-center gap-2 text-nowrap rounded-lg bg-[#171818] p-2 font-semibold text-primary lg:w-max lg:text-wrap">
            <House size={18} />
            Dashboard
          </div>
          <div className="flex w-full cursor-pointer items-center gap-2 text-nowrap rounded-lg p-2 font-semibold transition duration-200 hover:bg-[#171818] hover:text-primary lg:w-max lg:text-wrap">
            <File size={18} />
            Documentos
          </div>
          <div className="flex w-full cursor-pointer items-center gap-2 text-nowrap rounded-lg p-2 font-semibold transition duration-200 hover:bg-[#171818] hover:text-primary lg:w-max lg:text-wrap">
            <ChartLine size={18} />
            I.A para Plenários
          </div>
          <div className="flex w-full cursor-pointer items-center gap-2 text-nowrap rounded-lg p-2 font-semibold transition duration-200 hover:bg-[#171818] hover:text-primary lg:w-max lg:text-wrap">
            <Rss size={18} />
            Notícias
          </div>
          <div className="flex w-full cursor-pointer items-center gap-2 text-nowrap rounded-lg p-2 font-semibold transition duration-200 hover:bg-[#171818] hover:text-primary lg:w-max lg:text-wrap">
            <UserCheck size={18} />
            Perfis Políticos
          </div>
          <div className="flex w-full cursor-pointer items-center gap-2 text-nowrap rounded-lg p-2 font-semibold transition duration-200 hover:bg-[#171818] hover:text-primary lg:w-max lg:text-wrap">
            <Settings size={18} />
            Configurações
          </div>
          <div className="flex w-full cursor-pointer items-center gap-2 text-nowrap rounded-lg p-2 font-semibold transition duration-200 hover:bg-[#171818] hover:text-primary lg:w-max lg:text-wrap">
            <Copy size={18} />
            Falar com IA
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-r from-[#17B857] via-[#062a30] to-[#17B857] p-6 lg:h-52 xl:h-40 xl:w-1/2">
          <div className="absolute -top-20 left-2/3 h-40 w-40 rounded-full bg-[#179267] opacity-50" />
          <div className="z-10 flex w-full flex-col items-center justify-between lg:flex-row">
            <div className="flex w-full flex-col gap-2 xl:w-2/3">
              <span className="font-semibold xl:text-2xl">
                Quer ir mais além no que a LegisAI pode fazer por você?
              </span>
              <span>
                Conheça um pouco da performance <br />
                que o LegisAI Pro Max.
              </span>
            </div>
            <button className="z-10 w-40 rounded-3xl bg-white text-black transition duration-200 hover:scale-[1.02] hover:font-semibold">
              Conhecer em Primeira Mão
            </button>
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-8 rounded-3xl bg-[#202020] p-4 lg:h-52 xl:h-40 xl:w-1/4">
          <span>Novos Dados Processados</span>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="text-3xl font-semibold">
                <CountUp end={33222} />
              </span>
              <div className="flex flex-col text-[#09BD3C]">
                <ChevronUp size={16} />
                <span className="text-xs">+0,5%</span>
              </div>
            </div>
            <span className="text-sm text-[#09BD3C]">
              Em relação a mês passado
            </span>
          </div>
          <Image
            src="/smallLogo.png"
            alt=""
            width={500}
            height={500}
            className="absolute bottom-0 right-0 w-20 object-contain opacity-50"
          />
        </div>
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl lg:h-52 xl:h-40 xl:w-1/4">
          <div className="z-20 mx-auto flex h-full w-[90%] flex-col items-center justify-between py-2 text-center">
            <span className="text-lg font-semibold leading-5 xl:text-2xl xl:leading-7">
              Ganhe Vantagem usando o Máximo do Legis AI!
            </span>
            <span className="text-sm leading-5">
              Supere outros colegas usando o máximo do LegisAI no dia a dia.
            </span>
            <button className="group flex w-full items-center gap-2 text-nowrap rounded-3xl border border-[#00A15D] p-1 pr-4 transition duration-200 hover:bg-white hover:font-semibold hover:text-primary">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <GraduationCap className="text-background group-hover:text-white" />
              </div>
              <span>INICIAR AGORA</span>
            </button>
          </div>
          <Image
            src="/heroImg2.png"
            className="absolute left-0 top-0 w-full rounded-3xl"
            height={500}
            width={500}
            alt=""
          />
          <div className="absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-[#20202060] to-[#202020]" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 rounded-2xl bg-[#202020] p-4">
        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col">
            <span className="font-semibold">
              Notícias recentes que podem te interessar
            </span>
            <span className="text-sm text-[#828690]">
              Um pouco dos sites que estamos constantemente recebendo
              informações
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-3xl border border-primary bg-primary px-8 py-2 leading-4 transition duration-200 hover:border-primary hover:bg-transparent hover:font-semibold hover:text-primary">
              Ver todos <br /> recentes
            </button>
            <button className="rounded-lg p-2 transition duration-200 hover:bg-primary">
              <Flag />
            </button>
            <button className="rounded-lg p-2 transition duration-200 hover:bg-primary">
              <EllipsisVertical />
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className="relative flex h-full w-full flex-col items-center gap-4 lg:flex-row xl:h-64"
        >
          <div
            className={twMerge(
              "flex w-full translate-y-20 flex-col gap-2 rounded-xl border border-white p-2 opacity-0 transition delay-200 duration-500 lg:w-1/3 xl:p-4",
              isVisible && "translate-y-0 opacity-100",
            )}
          >
            <span className="font-semibold">
              BOLSONARO É PRESO TENTANDO FAZER ABC ENQUANTO SEU GRUPO FAZ ABC NO
              LOCAL COMBINADO, VEJA AGORA
            </span>
            <span className="text-sm text-[#828690]">
              “Em breve resumo, usando a inteligência artificial da LegisAI
              podemos acreditar que abc abc abc mas não só isso (...)”{" "}
              <span className="italic text-primary">
                REALIZADO POR <strong>LEGIS.AI*</strong>
              </span>
            </span>
            <span className="w-max cursor-pointer text-xs font-semibold hover:underline">
              LER NA ÍNTEGRA
            </span>
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <div className="flex gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9D8160]">
                  <div className="inline-block size-6 rotate-45 rounded-full border-[6px] border-current border-t-transparent text-white" />
                </div>
                <div className="flex w-40 flex-col text-[#828690]">
                  <span className="text-xs opacity-80">
                    Todos direitos reservados para o autor
                  </span>
                  <span className="text-xs">Date: 12/05/2020</span>
                </div>
              </div>
              <button className="mt-4 rounded bg-primary/10 px-4 py-2 text-xs text-primary transition duration-200 hover:bg-primary/20 hover:font-semibold">
                LER RESUMO
              </button>
            </div>
          </div>
          <div
            className={twMerge(
              "flex w-full translate-y-20 flex-col gap-2 rounded-xl border border-white p-2 opacity-0 transition delay-[400ms] duration-500 lg:w-1/3 xl:p-4",
              isVisible && "translate-y-0 opacity-100",
            )}
          >
            <span className="font-semibold">
              BOLSONARO É PRESO TENTANDO FAZER ABC ENQUANTO SEU GRUPO FAZ ABC NO
              LOCAL COMBINADO, VEJA AGORA
            </span>
            <span className="text-sm text-[#828690]">
              “Em breve resumo, usando a inteligência artificial da LegisAI
              podemos acreditar que abc abc abc mas não só isso (...)”{" "}
              <span className="italic text-primary">
                REALIZADO POR <strong>LEGIS.AI*</strong>
              </span>
            </span>
            <span className="w-max cursor-pointer text-xs font-semibold hover:underline">
              LER NA ÍNTEGRA
            </span>
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <div className="flex gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9D8160]">
                  <div className="inline-block size-6 rotate-45 rounded-full border-[6px] border-current border-t-transparent text-white" />
                </div>
                <div className="flex w-40 flex-col text-[#828690]">
                  <span className="text-xs opacity-80">
                    Todos direitos reservados para o autor
                  </span>
                  <span className="text-xs">Date: 12/05/2020</span>
                </div>
              </div>
              <button className="mt-4 rounded bg-primary/10 px-4 py-2 text-xs text-primary transition duration-200 hover:bg-primary/20 hover:font-semibold">
                LER RESUMO
              </button>
            </div>
          </div>
          <div
            className={twMerge(
              "flex w-full translate-y-20 flex-col gap-2 rounded-xl border border-white p-2 opacity-0 transition delay-[600ms] duration-500 lg:w-1/3 xl:p-4",
              isVisible && "translate-y-0 opacity-100",
            )}
          >
            <span className="font-semibold">
              BOLSONARO É PRESO TENTANDO FAZER ABC ENQUANTO SEU GRUPO FAZ ABC NO
              LOCAL COMBINADO, VEJA AGORA
            </span>
            <span className="text-sm text-[#828690]">
              “Em breve resumo, usando a inteligência artificial da LegisAI
              podemos acreditar que abc abc abc mas não só isso (...)”{" "}
              <span className="italic text-primary">
                REALIZADO POR <strong>LEGIS.AI*</strong>
              </span>
            </span>
            <span className="w-max cursor-pointer text-xs font-semibold hover:underline">
              LER NA ÍNTEGRA
            </span>
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <div className="flex gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9D8160]">
                  <div className="inline-block size-6 rotate-45 rounded-full border-[6px] border-current border-t-transparent text-white" />
                </div>
                <div className="flex w-40 flex-col text-[#828690]">
                  <span className="text-xs opacity-80">
                    Todos direitos reservados para o autor
                  </span>
                  <span className="text-xs">Date: 12/05/2020</span>
                </div>
              </div>
              <button className="mt-4 rounded bg-primary/10 px-4 py-2 text-xs text-primary transition duration-200 hover:bg-primary/20 hover:font-semibold">
                LER RESUMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
