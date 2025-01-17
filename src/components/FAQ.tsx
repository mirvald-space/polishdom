'use client'

import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const faqs = [
		{
			question: 'Как начать обучение?',
			answer:
				'Просто нажмите кнопку "Начать обучение" и перейдите в нашего бота в Telegram.',
		},
		{
			question: 'Как работает виртуальный консул?',
			answer:
				'Виртуальный консул задает вопросы, которые могут быть на собеседовании для Карты Поляка, и дает обратную связь.',
		},
		{
			question: 'Как определить свой уровень языка?',
			answer:
				'Пройдите тест из 36 вопросов в боте, чтобы определить ваш уровень польского языка.',
		},
	]

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<div className='py-12 max-w-[768px] mx-auto'>
			<h2 className='text-4xl font-bold mb-8 text-center'>
				Ответы на популярные вопросы
			</h2>
			<div className='space-y-4'>
				{faqs.map((faq, index) => (
					<div
						key={index}
						className='bg-white p-6 rounded-lg shadow-md flex justify-between items-center'
					>
						{/* Вопрос и ответ */}
						<div className='flex-1'>
							<h3
								className='text-xl font-bold text-gray-900 cursor-pointer'
								onClick={() => toggleFAQ(index)}
							>
								{faq.question}
							</h3>
							{activeIndex === index && (
								<p className='text-gray-600 mt-2'>{faq.answer}</p>
							)}
						</div>

						{/* Иконка */}
						<div className='flex items-center justify-center ml-4'>
							<button
								onClick={() => toggleFAQ(index)}
								className='text-gray-400 hover:text-gray-600 focus:outline-none'
							>
								<FontAwesomeIcon
									icon={activeIndex === index ? faTimes : faPlus}
									size='lg'
									className='transition-transform duration-200'
								/>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FAQ
