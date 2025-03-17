import Link from 'next/link'
import { FaTelegram, FaInstagram, FaThreads } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-white py-16 px-4 border-t border-gray-100">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Column 1 - Logo and description */}
					<div>
						<h3 className="text-3xl font-bold mb-2">PolishDom</h3>
						<p className="text-gray-500 mb-6">
							Телеграм-бот для быстрого<br />
							изучения польского языка с AI
						</p>
						<div className="flex space-x-3">
							<Link href="https://t.me/polishbot" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
								<FaTelegram size={24} />
							</Link>
							<Link href="https://instagram.com/polishdom" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
								<FaInstagram size={24} />
							</Link>
							<Link href="https://t.me/polishbot" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"><FaThreads size={24} /></Link>
						</div>
					</div>
					
					{/* Column 2 - Support */}
					<div className="md:text-center">
						<h3 className="text-red-600 font-medium mb-2">@polish_support</h3>
						<p className="text-gray-500">
							Поддержка в Телеграм
						</p>
					</div>
					
					{/* Column 3 - Features */}
					<div className="md:text-right">
						<h3 className="text-red-600 font-medium mb-2">AI-функции</h3>
						<p className="text-gray-500">
							Тренажер для Карты Поляка<br />
							Тест уровня польского языка<br />
							Ежедневные слова с AI
						</p>
					</div>
				</div>
				
				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-500 text-sm">
					<div>
						©2025 PolishDom. Все права защищены
					</div>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link href="/terms" className="hover:text-red-600 transition-colors">
							Пользовательское соглашение
						</Link>
						<Link href="/privacy" className="hover:text-red-600 transition-colors">
							Политика конфиденциальности
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
