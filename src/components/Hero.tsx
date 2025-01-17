import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className='flex flex-col items-center justify-center text-center w-full pt-16'>
			{/* Контент с ограничением по ширине */}
			<div className='flex flex-col items-center gap-4 max-w-[768px] w-full rounded-3xl p-12 bg-indigo-600'>
				<div className=' inset-0 z-20 opacity-20'>
					<Image
						src='/hero.svg' // Замените на путь к вашему фоновому изображению
						alt='Фоновое изображение'
						layout='fill'
						objectFit='cover'
						className='animate-float'
					/>
				</div>
				{/* Заголовок */}
				<h1 className='text-4xl font-bold text-white'>
					Польский язык — это просто!
					<br />
					Давайте начнем обучение уже сегодня.
				</h1>

				{/* Подзаголовок */}
				<p className='text-xl text-white'>
					Помогу подготовится к экзаменам, улучшить и достичь целей в польском
					языке с помощью индивидуальных занятий и умного бота.
				</p>

				{/* Кнопка для начала обучения */}
				<Link
					href='https://t.me/your_bot_username' // Замените на ссылку на вашего бота
					className='inline-block w-fit bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105'
				>
					Начать обучение
				</Link>
			</div>
		</div>
	)
}

export default Hero
