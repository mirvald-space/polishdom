'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false) // Для мобильного меню

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`sticky top-0 left-0 w-full z-50 transition-colors duration-300 ${
				isScrolled ? 'bg-white shadow-md' : 'bg-indigo-600'
			}`}
		>
			<div className='max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3'>
				{/* Логотип */}
				<Link href='/' className='flex items-center'>
					<Image
						src='/logo.png' // Укажите путь к вашему логотипу
						alt='PolishDom Bot Logo'
						width={40}
						height={40}
						className='rounded-full'
					/>
					<span
						className={`ml-2 text-xl font-bold ${
							isScrolled ? 'text-gray-800' : 'text-white'
						}`}
					>
						PolishDom
					</span>
				</Link>

				{/* Меню для больших экранов */}
				<nav className='hidden md:flex items-center space-x-8'>
					<Link
						href='#about'
						className={`${
							isScrolled
								? 'text-gray-600 hover:text-blue-500'
								: 'text-white hover:text-gray-300'
						} transition-colors`}
					>
						О боте
					</Link>
					<Link
						href='#features'
						className={`${
							isScrolled
								? 'text-gray-600 hover:text-blue-500'
								: 'text-white hover:text-gray-300'
						} transition-colors`}
					>
						Преимущества
					</Link>
					<Link
						href='#testimonials'
						className={`${
							isScrolled
								? 'text-gray-600 hover:text-blue-500'
								: 'text-white hover:text-gray-300'
						} transition-colors`}
					>
						Отзывы
					</Link>
					<Link
						href='#faq'
						className={`${
							isScrolled
								? 'text-gray-600 hover:text-blue-500'
								: 'text-white hover:text-gray-300'
						} transition-colors`}
					>
						FAQ
					</Link>
				</nav>

				{/* Кнопка для мобильного меню */}
				<button
					className={`md:hidden p-2 rounded-full ${
						isScrolled ? 'text-gray-800' : 'text-white'
					}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? '✖' : '☰'}
				</button>

				{/* Кнопка для перехода в бота */}
				<div className='hidden md:block'>
					<a
						href='https://t.me/your_bot_username' // Укажите ссылку на вашего бота
						className={`px-6 py-2 rounded-full font-semibold transition-colors ${
							isScrolled
								? 'bg-blue-500 text-white hover:bg-blue-600'
								: 'bg-white text-blue-600 hover:bg-gray-100'
						}`}
					>
						Попробовать бота
					</a>
				</div>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div
					className={`md:hidden bg-white shadow-md transition-all ${
						isScrolled ? 'text-gray-800' : 'text-indigo-600'
					}`}
				>
					<nav className='flex flex-col items-center space-y-4 py-4'>
						<Link
							href='#about'
							className='text-gray-600 hover:text-blue-500 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							О боте
						</Link>
						<Link
							href='#features'
							className='text-gray-600 hover:text-blue-500 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							Преимущества
						</Link>
						<Link
							href='#testimonials'
							className='text-gray-600 hover:text-blue-500 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							Отзывы
						</Link>
						<Link
							href='#faq'
							className='text-gray-600 hover:text-blue-500 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							FAQ
						</Link>
						<Link
							href='https://t.me/your_bot_username'
							className='px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							Попробовать бота
						</Link>
					</nav>
				</div>
			)}
		</header>
	)
}

export default Header
