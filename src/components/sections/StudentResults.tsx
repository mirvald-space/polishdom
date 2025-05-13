import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Review {
  name: string;
  imageSrc?: string;
  text: string;
  rating: number;
}

export const StudentResults: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Aliaksandr",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/0ff3705fed4b9719f82f4175560f7e0e82a4822d?placeholderIfAbsent=true",
      text: "Екатерина – отличный преподаватель! Готовился с ней к экзамену на B1. Уроки всегда проходили интересно и разнообразно, сложные моменты разбирались очень подробно. Особо отмечу четкую структуру занятий, благодаря которой мы успели основательно подготовиться к экзамену. Очень рекомендую!",
      rating: 5
    },
    {
      name: "Iryna",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/1e172df2ad7a72479310884b69e9ab4ffbe131ae?placeholderIfAbsent=true",
      text: "Катерина - прекрасный репетитор! Нам повезло попасть к ней с сыном, когда мы только переехали в Польшу. Она нашла подход к нашему ребенку и за несколько месяцев помогла ему с основами языка. Сейчас в школе он не отличается от других поляков.",
      rating: 5
    },
    {
      name: "Maya",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/89d08520d14e570be7364d275f5f1c8f9cfad802?placeholderIfAbsent=true",
      text: "Прекрасный преподаватель! Все занятия проходят в дружелюбной атмосфере, грамматика объясняется очень доходчиво, без бессмысленного заучивания материала.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <img 
        key={index}
        src={index < rating ? "/star-filled.svg" : "/star-empty.svg"}
        alt={index < rating ? "Заполненная звезда" : "Пустая звезда"}
        className="w-6 h-6"
      />
    ));
  };

  return (
    <section className="w-full bg-white p-5 rounded-[20px]">
      <h2 className="text-2xl font-bold uppercase mb-6">
        РЕЗУЛЬТАТЫ МОИХ УЧЕНИКОВ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-[#FAFAFA] p-5 rounded-lg flex flex-col items-center justify-center">
          <div className="text-[24px] leading-[32px] font-bold mb-2">10+</div>
          <div className="text-center">получили карту поляка</div>
        </div>
        <div className="bg-[#FAFAFA] p-5 rounded-lg flex flex-col items-center justify-center">
          <div className="text-[24px] leading-[32px] font-bold mb-2">100%</div>
          <div className="text-center">успешно сдали экзамены</div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-5 rounded-[20px]">
        <div className="flex items-center mb-4">
          {reviews[currentIndex].imageSrc ? (
            <div className="rounded-full overflow-hidden w-16 h-16 mr-4 flex-shrink-0">
              <img
                src={reviews[currentIndex].imageSrc}
                alt={reviews[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="bg-gray-200 rounded-full w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-500">
                {reviews[currentIndex].name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold">{reviews[currentIndex].name}</h3>
            <div className="flex mt-1">
              {renderStars(reviews[currentIndex].rating)}
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-3">{reviews[currentIndex].text}</p>
        <a href="https://preply.com/ru/repetitor/587221" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer">
          Смотреть оригинал
        </a>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button 
          onClick={prevReview}
          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-[20px]"
          aria-label="Предыдущий отзыв"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextReview}
          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-[20px]"
          aria-label="Следующий отзыв"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}; 