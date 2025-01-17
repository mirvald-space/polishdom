const Card = ({
	icon,
	title,
	text,
	bgColor,
}: {
	icon: string
	title: string
	text: string
	bgColor: string
}) => {
	return (
		<div className='flex flex-col gap-2 bg-white border bg-white p-4 rounded-3xl '>
			<div
				className={`flex items-center justify-center w-16 h-16 ${bgColor} rounded-full text-3xl`}
			>
				{icon}
			</div>
			<h3 className='text-xl font-bold'>{title}</h3>
			<p className='text-gray-600 text-sm'>{text}</p>
		</div>
	)
}

const Features = () => {
	const cards = [
		{
			icon: '🤖',
			title: 'Индивидуальный подход',
			text: 'Я разрабатываю персональный план обучения, учитывая ваш уровень языка, цели и график. Вы учитесь в комфортном для вас темпе.',
			bgColor: 'bg-blue-100',
		},
		{
			icon: '💻',
			title: 'Удобство и технологии',
			text: 'Использую AI-технологии, тренажеры и авторские материалы, чтобы сделать ваше обучение максимально эффективным.',
			bgColor: 'bg-green-100',
		},
		{
			icon: '⏰',
			title: 'Результаты и успехи',
			text: 'Мои ученики делятся своими достижениями: от сдачи экзаменов до переезда в Польшу. Ваш успех — моя главная цель.',
			bgColor: 'bg-yellow-100',
		},
	]

	return (
		<div className='flex py-16 flex-col gap-4 max-w-[768px] mx-auto'>
			<h2 className='text-3xl font-bold text-center text-gray-900'>
				Чем я могу помочь?
			</h2>
			<div className='grid gap-4 md:grid-cols-3'>
				{cards.map((card, index) => (
					<Card
						key={index}
						icon={card.icon}
						title={card.title}
						text={card.text}
						bgColor={card.bgColor}
					/>
				))}
			</div>
		</div>
	)
}

export default Features
