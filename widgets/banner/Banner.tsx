import Image from "next/image";
import { Button } from "@/shared/primary-button";
import { Container } from "@/shared/container";

export const Banner = () => {
  return (
    <>
      <div className="md:hidden w-full">
        <BannerContent />
      </div>

      <div className="hidden md:block w-full">
        <Container>
          <BannerContent />
        </Container>
      </div>
    </>
  );
};

const BannerContent = () => {
  return (
    <section className="w-full bg-black md:bg-gradient-to-r from-[#1C1C1C] to-[#000000] md:rounded-[8px] overflow-hidden">
      <div className="w-full px-5 pt-8 md:px-10 md:py-12 xl:px-[90px] xl:py-[90px] relative">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between relative z-10">
          <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2 text-center md:text-left z-20">
            <h1 className="font-medium text-[32px] sm:text-[40px] md:text-[45px] lg:text-[55px] font-sans leading-[1.1] text-white">
              Premade cover art and animation
            </h1>

            <p className="font-normal text-[14px] sm:text-[15px] md:text-[16px] text-gray-300 max-w-[500px] mx-auto md:mx-0">
              Over 10,000 premade track covers, exclusive design every day and
              animation.
            </p>

            <div className="flex flex-row gap-4 w-full md:w-auto justify-center md:justify-start mt-2">
              <Button variant="primary">COVER ART</Button>
              <Button variant="secondary">ANIMATION</Button>
            </div>
          </div>
          <div className="relative w-full h-[250px] sm:h-[300px] md:w-1/2 md:h-[400px] lg:h-[500px] mt-8 md:mt-0 flex justify-center md:justify-end md:absolute md:right-[-50px] md:bottom-[-90px] pointer-events-none">
            <Image
              src="/img/logo.png"
              alt="Banner 3D Logo"
              width={600}
              height={600}
              className="object-contain object-bottom md:object-right-bottom w-auto h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};