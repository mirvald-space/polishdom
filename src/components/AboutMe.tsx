import Image from 'next/image'

const AboutMe = () => {
	return (
		<div className='flex flex-col gap-4 py-16 max-w-[768px] mx-auto'>
			<h2 className='text-3xl font-bold text-center'>Обо мне</h2>
			<div className='flex flex-col md:flex-row p-4 border rounded-xl items-center bg-white gap-4'>
				<div className='flex-shrink-0'>
					<div className='w-48 h-48 rounded-full overflow-hidden'>
						<Image
							src='/path-to-your-photo.jpg' // Замените на путь к вашему фото
							alt='Ваше фото'
							width={192} // Ширина изображения
							height={192} // Высота изображения
							className='object-cover'
						/>
					</div>
				</div>
				<div className='text-center md:text-left'>
					<p className='text-lg mb-4'>
						Я — профессиональный репетитор польского языка с более чем 5-летним
						опытом. Провела более 2555 уроков на платформе Preply с рейтингом
						4.9.
					</p>
					<p className='text-lg'>
						Создала PolishDom Bot, чтобы помочь вам учить язык эффективно и
						удобно.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
