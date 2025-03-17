import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CTA = () => {
	return (
		<section className="py-24 px-4 bg-[#BC4B3E] text-white relative overflow-hidden">

			
			{/* Speech bubble */}
			<div className="max-w-4xl mx-auto text-center">

				<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
				Новые слова каждый день
				</h2>
				
				<p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
					Запоминайте <span className="text-white font-medium">новые польские слова</span> каждый день,<br />
					готовьтесь к Карте Поляка и повысьте свой уровень уже за месяц!
				</p>
				
				<div className="mt-12">
					<Button asChild size="lg" className="bg-white text-black rounded-full px-8 py-6 text-lg font-medium">
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
