import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`flex flex-col max-w-[462px] mx-auto gap-[20px] lg:px-[0px] py-[20px] px-[20px] ${className}`}>
      {children}
    </div>
  );
} 