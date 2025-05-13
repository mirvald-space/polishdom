import React from "react";

interface MarqueeTextProps {
  items: Array<{ text: string; type?: "text" | "separator" }>;
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({ items }) => {
  return (
    <div className="bg-[#FF9801] text-sm text-black font-bold uppercase pl-6 py-3 max-md:max-w-full max-md:pl-5 overflow-hidden rounded-[20px]">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Первый набор элементов */}
        {items.map((item, index) => (
          <div className="flex items-center w-fit whitespace-nowrap mr-6" key={`first-${index}`}>
            {item.text}
          </div>
        ))}
        
        {/* Дублируем элементы для бесконечного эффекта */}
        {items.map((item, index) => (
          <div className="flex items-center w-fit whitespace-nowrap mr-6" key={`second-${index}`}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
