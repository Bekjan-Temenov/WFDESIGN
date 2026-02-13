import { Container } from "@/shared/container";
import { Banner } from "@/widgets/banner/Banner";
import { Animation } from "@/widgets/animation/Animation";
import { Reviews } from "@/widgets/Reviews/Reviews";
import { Blocks } from "@/widgets/blocks/Blocks";
import { Works } from "@/widgets/works/Works";


export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <div className="flex flex-col gap-5">

        <Blocks />
        <Animation />
        <Works />
        <Reviews />
        </div>
      </Container>
    </>
  );
}
