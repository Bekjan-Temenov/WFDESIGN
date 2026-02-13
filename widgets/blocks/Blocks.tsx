"use client";
import { Button } from "@/shared/primary-button";
import clsx from "clsx";
import { Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const datas = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    title: "GREEN COVER",
    price: 49.0,
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    title: "GREEN COVER",
    price: 29.99,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    title: "GREEN COVER",
    price: "SOLD",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "GREEN COVER",
    price: 399.0,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    title: "GREEN COVER",
    price: 349.9,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215",
    title: 'GREEN COVER"',
    price: "SOLD",
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    title: 'GREEN COVER"',
    price: 999.0,
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
    title: "GREEN COVER",
    price: "SOLD",
  },
  {
    id: "9",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    title: "GREEN COVER",
    price: 479.0,
  },
  {
    id: "10",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    title: "GREEN COVER",
    price: 129.0,
  },
];

export const Blocks = () => {
  const [isLiked, setIsLiked] = useState<string[]>([]);

  const handleLike = (id: string) => {
    setIsLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center py-10">
      <div className="flex items-center justify-center flex-col gap-[16px]">
        <h2 className="text-[24px] md:text-[30px] font-semibold text-center">
          PREMADE COVERS
        </h2>
        <p className="text-brand-gray text-center text-[14px] md:text-[16px] font-medium max-w-[300px] md:max-w-none">
          Use the color and price filter to choose the perfect cover for your
          track.
        </p>
      </div>

      <div className="grid gap-y-8 gap-x-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {datas.map((item, index) => (
          <div
            key={item.id}
            className={clsx(
              "flex flex-col items-center",
              // На мобилке (до 640px) показываем только первые 6 элементов.
              // На sm и выше (от 640px) - показываем всё (возвращаем display:flex)
              index >= 6 ? "hidden sm:flex" : "flex",
            )}
          >
            <div className="relative w-full aspect-square">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-[8px]"
              />

              {item.price === "SOLD" && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  SOLD
                </div>
              )}

              <Heart
                onClick={() => handleLike(item.id)}
                fill={isLiked.includes(item.id) ? "red" : "transparent"}
                className={clsx(
                  "absolute top-2 right-2 cursor-pointer transition-all duration-300 active:scale-90",
                  isLiked.includes(item.id)
                    ? "text-red-500 stroke-red-500"
                    : "text-gray-200 stroke-gray-200",
                )}
                strokeWidth={1.5}
                size={24}
              />
            </div>

            <div className="mt-4 flex flex-col items-center gap-1">
              <h3 className="text-brand-black text-center text-[14px] md:text-[18px] font-semibold uppercase">
                {item.title}
              </h3>
              <p
                className={clsx(
                  "text-center text-[14px] md:text-[16px] font-medium",
                  item.price === "SOLD" ? "text-red-500" : "text-brand-gray",
                )}
              >
                {item.price === "SOLD" ? "SOLD" : `$${item.price}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button variant="primary" className="mt-5">
        SHOW ALL
      </Button>
    </div>
  );
};
