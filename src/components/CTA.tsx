import Link from 'next/link'

const CTA = () => {
	return (
		<div className='py-16 max-w-[768px] border rounded-xl mx-auto bg-white text-center'>
			<h2 className='text-3xl font-bold'>Остались вопросы?</h2>
			<p>
				Я всегда готова на них ответить в любое время. Просто напишите мне в
				Telegram!
			</p>
			<Link
				href='https://t.me/your_bot_username' // Замените на ссылку на вашего бота
				className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'
			>
				Написать в Telegram
			</Link>
		</div>
	)
}

export default CTA
