"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type TestimonialProps = {
	name: string
	initial: string
	text: string
}

const TestimonialCard = ({ name, initial, text }: TestimonialProps) => {
	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm">
			<div className="flex items-center mb-6">
				<Avatar className="h-12 w-12 mr-4">
					<AvatarFallback className="bg-indigo-100 text-indigo-600">{initial}</AvatarFallback>
				</Avatar>
				<h3 className="text-xl font-bold">{name}</h3>
			</div>
			<p className="text-gray-600">{text}</p>
		</div>
	)
}

const Testimonials = () => {
	const testimonials = [
		{
			name: "Anastasia",
			initial: "A",
			text: "Уже полтора месяца активно пользуюсь этим ботом для изучения английского и не пропустила ни одного дня! Удивительно подходит для моего утреннего распорядка - за 10 минут до выхода из дома всегда успеваю выучить что-то новое. Слова всегда актуальны и подходят моему уровню английского. Рекомендую всем, кто хочет учить английский удобно и эффективно.👍"
		},
		{
			name: "Dima",
			initial: "D",
			text: "Большую часть времени общаюсь в ТГ и ваш бот по изучению английского языка очень помогает! Видно, что работаете над продуктом. Спасибо! Надеюсь ваш проект будет развиваться и развивать нас 🤗"
		},
		{
			name: "Fibanachi",
			initial: "F",
			text: "Сначала не верил, что бот в телеграме может мне помочь, но после месяца регулярных упражнений я почувствовал заметный прогресс. Мой изначальный уровень был далек от B2, но учить английский в телеграм оказалось удобно и эффективно. Если кому-то предстоит серьезная подготовка к ЕГЭ по английскому, можно попробовать такой способ."
		},
		{
			name: "Никита",
			initial: "Н",
			text: "Вордич бот для изучения английского стал настоящей находкой для нашей частной школы английского языка. Благодаря нашему совету, почти все наши ученики теперь активно его используют, и метод интервального повторения действительно показывает отличные результаты!"
		}
	]

	return (
		<section className="py-20 px-4 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-5xl font-bold text-center mb-4">
					Отзывы
				</h2>
				<p className="text-xl text-gray-500 text-center mb-16">
					200+ людей уже учат новые слова в Telegram
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							name={testimonial.name}
							initial={testimonial.initial}
							text={testimonial.text}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
