import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className='relative w-full h-screen bg-indigo-600 text-white flex items-center justify-center'>
			{/* Фоновое изображение */}
			<div className='absolute inset-0'>
				<Image
					src='/hero.svg' // Укажите путь к вашему изображению
					alt='Фоновое изображение'
					fill
					style={{ objectFit: 'cover' }}
					className='opacity-30'
				/>
			</div>

			{/* Контент */}
			<div className='relative z-10 max-w-[768px] text-center px-6'>
				{/* Заголовок */}
				<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
					Польский язык — это просто!
					<br />
					Давайте начнем обучение уже сегодня.
				</h1>

				{/* Подзаголовок */}
				<p className='text-lg sm:text-xl mb-8'>
					Помогу подготовиться к экзаменам, улучшить навыки и достичь целей в
					польском языке с помощью индивидуальных занятий и умного бота.
				</p>

				{/* Кнопка */}
				<Link href='https://t.me/your_bot_username' passHref>
					<span className='inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105'>
						Начать обучение
					</span>
				</Link>
			</div>
		</div>
	)
}

export default Hero
