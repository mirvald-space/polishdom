import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`bg-white border flex min-w-60 items-center gap-3 flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(59,56,40,0.1)] border-solid ${className || ""}`}
    >
      <div className="self-stretch w-full flex-1 shrink basis-[0%] my-auto">
        <div className="text-[rgba(59,87,52,1)] text-base font-bold uppercase">
          {title}
        </div>
        <div className="text-[rgba(59,56,40,1)] text-sm font-normal leading-5 mt-1">
          {description}
        </div>
      </div>
    </div>
  );
};
