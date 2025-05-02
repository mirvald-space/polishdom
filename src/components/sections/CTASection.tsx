import React from "react";
import { Button } from "../ui/Button";

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  variant?: "default" | "test" | "guide";
  image?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  variant = "default",
  image,
}) => {
  if (variant === "guide") {
    return (
      <section className="bg-[rgba(24,45,14,1)] flex w-full gap-[40px_48px] justify-center flex-wrap px-[220px] py-10 max-md:max-w-full max-md:px-5">
        <div className="flex min-w-60 flex-col flex-1 shrink basis-[0%] max-md:max-w-full">
          <h2 className="text-white text-[32px] font-bold text-center">
            {title}
          </h2>
          <p className="self-stretch text-white text-sm font-normal leading-6 mt-2 max-md:max-w-full">
            {description}
          </p>
          <Button variant="secondary" className="self-stretch mt-2">
            {buttonText}
          </Button>
        </div>
        {image && (
          <img
            src={image}
            alt="Guide"
            className="aspect-[0.83] object-contain w-32 shrink-0"
          />
        )}
      </section>
    );
  }

  return (
    <section className="bg-[rgba(24,45,14,1)] flex w-full items-center gap-[40px_48px] flex-wrap px-[220px] py-10 max-md:max-w-full max-md:px-5">
      <div className="self-stretch min-w-60 flex-1 shrink basis-12 my-auto max-md:max-w-full">
        <h2 className="text-white text-[32px] font-bold leading-[48px] max-md:max-w-full">
          {title}
        </h2>
        <p className="text-white text-sm font-normal leading-6 mt-3 max-md:max-w-full">
          {description}
        </p>
      </div>
      <Button variant="secondary" className="self-stretch my-auto">
        {buttonText}
      </Button>
    </section>
  );
};
