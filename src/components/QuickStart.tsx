'use client'

import Link from 'next/link'

const FeatureCard = ({
  number,
  title,
  description,
  isActive = false,
}: {
  number: number
  title: string
  description: string
  isActive?: boolean
}) => {
  return (
    <div className={`relative rounded-3xl p-8 transition-all duration-300 ${
      isActive ? 'bg-amber-100' : 'bg-white'
    } h-full`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
            <span className="text-sm font-bold">{number.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  )
}

const QuickStart = () => {
  const features = [
    {
      number: 1,
      title: "Базовая грамматика",
      description: "Без душных правил. Изучаем мужской, женский род, мн. число, правильное склонение глаголов, времена, предлоги"
    },
    {
      number: 2,
      title: "Практика и снова практика",
      description: "Используем выученные слова в разговоре, строим диалоги и выполняем устные упражнения с поддержкой преподавателей"
    },
    {
      number: 3,
      title: "Много лексики",
      description: "Разбираем слова, формулировки и сленг. Акцент на актуальную лексику и особенности речи израильтян"
    },
    {
      number: 4,
      title: "Домашние задания",
      description: "Ровно столько, сколько нужно, чтобы запомнить материал, но не вскипятить мозг"
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-[#fdf7e2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
              isActive={feature.number === 4}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickStart 