# Сайт репетитора польского языка

Персональный сайт для преподавателя польского языка, который помогает привлекать новых учеников и организовывать учебный процесс.

## Функциональность

- Представление преподавателя и его квалификации
- Описание курсов и услуг
- Информация о методиках обучения
- Форма обратной связи для потенциальных учеников
- Блог с полезными материалами по изучению польского языка
- Адаптивный дизайн для всех устройств

## Технологии

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Локальная разработка

```sh
# Клонирование репозитория
git clone <URL_РЕПОЗИТОРИЯ>

# Переход в директорию проекта
cd polishdom

# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev
```

## Структура проекта

- `public/` - статические файлы
- `src/` - исходный код приложения
  - `components/` - компоненты React
  - `hooks/` - пользовательские хуки React
  - `lib/` - вспомогательные функции
  - `pages/` - страницы сайта

## Деплой

Проект можно развернуть на любой платформе, поддерживающей статический хостинг: Vercel, Netlify, GitHub Pages и т.д.

```sh
# Сборка проекта
npm run build
```

## Project info

**URL**: https://ui-canvas-build.com

## How can I edit this code?

There are several ways of editing your application.

**Use UI Canvas**

Simply visit the project URL and start prompting.

Changes made via UI Canvas will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## How can I deploy this project?

Simply open the project in UI Canvas and click on Share -> Publish.

## Can I connect a custom domain to my project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.ui-canvas.com/tips-tricks/custom-domain#step-by-step-guide)
