import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-[768px] mx-auto  py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Замените на путь к вашему логотипу
            alt="PolishDom Bot Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2 text-xl font-bold text-gray-800">PolishDom</span>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">
            О боте
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">
            Преимущества
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-blue-500 transition-colors">
            Отзывы
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-blue-500 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Кнопка для перехода в бота */}
        <a
          href="https://t.me/your_bot_username" // Замените на ссылку на вашего бота
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors"
        >
          Попробовать бота
        </a>
      </div>
    </header>
  );
};

export default Header;