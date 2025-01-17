const HowToStart = () => {
	return (
		<div className='flex flex-col gap-4 py-16 max-w-[768px] mx-auto'>
			<h2 className='text-3xl font-bold text-center text-gray-900'>
				Как начать обучение
			</h2>

			<div className='grid gap-4 md:grid-cols-2'>
				{/* Карточка 1 */}
				<div className='flex flex-col bg-white p-6 rounded-lg shadow-lg'>
					<div className='flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full mr-4 text-sm font-bold text-gray-900'>
						01
					</div>
					<div>
						<h3 className='text-xl font-bold mb-2 text-gray-900'>
							Бесплатная подготовка с AI
						</h3>
						<p className='text-gray-600'>
							Используйте бот, чтобы проверить свой уровень языка и
							потренироваться перед экзаменом на Карту Поляка.
						</p>
					</div>
				</div>

				{/* Карточка 2 */}
				<div className='flex flex-col bg-white p-6 rounded-lg shadow-lg'>
					<div className='flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full mr-4 text-sm font-bold text-gray-900'>
						02
					</div>
					<div>
						<h3 className='text-xl font-bold mb-2 text-gray-900'>
							Индивидуальное обучение
						</h3>
						<p className='text-gray-600'>
							Я создала бот, чтобы помочь вам начать, но на индивидуальных
							занятиях вы получите максимум пользы и внимания.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowToStart
