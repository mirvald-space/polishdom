const Testimonials = () => {
	return (
		<div className='flex flex-col gap-4 py-16 max-w-[768px] mx-auto'>
			<h2 className='text-3xl font-bold'>Отзывы</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				<div className='bg-gray-50 p-6 rounded-lg shadow-md'>
					<p>
						&quot;Бот просто супер! Помог мне подготовиться к собеседованию на
						Карту Поляка.&quot;
					</p>
					<p className='font-bold mt-4'>- Анна</p>
				</div>
				<div className='bg-gray-50 p-6 rounded-lg shadow-md'>
					<p>
						&quot;Очень удобно учить новые слова каждый день. Рекомендую!&quot;
					</p>
					<p className='font-bold mt-4'>- Дмитрий</p>
				</div>
				<div className='bg-gray-50 p-6 rounded-lg shadow-md'>
					<p>
						&quot;Спасибо за бота! Теперь я могу учить польский в любое
						время.&quot;
					</p>
					<p className='font-bold mt-4'>- Елена</p>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
