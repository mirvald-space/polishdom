import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`flex flex-col max-w-[462px] mx-auto gap-[20px] lg:p-[0px] p-[20px] ${className}`}>
      {children}
    </div>
  );
} 