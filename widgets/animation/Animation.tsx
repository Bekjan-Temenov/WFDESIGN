"use client";
import { Button } from "@/shared/primary-button";

const datas = [
  {
    id: "1",
    img: "https://server.wallpaperalchemy.com/storage/wallpapers/99/snowy-mountain-path-wallpaper-4k-high-resolution.jpg",
    title: "BLACK COVERTITLE",
    price: 49.0,
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/2770371/pexels-photo-2770371.jpeg?cs=srgb&dl=pexels-arts-2770371.jpg&fm=jpg",
    title: "GREEN COVER",
    price: 29.99,
  },
  {
    id: "3",
    img: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-115993/space-High-Resolution-4K.jpg",
    title: "GREEN COVER",
    price: 89.88,
  },
  {
    id: "4",
    img: "https://plus.unsplash.com/premium_photo-1681429766540-f05bd18b4002?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGJ1aWxkaW5nJTIwNGslMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
    title: "Black Covertitle",
    price: 399.0,
  },
  {
    id: "5",
    img: "https://i.pinimg.com/736x/6a/da/f6/6adaf678b33068a02e1a87b35d9cbc6c.jpg",
    title: "GREEN COVER",
    price: 349.9,
  },
];

export const Animation = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full py-10">
      <div className="flex items-center justify-center flex-col gap-4 px-4">
        <h2 className="text-[30px] font-semibold uppercase">ANIMATION</h2>
        <p className="text-brand-gray text-center text-[16px] font-medium max-w-[500px]">
          We create animated track covers, artist snippets, and lyric videos for
          YouTube
        </p>
      </div>

      <div className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-5 px-5 pb-6 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 xl:grid-cols-5">
        {datas.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center snap-center shrink-0 min-w-[280px] md:min-w-0 md:w-full"
          >
            <div className="relative w-full">
              <img
                src={item.img}
                alt={item.title}
                className="h-[472px] w-full object-cover rounded-[8px]"
              />
            </div>
            <h3 className="text-brand-black mt-4 text-center text-[18px] font-semibold">
              {item.title}
            </h3>
            <p className="text-brand-gray text-center text-[16px] font-normal">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <Button variant="primary">SHOW ALL</Button>
    </div>
  );
};
