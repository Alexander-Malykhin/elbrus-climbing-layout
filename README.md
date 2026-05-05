# Elbrus Climbing Layout

## 🚀 Описание
Статическая верстка лендинга туристического продукта.
Подготовлена для дальнейшей интеграции в React / SPA проекты.

## 📦 Установка
```bash
npm install
```

## 🛠 Запуск (dev)
```bash
npm run dev
```

## 🏗 Сборка
```bash
npm run build
```

## 🧱 Архитектура
- SCSS через `@use`
- Разделение на settings / components / blocks
- Общая система layout (`settings/_layout.scss`)

## ⚛️ Подготовка под React
- добавлены универсальные селекторы: `.app`, `#root`, `[data-container]`, `[data-main]`
- layout вынесен в отдельный слой
- можно переносить блоки как отдельные компоненты

## 📁 Структура
```
scss/
  settings/
  components/
  blocks/
  main.scss
```

## 📌 Рекомендации
- вынести блоки в React-компоненты
- заменить статические пути `/images` на импорт через bundler
- добавить JS-интерактив
