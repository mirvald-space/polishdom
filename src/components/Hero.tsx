"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

// Client-only component wrapper
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
	const [isClient, setIsClient] = useState(false)
	
	useEffect(() => {
		setIsClient(true)
	}, [])
	
	return isClient ? <>{children}</> : <div style={{ height: '200px' }}></div>
}

// Floating animation keyframes
const floatingAnimation = `
@keyframes float1 {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes float2 {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

@keyframes float3 {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

.float-1 {
  animation: float1 4s ease-in-out infinite;
}

.float-2 {
  animation: float2 6s ease-in-out infinite;
}

.float-3 {
  animation: float3 5s ease-in-out infinite;
}
`

const Hero = () => {
	// Базовый заголовок с изменяемой частью
	const baseHeadline = "Изучай польский с помощью "
	const changingWords = ["тренажера", "AI-консультанта", "проверки уровня", "напоминаний слов"]
	
	// Инициализируем с базовым заголовком, чтобы избежать пустого состояния
	const [displayText, setDisplayText] = useState(baseHeadline)
	const [wordIndex, setWordIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [typingSpeed, setTypingSpeed] = useState(150)

	useEffect(() => {
		const currentWord = changingWords[wordIndex]
		const fullText = baseHeadline + currentWord
		
		// Эффект печатания
		const timer = setTimeout(() => {
			if (!isDeleting) {
				// Печатаем текст
				setDisplayText(fullText.substring(0, displayText.length + 1))
				
				// Если текст полностью напечатан, начинаем удаление после паузы
				if (displayText === fullText) {
					setIsDeleting(true)
					setTypingSpeed(2000) // Пауза перед удалением
				}
			} else {
				// Удаляем только изменяемую часть
				if (displayText.length > baseHeadline.length) {
					setDisplayText(displayText.substring(0, displayText.length - 1))
					setTypingSpeed(50) // Быстрее удаляем
				} else {
					setIsDeleting(false)
					setWordIndex((wordIndex + 1) % changingWords.length)
					setTypingSpeed(150) // Нормальная скорость печати
				}
			}
		}, typingSpeed)
		
		return () => clearTimeout(timer)
	}, [displayText, isDeleting, wordIndex, changingWords, typingSpeed, baseHeadline])

	return (
		<div className='relative w-full py-12 md:py-24 bg-[#BC4B3E] text-white overflow-hidden'>
			{/* Add animation styles */}
			<style jsx global>{floatingAnimation}</style>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 relative z-0'>
				{/* Chat messages - visible on all screens with responsive positioning */}
				
				<div className="absolute right-4 sm:right-12 md:right-1 top-0 md:-top-5 max-w-[150px] md:max-w-[200px] float-2 z-10">
					<div className="bg-white text-[#1e1b4b] px-3 py-2 md:px-4 md:py-3 rounded-2xl font-medium shadow-md mb-2 relative">
						Karta Polaka
						<span className="block text-xs md:text-sm text-gray-500">Карта Поляка</span>
						<div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
					</div>
				</div>
				
				{/* Fixed positioning for the bottom bubble - using only bottom positioning */}
				<div className="absolute left-10 sm:left-12 md:left-304 bottom-200 md:bottom-0 max-w-[150px] md:max-w-[200px] float-3 z-10">
					<div className="bg-white text-[#1e1b4b] px-3 py-2 md:px-4 md:py-3 rounded-2xl font-medium shadow-md mb-2 relative">
						Nauka słów
						<span className="block text-xs md:text-sm text-gray-500">Изучение слов</span>
						<div className="absolute -bottom-2 left-4 w-4 h-4 bg-white transform rotate-45"></div>
					</div>
				</div>

				{/* Main content with increased top padding to avoid overlap */}
				<div className="text-center pt-20 md:pt-0 relative z-0">
					{/* Title with typing effect - fixed height container */}
					<div className="h-[150px] md:h-[200px] flex items-center justify-center">
						<ClientOnly>
							<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-col'>
								<span className="inline-block text-center">Изучай польский с помощью</span>
								<span className="inline-block text-center mt-2 md:mt-4">{displayText.substring(baseHeadline.length) || " "}|</span>
							</h1>
						</ClientOnly>
					</div>

					{/* Subtitle */}
					<p className='text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto text-white px-4'>
						Готовьтесь к Карте Поляка эффективно: интерактивные тренировки, языковые тесты и умные напоминания
					</p>

					{/* Button */}
					<div className='flex justify-center'>
						<Button asChild size="lg" className='bg-white text-black rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium'>
							<Link href='https://t.me/wordich_bot'>
								Начать бесплатно
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero