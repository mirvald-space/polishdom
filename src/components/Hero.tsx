"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

const Hero = () => {
	const polishWords = [
		{ word: 'Dzień dobry', translation: 'Добрый день' },
		{ word: 'Dziękuję', translation: 'Спасибо' },
	]

	// Базовый заголовок с изменяемой частью
	const baseHeadline = "Изучайте польский язык с помощью "
	const changingWords = ["AI", "искусственного интеллекта", "тренажера", "консультанта", "бота"]
	
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
	}, [displayText, isDeleting, wordIndex])

	return (
		<div className='relative w-full py-24 bg-[#BC4B3E] text-white overflow-hidden'>
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -left-20 top-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
				<div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
				<div className="absolute right-1/4 top-1/4 w-8 h-8 bg-purple-300/30 rounded-full"></div>
				<div className="absolute left-1/3 bottom-1/4 w-4 h-4 bg-purple-300/30 rounded-full"></div>
				<div className="absolute right-1/3 bottom-1/3 w-6 h-6 text-purple-300/70">✦</div>
			</div>

			<div className='max-w-7xl mx-auto px-6 relative z-10'>
				{/* Word bubbles */}
				<div className="absolute left-1/4 -top-4">
					<div className="bg-white text-[#1e1b4b] px-4 py-2 rounded-full font-medium">
						{polishWords[0].word}
						<span className="block text-sm text-gray-500">{polishWords[0].translation}</span>
					</div>
				</div>
				<div className="absolute right-1/4 top-20">
					<div className="bg-white text-[#1e1b4b] px-4 py-2 rounded-full font-medium">
						{polishWords[1].word}
						<span className="block text-sm text-gray-500">{polishWords[1].translation}</span>
					</div>
				</div>

				{/* Main content */}
				<div className="text-center">
					{/* Title with typing effect - fixed height container */}
					<div className="h-[200px] flex items-center justify-center">
						<h1 className='text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight'>
							<span className="inline-block text-center">{displayText}|</span>
						</h1>
					</div>

					{/* Subtitle */}
					<p className='text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-gray-300'>
						Учите польский язык и готовьтесь к Карте Поляка с помощью искусственного интеллекта
					</p>

					{/* Button */}
					<div className='flex justify-center'>
						<Button asChild size="lg" className='bg-white text-black rounded-full px-8 py-6 text-lg font-medium'>
							<Link href='https://t.me/wordich_bot'>
								Начать бесплатно
							</Link>
						</Button>
					</div>
				</div>
			</div>

			{/* Wave bottom */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
					<path fill="white" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
				</svg>
			</div>
		</div>
	)
}

export default Hero
