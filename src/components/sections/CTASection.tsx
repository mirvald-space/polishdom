import React from "react";
import { Button, LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  bgColor?: string;
  textColor?: string;
  image?: string;
  linkTo?: string;
  isExternal?: boolean;
  blank?: boolean;
  imageAlt?: string;
  buttonClassName?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  bgColor = "bg-white",
  textColor = "text-black",
  image,
  linkTo,
  isExternal = false,
  blank = false,
  imageAlt = "Изображение",
  buttonClassName,
}) => {
  // Универсальный компонент кнопки
  const ActionButton = ({ className }: { className?: string }) => {
    const defaultButtonClasses = "w-full rounded-[20px]";
    const buttonClasses = buttonClassName ? buttonClassName : defaultButtonClasses;

    const buttonElement = linkTo ? (
      <LinkButton 
        variant="default" 
        className={buttonClasses}
        to={linkTo}
        external={isExternal}
        blank={blank}
      >
        {buttonText}
      </LinkButton>
    ) : (
      <Button 
        variant="default" 
        className={buttonClasses}
      >
        {buttonText}
      </Button>
    );

    return buttonElement;
  };

  return (
    <section className={cn("flex flex-col p-5 w-full rounded-[20px] gap-5", bgColor)}>
      <div className="flex flex-col ">
        {image && (
          <div className=" flex justify-center items-center gap-5">
            <img
              src={image}
              alt={imageAlt}
              className="w-32 md:w-40 object-contain"
            />
            <h2 className={cn("text-[24px] leading-[32px] font-bold uppercase", textColor)}>
            {title}
          </h2>
          </div>
        )}
        
      </div>
      <div className={cn("flex flex-col gap-4 w-full")}>
          
          <p className={cn("text-[16px] leading-[24px] font-normal", textColor)}>
            {description}
          </p>
          <ActionButton className="w-full" />
        </div>
    </section>
  );
};
