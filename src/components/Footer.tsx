import Image from "next/image";

export function Footer() {
  return (
    <div className="mx-auto my-4 flex h-full w-[95%] flex-col items-center justify-between rounded-2xl border border-white bg-[#202020] px-4 py-0.5 text-xs lg:my-10 lg:h-20 lg:flex-row">
      <div className="flex flex-col">
        <span>COPYRIGHT © 2024</span>
        <span>Todos os Direitos Reservados à LegisAI.</span>
      </div>
      <Image
        src="/exLogo.png"
        alt=""
        width={500}
        height={100}
        quality={100}
        className="h-auto w-2/3 object-contain lg:h-full lg:w-auto"
      />
      <div className="flex flex-col text-end">
        <span>Tecnologia Desenvolvida por</span>
        <span className="font-semibold">
          Executivo’s Negócios Digitais LTDA
        </span>
      </div>
    </div>
  );
}
