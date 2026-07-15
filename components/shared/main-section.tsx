import Image from "next/image";

import backImage from "@/components/assets/back.svg";
import buttonTape from "@/components/assets/backtape.png";
import girlImage from "@/components/assets/girl.png";
import tapeImage from "@/components/assets/tape.svg";
import { Container } from "@/components/shared/container";

export function MainSection() {
  return (
    <section className="overflow-hidden bg-[#fbf6ea] pb-8 pt-2 sm:pb-12 lg:pb-10 lg:pt-0">
      <Container className="relative min-h-[560px]">
        <div className="relative min-h-[560px] perspective-doodle lg:min-h-[600px]">
          <Image
            src={girlImage}
            alt=""
            width={856}
            height={644}
            priority
            className="hero-girl pointer-events-none relative z-0 mx-auto mt-4 h-auto w-full max-w-[660px] select-none lg:absolute lg:right-4 lg:top-12 lg:mt-0 lg:w-[56%] lg:max-w-[760px]"
          />

          <div className="hero-paper relative z-10 -mt-16 w-full max-w-[1080px] px-8 py-12 sm:-mt-20 sm:px-12 sm:py-16 lg:absolute lg:-left-[9rem] lg:top-3 lg:mt-0 lg:w-[84%] lg:pb-28 lg:pl-[18rem] lg:pr-52 lg:pt-[5.25rem]">
            <Image
              src={backImage}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 84vw, 100vw"
              className="-z-10 object-fill"
            />
            <Image
              src={tapeImage}
              alt=""
              width={243}
              height={107}
              className="hero-tape-stick absolute top-6 right-20 w-44 opacity-75 sm:right-36 sm:w-56 lg:top-12 lg:right-72"
            />

            <div className="hero-copy">
              <h1 className="max-w-[365px] text-[46px] font-normal leading-[0.92] tracking-normal text-black sm:text-[64px] lg:text-[64px]">
                Collect
                <br />
                moments,
                <br />
                not things.
              </h1>

              <div className="mt-3 flex w-full max-w-[300px] flex-col gap-1">
                <span className="h-[3px] w-full rotate-[-1deg] rounded-full bg-black" />
                <span className="ml-1 h-[2px] w-[95%] rotate-[-2deg] rounded-full bg-black" />
              </div>
            </div>

            <p className="hero-body mt-5 max-w-[500px] text-[13px] leading-[1.35] text-neutral-800 sm:text-sm lg:text-[12px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1466, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets.
            </p>

            <div className="hero-actions mt-5 flex flex-wrap items-center gap-6 sm:gap-9">
              <a
                href="#"
                className="group relative inline-flex min-h-[46px] min-w-[142px] items-center justify-center overflow-hidden px-7 text-xl uppercase text-white transition-transform duration-300 hover:-translate-y-0.5 hover:rotate-[-1deg]"
              >
                <Image
                  src={buttonTape}
                  alt=""
                  fill
                  sizes="154px"
                  className="-z-10 object-fill transition-transform duration-300 group-hover:scale-105"
                />
                shop all
              </a>

              <a
                href="#"
                className="group inline-flex flex-col text-xl uppercase text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                read more
                <span className="mt-1 h-[3px] w-full rotate-[-2deg] rounded-full bg-black transition-transform duration-300 group-hover:scale-x-110" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
