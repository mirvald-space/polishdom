import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
	return (
		<header className="py-4 px-6 bg-[#BC4B3E] text-white">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2">
					<div className="w-8 h-8 relative">
						<div className="absolute inset-0 bg-purple-400 rounded-full opacity-30 blur-sm"></div>
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-white">P</span>
						</div>
					</div>
					<span className="text-xl font-bold">PolishDom</span>
				</Link>
				
				{/* Support Link */}
				<Link href="/support" className="text-white hover:text-gray-300 transition-colors">
					Поддержка
				</Link>
			</div>
		</header>
	)
}

export default Header
