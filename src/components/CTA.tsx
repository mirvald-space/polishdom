import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CTA = () => {
	return (
		<section className="py-24 px-4 bg-[#BC4B3E] text-white relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-20 w-4 h-4 bg-purple-300/30 rounded-full"></div>
				<div className="absolute bottom-40 right-1/4 w-6 h-6 bg-purple-300/30 rounded-full"></div>
				<div className="absolute top-1/3 right-1/4 w-8 h-8 text-purple-300/70">✦</div>
				<div className="absolute bottom-1/3 left-1/4 w-6 h-6 text-purple-300/70">✧</div>
			</div>
			
			{/* Speech bubble */}
			<div className="absolute top-20 right-1/4">
				<div className="bg-indigo-500 text-white px-6 py-3 rounded-full text-lg font-medium">
					To jest wspaniałe!
				</div>
			</div>
			
			<div className="max-w-4xl mx-auto text-center relative z-10">
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
				Новые слова каждый день
				</h2>
				
				<p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
					Запоминайте <span className="text-white font-medium">новые польские слова</span> каждый день,<br />
					готовьтесь к Карте Поляка и повысьте свой уровень уже за месяц!
				</p>
				
				<div className="mt-12">
					<Button asChild size="lg" className="bg-white hover:bg-indigo-600 text-white rounded-full px-8 py-6 text-lg font-medium">
						<Link href="https://t.me/polishbot">
							Хочу попробовать
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default CTA
