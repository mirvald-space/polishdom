import React from "react";

interface MarqueeTextProps {
  items: Array<{ text: string; type?: "text" | "separator" }>;
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({ items }) => {
  return (
    <div className="bg-[rgba(158,187,61,1)] flex w-full gap-3 overflow-hidden text-sm text-white font-bold uppercase leading-6 pl-6 py-3 max-md:max-w-full max-md:pl-5">
      {items.map((item, index) => (
        <div key={index}>{item.text}</div>
      ))}
    </div>
  );
};
