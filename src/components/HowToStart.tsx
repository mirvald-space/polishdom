'use client'
import { useState, useEffect } from 'react'

const HowToStart = () => {
	// Состояния для анимаций
	const [typingText, setTypingText] = useState("");
	const [showFullBotName, setShowFullBotName] = useState(false);
	const [playingAudio, setPlayingAudio] = useState(true);
	
	// Состояния для анимации чата в первом блоке
	const userFullMessage = "Привет! Я хочу подготовиться к экзамену на Карту поляка. Мой уровень польского базовый.";
	const [typingUserMessage, setTypingUserMessage] = useState("");
	const [userMessageMoved, setUserMessageMoved] = useState(false);
	const [showBotResponse, setShowBotResponse] = useState(false);
	
	const fullText = "тренажер на карту поляка";
	
	// Анимация печатающегося текста
	useEffect(() => {
		if (typingText.length < fullText.length) {
			const typingTimer = setTimeout(() => {
				setTypingText(fullText.substring(0, typingText.length + 1));
			}, 100);
			
			return () => clearTimeout(typingTimer);
		} else {
			// Когда текст напечатан, показываем полное название бота
			const nameTimer = setTimeout(() => {
				setShowFullBotName(true);
			}, 500);
			
			return () => clearTimeout(nameTimer);
		}
	}, [typingText]);
	
	// Анимация чата в первом блоке
	useEffect(() => {
		if (typingUserMessage.length < userFullMessage.length) {
			const typingTimer = setTimeout(() => {
				setTypingUserMessage(userFullMessage.substring(0, typingUserMessage.length + 1));
			}, 50);
			
			return () => clearTimeout(typingTimer);
		} else {
			// Когда текст напечатан, перемещаем сообщение вверх
			const moveTimer = setTimeout(() => {
				setUserMessageMoved(true);
			}, 1000);
			
			// После перемещения показываем ответ бота
			const responseTimer = setTimeout(() => {
				setShowBotResponse(true);
			}, 1500);
			
			return () => {
				clearTimeout(moveTimer);
				clearTimeout(responseTimer);
			}
		}
	}, [typingUserMessage]);
	
	return (
		<section className="py-16 px-4 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-6xl font-bold text-center mb-4 animate-fade-in-down">
					Что доступно в боте?
				</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
					{/* Первый блок: Тренажер по собеседованию */}
					<div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col">
						<div className="bg-gray-50 rounded-3xl p-6 mb-6 min-h-80 overflow-auto">
							{/* Симуляция собеседования */}
							<div className="flex flex-col space-y-4">
								<div className="flex">
									<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
										<span className="text-white text-xs font-bold">AI</span>
									</div>
									<div className="bg-white rounded-2xl p-3 shadow-sm max-w-[80%]">
										<p className="text-gray-800">
											Dzień dobry! Jak Pan/Pani się nazywa?
										</p>
									</div>
								</div>
								
								<div className="flex justify-end">
									<div className="bg-blue-100 rounded-2xl py-3 px-4 max-w-[80%]">
										<p className="text-gray-800">
											Dzień dobry! Nazywam się Anna Kowalska.
										</p>
									</div>
								</div>
								
								<div className="flex">
									<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
										<span className="text-white text-xs font-bold">AI</span>
									</div>
									<div className="bg-white rounded-2xl p-3 shadow-sm max-w-[80%]">
										<p className="text-gray-800">
											Czy może Pan/Pani powiedzieć coś o swojej rodzinie i polskich korzeniach?
										</p>
									</div>
								</div>
								
								<div className="flex justify-end">
									<div className="bg-blue-100 rounded-2xl py-3 px-4 max-w-[80%]">
										<p className="text-gray-800">
											Mój dziadek pochodził z Polski, z Krakowa...
										</p>
									</div>
								</div>
								
								<div className="mt-4 px-2">
									<p className="text-sm text-gray-500 font-medium">Подсказка:</p>
									<p className="text-sm text-gray-700">Расскажите о своих польских корнях, откуда родом ваши предки</p>
								</div>
							</div>
						</div>
						
						<h3 className="text-3xl font-bold text-center mb-3">
							Тренажер<br/>по собеседованию
						</h3>
						<p className="text-center text-gray-500 mb-4">
							Практикуйте разговорный польский<br/>с помощью симуляции реального<br/>собеседования на Карту поляка
						</p>
					</div>

					{/* Второй блок: Тестирование уровня */}
					<div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col">
						<div className="bg-gray-50 rounded-3xl p-6 mb-6 relative min-h-80 max-h-96 overflow-auto">
							<div className="flex flex-col space-y-4">
								{/* Сообщение пользователя - сначала печатающееся, потом перемещающееся вверх */}
								<div className={`flex justify-end transition-all duration-700 ${userMessageMoved ? 'transform -translate-y-24 opacity-70 scale-95' : 'transform translate-y-8'}`}>
									<div className="bg-blue-100 rounded-2xl py-3 px-4 max-w-[80%]">
										<p className="text-gray-800">
											{typingUserMessage}
											<span className={`animate-blink ${typingUserMessage.length >= userFullMessage.length ? 'opacity-0' : ''}`}>|</span>
										</p>
									</div>
								</div>
								
								{/* Ответ бота с планом - появляется после перемещения сообщения пользователя */}
								<div className={`flex transition-all duration-700 ${showBotResponse ? 'transform translate-y-0 opacity-100' : 'transform translate-y-24 opacity-0'}`}>
									<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
										<span className="text-white text-xs font-bold">AI</span>
									</div>
									<div className="bg-white rounded-2xl p-4 shadow-sm max-w-[80%]">
										<p className="text-lg font-bold mb-2">
											Ваш уровень: Beginner (A1)
										</p>
										<p className="text-gray-700 mb-3">
											План обучения на 8 недель:
										</p>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Неделя 1-2: Базовая грамматика и лексика</li>
											<li>• Неделя 3-4: Основы польской истории</li>
											<li>• Неделя 5-6: Культура и традиции</li>
											<li>• Неделя 7-8: Практика разговора и подготовка к интервью</li>
										</ul>
										<p className="text-sm text-gray-500 mt-3">
											Ежедневно: 10 новых слов + 2 практических упражнения
										</p>
									</div>
								</div>
							</div>
						</div>
						
						<h3 className="text-3xl font-bold text-center mb-3">
							Тестирование<br/>уровня владения языком
						</h3>
						<p className="text-center text-gray-500 mb-4">
							Бот определит ваш текущий<br/>уровень владения польским языком и составит<br/>персональный план обучения
						</p>
					</div>

					{/* Третий блок: Напоминания и изучение слов */}
					<div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col">
						<div className="bg-white p-6 mb-2 min-h-80 overflow-auto">
							{/* Аудио блок */}
							<div className="flex items-center mb-6">
								<button 
									className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mr-4"
									onClick={() => setPlayingAudio(!playingAudio)}
								>
									<svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 5v14l11-7z"/>
									</svg>
								</button>
								<div className="w-full">
									<div className="mb-1">
										<span className="text-gray-500 text-sm font-medium">00:04</span>
									</div>
									<div className="w-full h-8 flex items-end space-x-0.5">
										{Array(30).fill(0).map((_, i) => (
											<div 
												key={i} 
												className="audio-wave-bar"
												style={{
													height: `${Math.floor(Math.random() * 24) + 4}px`,
													backgroundColor: '#3B82F6',
													width: '2px',
													borderRadius: '1px',
													animationDelay: `${i * 0.1}s`,
													animationDuration: `${0.7 + Math.random() * 1.2}s`
												}}
											></div>
										))}
									</div>
								</div>
							</div>
							
							{/* Польское слово с примером */}
							<div>
								<h4 className="text-xl font-bold mb-3">Слово дня:</h4>
								<div className="mb-2">
									<p className="text-2xl font-bold mb-4">konstytucja – конституция</p>
									<div className="bg-blue-50 p-5 border-l-4 border-blue-400 rounded">
										<p className="text-gray-800 mb-2">Konstytucja 3 maja była pierwszą konstytucją w Europie</p>
										<p className="text-gray-600">Конституция 3 мая была первой конституцией в Европе</p>
									</div>
								</div>
							</div>
							
							{/* Настройки времени уведомлений */}
							<div className="bg-gray-50 rounded-lg p-3 mt-4">
								<p className="text-sm text-gray-700 font-medium">Время уведомлений: 10:00</p>
								<div className="w-full bg-gray-200 rounded-full h-2 mt-2">
									<div className="bg-blue-400 rounded-full h-2 w-[13%]"></div>
								</div>
								<p className="text-xs text-gray-500 mt-1">Выберите удобное время с 9:00 до 21:00</p>
							</div>
						</div>
						
						<h3 className="text-3xl font-bold text-center mb-3">
							Система<br/>уведомлений
						</h3>
						<p className="text-center text-gray-500 mb-4">
							Настройте удобное время получения<br/>ежедневных слов по выбранным темам<br/>в период с 9:00 до 21:00
						</p>
					</div>
				</div>
			</div>
			
			{/* Стили для анимаций */}
			<style jsx global>{`
				@keyframes blink {
					0%, 100% { opacity: 1; }
					50% { opacity: 0; }
				}
				.animate-blink {
					animation: blink 1s infinite;
				}
				
				@keyframes wave {
					0% { transform: scaleY(0.5); }
					25% { transform: scaleY(1); }
					50% { transform: scaleY(0.7); }
					75% { transform: scaleY(1.2); }
					100% { transform: scaleY(0.5); }
				}
				.audio-wave-bar {
					animation: wave infinite;
					transform-origin: bottom;
				}
				
				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(10px); }
					to { opacity: 1; transform: translateY(0); }
				}
				.animate-fade-in {
					animation: fadeIn 0.5s ease-out forwards;
				}
			`}</style>
		</section>
	)
}

export default HowToStart