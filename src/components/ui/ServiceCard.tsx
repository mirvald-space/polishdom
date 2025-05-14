import React from "react";
import { Button } from "./button";

interface ServiceCardProps {
  description: string;
  price: string;
  priceDescription: string;
  features?: string[]; // список того, что входит в тариф
  buttonText: string;
  buttonUrl?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({

  description,
  price,
  priceDescription,
  features,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className="bg-[#FAFAFA] p-5 flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] rounded-[20px] gap-5">
      <div className="font-normal  mt-3 text-base">
        {description}
      </div>
      
      {features && features.length > 0 && (
        <div className="mt-2">
          <ul className="list-disc pl-5 text-base">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mt-1">
        <span className="font-bold text-[24px] leading-[32px] text-[rgba(17,17,17,1)]">
          {price}
        </span>
        {priceDescription && (
          <p className="mt-1 text-sm italic text-gray-600">
            {priceDescription}
          </p>
        )}
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
