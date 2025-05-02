import React from "react";
import { TestimonialCard } from "../ui/TestimonialCard";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full px-[220px] py-10 max-md:max-w-full max-md:px-5"
    >
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-[rgba(17,17,17,1)] text-[32px] font-bold self-stretch my-auto">
          Что говорят мои ученики
        </h2>

        <div className="self-stretch flex items-center gap-1 justify-center my-auto">
          <button className="rotate-[3.141592653589793rad] bg-white self-stretch flex items-center gap-3 w-[68px] my-auto px-6 py-3 rounded-[18px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/3a0b3c3b16979adbf75a0cd57a5ad9dc4f039e8b?placeholderIfAbsent=true"
              alt="Previous"
              className="aspect-[1] object-contain w-5 self-stretch my-auto"
            />
          </button>
          <button className="bg-white self-stretch flex items-center gap-3 w-[68px] my-auto px-6 py-3 rounded-[18px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/25b29b70ee98170d18c88124375e2e926583f898?placeholderIfAbsent=true"
              alt="Next"
              className="aspect-[1] object-contain w-5 self-stretch my-auto"
            />
          </button>
        </div>
      </div>

      <div className="flex w-full gap-0.5 text-sm flex-wrap mt-8 max-md:max-w-full">
        <TestimonialCard
          name="Aliaksandr"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/0ff3705fed4b9719f82f4175560f7e0e82a4822d?placeholderIfAbsent=true"
          text="Екатерина – отличный преподаватель! Готовился с ней к экзамену на B1. Уроки всегда проходили интересно и разнообразно, сложные моменты разбирались очень подробно. Особо отмечу четкую структуру занятий, благодаря которой мы успели основательно подготовиться к экзамену. Очень рекомендую!"
        />

        <TestimonialCard
          name="Iryna"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/1e172df2ad7a72479310884b69e9ab4ffbe131ae?placeholderIfAbsent=true"
          text="Катерина - прекрасный репетитор! Нам повезло попасть к ней с сыном, когда мы только переехали в Польшу. Она нашла подход к нашему ребенку и за несколько месяцев помогла ему с основами языка. Сейчас в школе он не отличается от других поляков. Теперь уже я сама занимаюсь с Катей. Занятия разнообразные, всегда есть план и структура. И это не просто уроки по какой-то книге. У нее своя система и материалы. И самое главное она всегда хвалит и работает на твой прогресс, не забывая сделать шаг назад, чтобы точно усвоить пройденный материал. А еще она придумала телеграм чат, где можно практиковать язык и учить новые слова! Это пушка-бомба! Катя не только хороший репетитор, но и прекрасный человек, с котором очень приятно общ��ться!"
        />

        <TestimonialCard
          name="Maya"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/89d08520d14e570be7364d275f5f1c8f9cfad802?placeholderIfAbsent=true"
          text="Прекрасный преподаватель! Все занятия проходят в дружелюбной атмосфере, грамматика объясняется очень доходчиво, без бессмысленного заучивания материала. Последующие устные темы и лексика подбирается исходя из ваших интересов и потребностей. Всегда повторяется пройденный материал (грамматика и лексика) через несколько уроков, что помогает хорошо его усвоить. Если вы хотите повышать свои знания, приятную атмосферу на занятиях с отзывчивым преподавателем, то вам однозначно к Екатерине :)"
        />

        <TestimonialCard
          name="Daria"
          text="Занимаюсь с Катериной уже несколько месяцев и невероятно довольна занятиями! Катерина – замечательный репетитор и человек! Каждый урок интересный и продуктивный. С Катериной вы не только будете учить язык, но и узнавать о культуре Польши. Она расскажет вам много интересных фактов об этой стране. Особенно ценно то, что она учитывает все мои пожелания и предлагает индивидуальный подход, что делает процесс обучения приятным и интересным. Я всегда с нетерпением жду каждого урока. Рекомендую Катерину всем, кто хочет быстро и эффективно выучить польский язык. Спасибо большое, Катерина, за вашу помощь и позитивную атмосферу на уроках!)"
        />
      </div>
    </section>
  );
};
