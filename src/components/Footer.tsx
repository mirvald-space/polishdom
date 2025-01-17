const Footer = () => {
	return (
		<footer className='bg-white border-t border-gray-200 py-8'>
			<div className='max-w-[768px] mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					{/* Левая часть */}
					<div className='text-center md:text-left mb-6 md:mb-0'>
						<div className='flex items-center justify-center md:justify-start mb-4'>
							<div className='w-6 h-6 rounded-full bg-red-500 mr-2'></div>
							<h2 className='text-xl font-bold text-gray-900'>Polishdom</h2>
						</div>
						<p className='text-gray-600'>
							Делаю обучение польскому увлекательным и интересным.
						</p>
						<div className='flex justify-center md:justify-start mt-4 space-x-4'>
							<a href='#' className='text-gray-600 hover:text-gray-900'>
								<i className='fab fa-facebook'></i> {/* Facebook */}
							</a>
							<a href='#' className='text-gray-600 hover:text-gray-900'>
								<i className='fab fa-instagram'></i> {/* Instagram */}
							</a>
							<a href='#' className='text-gray-600 hover:text-gray-900'>
								<i className='fab fa-telegram'></i> {/* Telegram */}
							</a>
						</div>
					</div>

					{/* Правая часть */}
					<div className='text-center md:text-right'>
						<h3 className='text-gray-900 font-bold mb-2'>Для общих вопросов</h3>
						<p className='text-gray-600'>polishdom.info@gmail.com</p>
					</div>
				</div>

				{/* Нижняя полоса */}
				<div className='mt-8 flex flex-col md:flex-row justify-between text-center md:text-left text-gray-500 text-sm'>
					<p>© 2022. PolishDom. Все права защищены.</p>
					<div className='flex justify-center md:justify-end space-x-4 mt-4 md:mt-0'>
						<a href='#' className='hover:underline'>
							Политика конфиденциальности
						</a>
						<span>|</span>
						<a href='#' className='hover:underline'>
							Условия и положения
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
