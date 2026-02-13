import { Star } from "lucide-react"

export const Reviews = () => {
  return (
    <div className="flex flex-col items-center mb-22.5 justify-center gap-10">
      <h2 className="text-[30px] font-semibold text-center">
        CUSTOMER REVIEWS
      </h2>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <Star size={16} strokeWidth={1.75} color="#FEB540" fill="#FEB540" />
            <Star size={16} strokeWidth={1.75} color="#FEB540" fill="#FEB540" />
            <Star size={16} strokeWidth={1.75} color="#FEB540" fill="#FEB540" />
            <Star size={16} strokeWidth={1.75} color="#FEB540" fill="#FEB540" />
            <Star size={16} strokeWidth={1.75} color="#FEB540" fill="#FEB540" />
          </div>
          <p className="font-normal text-[16px]">4.8</p>
          <p className="font-normal text-[16px] text-brand-gray">(777)</p>
        </div>
        <p className="font-normal cursor-pointer underline text-brand-gray text-4">Read Reviews</p>
      </div>
    </div>
  );
};
