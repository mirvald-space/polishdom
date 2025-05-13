import React from "react";
import { Button } from "./button";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  priceDescription: string;
  buttonText: string;
  buttonUrl?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  priceDescription,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className="bg-[#FAFAFA] p-5 flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] rounded-[20px] gap-5">
      <div className="text-2xl leading-none uppercase">
        {title}
      </div>
      <div className="font-normal leading-5 mt-3 text-base">
        {description}
      </div>
      <div className="mt-3">
        <span className="font-bold text-[24px] leading-[32px] text-[rgba(17,17,17,1)]">
          {price}
        </span>{" "}
        <span className="font-normal text-base leading-[19px] text-[rgba(59,56,40,1)]">
          {priceDescription}
        </span>
      </div>
      {buttonUrl ? (
        <Button asChild>
          <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      ) : (
        <Button >{buttonText}</Button>
      )}
    </div>
  );
};
