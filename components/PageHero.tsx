import Image from "next/image";

type Props = {
  kicker: string;
  title: string;
  text: string;
};

export default function PageHero({ kicker, title, text }: Props) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8">
      <div className="flex flex-wrap items-center gap-4 sm:gap-5">
        <div className="relative h-24 w-24 overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 shadow-[0_14px_34px_rgba(0,0,0,0.24)] ring-1 ring-yellow-300/10 sm:h-28 sm:w-28">
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-yellow-300/10" />
          <Image src="/images/logo.png" alt="Summer Breeze logo" fill className="object-contain p-2 sm:p-2.5" priority />
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 px-3 py-2 sm:px-4 sm:py-3">
          <Image src="/images/accu-badge.svg" alt="ACCU Stadium badge" width={180} height={62} className="h-auto w-[140px] sm:w-[180px]" />
        </div>
      </div>

      <p className="mt-6 text-sm uppercase tracking-[0.25em] text-yellow-300/85">{kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-white/75">{text}</p>
    </div>
  );
}
