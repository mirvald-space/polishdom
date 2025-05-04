## Проблема
В проекте отсутствует компонент Button из shadcn/ui, что вызывает ошибки при импорте в нескольких файлах.

## Цель
Добавить необходимый компонент Button и исправить все ошибки импорта.

## Шаги
- [x] Создать компонент Button в src/components/ui/button.tsx
- [ ] Проверить и исправить все компоненты, которые импортируют Button
- [ ] Убедиться, что проект запускается без ошибок импорта

## Комментарии
Обнаружены следующие файлы с ошибками импорта кнопки:
- src/components/layout/Footer.tsx
- src/components/sections/Hero.tsx
- src/components/sections/CTASection.tsx
- src/components/ui/ServiceCard.tsx 