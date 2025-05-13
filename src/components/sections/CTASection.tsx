import React from "react";
import { Button, LinkButton } from "@/components/ui/button";

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  variant?: "default" | "test" | "guide" | "telegram";
  image?: string;
  linkTo?: string;
  isExternal?: boolean;
  blank?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  variant = "default",
  image,
  linkTo,
  isExternal = false,
  blank = false,
}) => {
  // Компонент кнопки с учетом ссылки
  const ButtonComponent = () => {
    if (linkTo) {
      return (
        <LinkButton 
          variant="default" 
          className="w-full bg-white text-black hover:bg-gray-100 py-4 text-md font-bold rounded-[20px]"
          to={linkTo}
          external={isExternal}
          blank={blank}
        >
          {buttonText}
        </LinkButton>
      );
    }
    
    return (
      <Button 
        variant="default" 
        className="w-full bg-white text-black hover:bg-gray-100 py-4 text-md font-bold rounded-[20px]"
      >
        {buttonText}
      </Button>
    );
  };

  const TelegramButtonComponent = () => {
    if (linkTo) {
      return (
        <LinkButton 
          variant="ghost" 
          className="w-full text-black font-bold py-4 text-center rounded-[20px]"
          to={linkTo}
          external={isExternal}
          blank={blank}
        >
          {buttonText}
        </LinkButton>
      );
    }
    
    return (
      <Button 
        variant="ghost" 
        className="w-full text-black font-bold py-4 text-center rounded-[20px]"
      >
        {buttonText}
      </Button>
    );
  };

  const DefaultButtonComponent = () => {
    if (linkTo) {
      return (
        <LinkButton 
          variant="default" 
          className="w-full rounded-[20px]"
          to={linkTo}
          external={isExternal}
          blank={blank}
        >
          {buttonText}
        </LinkButton>
      );
    }
    
    return (
      <Button 
        variant="default" 
        className="w-full rounded-[20px]"
      >
        {buttonText}
      </Button>
    );
  };

  if (variant === "guide") {
    return (
      <section className="flex flex-col p-5 bg-[#0ca65a] w-full rounded-[20px]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {image && (
            <div className="md:w-1/3 flex justify-center">
              <img
                src={image}
                alt="Гайд по изучению польского языка - эффективные методики и советы"
                className="w-32 md:w-40 object-contain"
              />
            </div>
          )}
          <div className="md:w-2/3">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-white text-sm mb-6">
              {description}
            </p>
            <ButtonComponent />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "telegram") {
    return (
      <section className="flex flex-col p-5 bg-[#51b4e8] w-full rounded-[20px]">
        <div className="flex flex-row items-center">
          {image && (
            <div className="mr-5">
              <img
                src={image}
                alt="Telegram канал с упражнениями по польскому языку"
                className="w-24 h-24 object-contain"
              />
            </div>
          )}
          <div className="flex flex-col">
            <h2 className="text-white text-[24px] leading-[32px] font-bold uppercase">
              {title}
            </h2>
          </div>
        </div>
        
        <p className="text-white text-base max-md:max-w-full">
          {description}
        </p>
        
        <div className="bg-white rounded-[20px]">
          <TelegramButtonComponent />
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="flex flex-col p-5 bg-white w-full gap-5 rounded-[20px]">
      <div className="flex flex-col gap-1 max-md:max-w-full">
        <h2 className="text-black text-[24px] leading-[32px] font-bold">
          {title}
        </h2>
        <p className="self-stretch text-black text-sm font-normal leading-6 max-md:max-w-full">
          {description}
        </p>
        <DefaultButtonComponent />
      </div>
    </section>
  );
};
