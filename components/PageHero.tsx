import Image from "next/image";

type Props = {
  kicker: string;
  title: string;
  text: string;
};

export default function PageHero({ kicker, title, text }: Props) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:h-20 sm:w-20">
          <Image src="/images/logo.png" alt="Summer Breeze logo" fill className="object-contain p-2" priority />
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 px-3 py-2">
          <Image src="/images/accu-badge.svg" alt="ACCU Stadium badge" width={180} height={62} className="h-auto w-[140px] sm:w-[180px]" />
        </div>
      </div>

      <p className="mt-6 text-sm uppercase tracking-[0.25em] text-yellow-300/85">{kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-white/75">{text}</p>
    </div>
  );
}
