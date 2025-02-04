# SHOP.CO

Краткое описание проекта: магазин мужской и женской одежды.

## 🌐 Demo

Демо-версия проекта доступна по ссылке: https://my-project-shopco.vercel.app/

## 🚀 Технологии

- **React** + **Vite** — для быстрого и удобного фронтенда
- **TypeScript** — типизация для безопасности кода
- **Redux Toolkit** + **RTK Query** — управление состоянием и запросами
- **Feature-Sliced Design (FSD)** — организация кода по слоям
- **React Router** — маршрутизация

## 📂 Архитектура (Feature-Sliced Design)

Проект организован по методологии **Feature-Sliced Design**:

```
/src
├── app/               # Инициализация приложения, провайдеры, глобальные стили
├── pages/             # Страницы приложения (Auth, Cart, Category, Checkout, Home, Product, Profile)
├── widgets/           # Крупные блоки, составленные из фич (Topbar, Header, Breadcrumbs, Intro, Showcase, Reviews, Footer)
├── features/          # Независимые пользовательские сценарии (Auth, Filters, Order, Search, Sort)
├── entities/          # Основные сущности (Cart, Product, Order, Review)
├── shared/            # Переиспользуемые модули (UI, lib, API, hooks, contants, layouts)
└── index.tsx          # Точка входа в приложение
```

## 📦 Установка и запуск

```sh
# Установить зависимости
pnpm install

# Запустить локально
pnpm dev

# Собрать проект
pnpm build
```

## 🔥 Основные фичи

- Поддержка **авторизованных и неавторизованных** пользователей
- Корзина с **локальным и серверным хранением**
- **Автообновление токена** при истечении срока доступа
- Оптимистичные обновления и синхронизация данных

## 📜 Скрипты

- `pnpm dev` — запуск проекта в режиме разработки
- `pnpm build` — сборка проекта
- `pnpm lint` — проверка кода линтером
- `pnpm lint:fix` — исправление ошибок линтинга
- `pnpm lint:scss` — проверка SCSS файлов
- `pnpm lint:scss:fix` — исправление ошибок в SCSS файлах
- `pnpm test:unit` — запуск unit-тестов
- `pnpm preview` — предпросмотр сборки
- `pnpm prettify` — форматирование кода с помощью Prettier
- `pnpm prepare` — настройка Husky
- `pnpm storybook` — запуск Storybook
- `pnpm build-storybook` — сборка Storybook
