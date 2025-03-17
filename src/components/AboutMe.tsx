import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const AboutMe = () => {
	return (
		<section id="about" className='py-16 px-4'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl sm:text-4xl font-bold text-center mb-8'>О нашем боте</h2>
				<Card>
					<CardContent className='p-6 sm:p-8'>
						<div className='flex flex-col md:flex-row items-center gap-8'>
							<div className='flex-shrink-0'>
								<Avatar className='w-48 h-48'>
									<AvatarImage src='/bot-logo.png' alt='Polish Language Bot Logo' />
									<AvatarFallback className='bg-indigo-100 text-indigo-600 text-4xl'>PL</AvatarFallback>
								</Avatar>
							</div>
							<div className='text-center md:text-left'>
								<h3 className='text-xl font-bold mb-4 text-indigo-600'>Почему мы создали этот бот?</h3>
								<p className='text-lg mb-4 text-foreground/90'>
									Наш Telegram бот для изучения польского языка был создан командой лингвистов и разработчиков, 
									чтобы сделать изучение польского языка доступным для всех.
								</p>
								<p className='text-lg text-foreground/90'>
									Мы объединили современные технологии искусственного интеллекта с проверенными методиками 
									обучения языкам, чтобы создать эффективный и бесплатный инструмент для всех, 
									кто хочет выучить польский язык.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default AboutMe
