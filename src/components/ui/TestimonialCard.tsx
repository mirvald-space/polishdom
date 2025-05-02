import React from "react";

interface TestimonialCardProps {
  name: string;
  text: string;
  imageSrc?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  imageSrc,
}) => {
  return (
    <div className="bg-white border flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(59,56,40,0.1)] border-solid">
      <div className="flex items-center gap-3 text-base text-[rgba(59,56,40,1)] font-medium whitespace-nowrap">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="aspect-[1] object-contain w-16 self-stretch min-h-16 shrink-0 my-auto rounded-[56px]"
          />
        ) : (
          <div className="bg-[rgba(0,0,0,0.2)] self-stretch flex w-16 shrink-0 h-16 my-auto rounded-[56px]" />
        )}
        <div className="self-stretch my-auto">{name}</div>
      </div>
      <div className="text-[#3B3828] text-ellipsis font-normal leading-6 mt-3">
        {text}
      </div>
      <div className="text-[rgba(187,74,61,1)] font-semibold leading-none underline mt-3">
        Смотреть оригинал
      </div>
    </div>
  );
};
