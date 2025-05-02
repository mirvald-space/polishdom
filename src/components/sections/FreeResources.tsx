import React from "react";

export const FreeResources: React.FC = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch px-[220px] py-10 max-md:max-w-full max-md:px-5">
      <h2 className="text-[rgba(59,56,40,1)] text-[32px] font-bold text-center">
        А ещё бесплатно:
      </h2>

      <div className="flex w-full items-stretch gap-0.5 flex-wrap mt-8 max-md:max-w-full">
        <div className="bg-[rgba(69,184,240,1)] relative flex min-w-60 flex-col overflow-hidden text-white flex-1 shrink basis-[0%] p-[18px] rounded-[18px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/e658e3862c0f457c5305c4fbb1bbd1fee3b5518d?placeholderIfAbsent=true"
            alt="Background"
            className="aspect-[3.44] object-contain w-[499px] absolute z-0 max-w-full h-[145px] right-0 bottom-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/2ed440ee830a668673d9e7f0ad15e66bab1ab40c?placeholderIfAbsent=true"
            alt="Telegram"
            className="aspect-[1] object-contain w-14 z-0 py-4 rounded-[56px]"
          />
          <div className="self-stretch z-0 w-full mt-2 max-md:max-w-full">
            <h3 className="text-xl font-semibold leading-8 max-md:max-w-full">
              Подпишись на рассылку с полезными материалами для подготовки к
              экзаменам
            </h3>
            <p className="text-sm font-normal leading-5 mt-2 max-md:max-w-full">
              Мой тг канал где я делюсь полезной информацией о польском языке,
              культуре и лайфхаках для успешного обучения.
            </p>
          </div>
        </div>

        <div className="bg-white min-w-60 flex-1 shrink basis-[0%] p-[18px] rounded-[18px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/2ed440ee830a668673d9e7f0ad15e66bab1ab40c?placeholderIfAbsent=true"
            alt="Telegram Bot"
            className="aspect-[1] object-contain w-14 py-4 rounded-[56px]"
          />
          <div className="min-h-28 w-full mt-2 max-md:max-w-full">
            <h3 className="text-[rgba(59,56,40,1)] text-xl font-semibold leading-[1.6] max-md:max-w-full">
              ТГ-Бот
            </h3>
            <p className="text-[#3B3828] text-sm font-normal leading-6 mt-2 max-md:max-w-full">
              Бот ИИ консул для подготовки к карте поляка. Задавайте вопросы и
              получайте мгновенные ответы в любое время.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
