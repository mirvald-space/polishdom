'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const FAQ = () => {
	const faqs = [
		{
			question: 'Как работает тренажер для подготовки к Карте Поляка?',
			answer:
				'Тренажер использует искусственный интеллект для имитации реального собеседования с консулом. AI-консул задает вопросы о польской культуре, истории, традициях и ваших польских корнях — точно как на настоящем интервью. Вы отвечаете на польском языке, а система анализирует ваши ответы и дает рекомендации по улучшению.',
		},
		{
			question: 'Насколько точно AI определяет уровень польского языка?',
			answer:
				'Наша система оценки уровня языка основана на европейской шкале CEFR (A1-C2) и использует передовые алгоритмы искусственного интеллекта. Тест включает задания на понимание текста, аудирование, знание грамматики и лексики. Точность определения уровня составляет более 90% по сравнению с результатами профессиональных преподавателей.',
		},
		{
			question: 'Как настроить уведомления с новыми польскими словами?',
			answer:
				'В настройках бота вы можете выбрать интересующие вас темы (бизнес, путешествия, культура и др.), а также указать удобное время для получения уведомлений (с 9:00 до 21:00). AI будет подбирать релевантные слова по выбранным темам и отправлять их в указанное время, адаптируя сложность под ваш уровень языка.',
		},
		{
			question: 'Можно ли выучить польский язык с нуля с помощью бота?',
			answer:
				'Да, бот подходит для изучения польского с любого уровня, включая начальный. Мы предлагаем специальные наборы слов и упражнения для новичков, которые помогут вам постепенно освоить базовую лексику и грамматику. AI-помощник адаптирует материалы под ваш прогресс.',
		},
		{
			question: 'Как устроена система повторений польских слов?',
			answer:
				'Система основана на теории кривой забывания Германа Эббингауза. AI анализирует ваши ответы и определяет оптимальные интервалы для повторения каждого слова. Если вы легко запоминаете слово, интервал увеличивается. Если возникают трудности, слово будет повторяться чаще. Это обеспечивает эффективное запоминание до 95% изученных слов.',
		},
		{
			question: 'Все функции бота действительно бесплатны?',
			answer:
				'Да, все основные функции бота, включая ежедневные слова, тесты уровня языка, тренажер для Карты Поляка и AI-помощник, доступны бесплатно. Мы стремимся сделать изучение польского языка доступным для всех желающих.',
		},
	]

	return (
		<section className='py-20 px-4 bg-white'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-5xl font-bold text-center mb-4'>
					Вопросы и ответы
				</h2>
				<p className='text-center text-lg text-gray-600 mb-4'>
					Есть еще вопросы? Напишите нам в поддержку
				</p>
				<p className='text-center text-lg text-indigo-600 font-medium mb-16'>
					<Link href="https://t.me/polish_support">@polish_support</Link> в Телеграм
				</p>
				
				<div className="bg-white rounded-3xl shadow-sm overflow-hidden">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem 
								key={index} 
								value={`item-${index}`}
								className="border-b last:border-b-0"
							>
								<AccordionTrigger className="text-left text-lg font-medium px-8 py-6 hover:no-underline hover:bg-gray-50 group">
									<span className="group-hover:text-indigo-600 transition-colors">{faq.question}</span>
									{index === 0 ? (
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
											<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									) : (
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
											<path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									)}
								</AccordionTrigger>
								<AccordionContent className="text-gray-600 px-8 py-6 pt-0">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	)
}

export default FAQ
