import Image from "next/image";
const datas = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    title: "Pick your Cover",
    text: "Explore 10,000+ covers. We’ll make it yours",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    title: "GREEN COVER",
    text: "Download the finished cover  within 12 hours",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    title: "ADD YOUR INFO",
    text: "Fill in your details and choose the  addons you need",
  },
];

export const Works = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full py-10 md:py-16">
      <div className="flex flex-col items-center gap-3 mb-8 md:mb-12 text-center">
        <h2 className="text-[24px] md:text-[30px] font-semibold uppercase">
          HOW IT WORKS
        </h2>
        <p className="text-brand-gray text-[14px] md:text-[16px] font-medium">
          Just three steps
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 w-full">
        {datas.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between bg-[#FAFAFA] rounded-[8px] p-6 md:p-8 lg:p-10 h-full w-full"
          >
            {" "}
            <div className="flex flex-col gap-3 md:gap-4 items-center mb-6 md:mb-8">
              <h3 className="text-brand-black text-center text-[18px] md:text-[20px] font-semibold">
                {item.title}
              </h3>
              <p className="text-brand-gray text-center text-[14px] md:text-[16px] font-normal leading-relaxed">
                {item.text}
              </p>
            </div>
            <div className="relative w-full h-[200px] md:h-[230px]">
              {" "}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-[8px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};