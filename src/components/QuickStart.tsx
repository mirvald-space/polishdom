'use client'


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
      title: "Поиск",
      description: "Найдите бота по поиску @polishdom_bot или воспользуйтесь прямой ссылкой на нашем сайте"
    },
    {
      number: 2,
      title: "Подписка",
      description: "Получайте полезные материалы, обновления и советы по подготовке к экзамену на Карту поляка"
    },
    {
      number: 3,
      title: "Использование бесплатно",
      description: "Весь функционал бота доступен сразу после подписки на канал без дополнительных платежей"
    },
    {
      number: 4,
      title: "Готовься к экзамену",
      description: "Тренируйся в удобное время, проходи тесты и практикуй разговорные навыки для успешного собеседования"
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