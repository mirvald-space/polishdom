import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="bg-white py-16 px-4 border-t border-gray-100">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Column 1 - Logo and description */}
					<div>
						<h3 className="text-3xl font-bold text-indigo-600 mb-2">PolishDom</h3>
						<p className="text-gray-500 mb-6">
							Телеграм-бот для быстрого<br />
							изучения польского языка с AI
						</p>
						<div className="flex space-x-3">
							<Link href="https://t.me/polishbot" className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M22.2647 2.42778C21.98 2.19091 21.6364 2.03567 21.2704 1.97858C20.9045 1.92149 20.5299 1.96469 20.1866 2.10278L2.26566 9.33778C1.88241 9.49102 1.55618 9.75478 1.33033 10.0956C1.10448 10.4364 0.989258 10.8377 0.999659 11.2458C1.01006 11.6538 1.14554 12.0478 1.38382 12.3752C1.62211 12.7026 1.95746 12.9475 2.34566 13.0778L5.72566 14.1428V18.7778C5.72504 19.2256 5.85217 19.6635 6.09023 20.0358C6.32829 20.4081 6.66693 20.6983 7.06566 20.8728C7.46443 21.0472 7.90566 21.0983 8.33407 21.0198C8.76248 20.9413 9.15949 20.7365 9.47266 20.4328L11.3657 18.6028L14.1727 21.2428C14.5455 21.5946 15.0221 21.8165 15.5287 21.8778C16.0352 21.9391 16.5492 21.8367 16.9977 21.5878C17.4462 21.3388 17.8068 20.9567 18.0276 20.4937C18.2484 20.0307 18.3175 19.5112 18.2247 19.0078L15.2647 3.36778C15.1816 2.9356 14.9797 2.53704 14.6841 2.22259C14.3885 1.90814 14.0125 1.69338 13.6027 1.60778C13.1929 1.52218 12.7672 1.56991 12.3862 1.74451C12.0052 1.91911 11.6883 2.21259 11.4747 2.58778L10.6247 4.11778L5.72566 14.1428" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</Link>
							<Link href="https://instagram.com/polishdom" className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z" stroke="currentColor" strokeWidth="2"/>
									<path d="M17.5 6.5L17.51 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</Link>
						</div>
					</div>
					
					{/* Column 2 - Support */}
					<div className="md:text-center">
						<h3 className="text-indigo-600 font-medium mb-2">@polish_support</h3>
						<p className="text-gray-500">
							Поддержка в Телеграм
						</p>
					</div>
					
					{/* Column 3 - Features */}
					<div className="md:text-right">
						<h3 className="text-indigo-600 font-medium mb-2">AI-функции</h3>
						<p className="text-gray-500">
							Тренажер для Карты Поляка<br />
							Тест уровня польского языка<br />
							Ежедневные слова с AI
						</p>
					</div>
				</div>
				
				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-500 text-sm">
					<div>
						© 2024-2025 PolishDom. Все права защищены
					</div>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link href="/terms" className="hover:text-indigo-600 transition-colors">
							Пользовательское соглашение
						</Link>
						<Link href="/privacy" className="hover:text-indigo-600 transition-colors">
							Политика конфиденциальности
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
