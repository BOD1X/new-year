# Лабораторна №7 — Новорічна листівка (BEM + Sass)

Відкрийте `index.html` у браузері.

## Структура
```
lab7/
├── index.html
├── css/style.css        ← результат збірки (підключений у HTML)
├── js/main.js           ← лише відлік до Нового року
└── scss/
    ├── main.scss        ← точка входу (@import усіх партіалів)
    ├── abstracts/       ← _variables.scss (змінні), _mixins.scss
    ├── base/            ← _reset.scss
    └── blocks/          ← один файл = один BEM-блок
```

## BEM-блоки
page, container, snow, garland, header, nav, button, hero, tree, wishes, wish-card, countdown, footer.
Елементи: `hero__title`, `nav__link`, `wish-card__icon` ... Модифікатори: `button--primary`,
`wish-card--red`, `garland__bulb--blue`, `nav__link--active`.

## Змінні (scss/abstracts/_variables.scss)
Кольори, шрифти, відступи, радіуси, брейкпоінти, ширина контейнера, час переходів.

## Збірка Sass
```
npm install
npm run build      # одноразово
npm run watch      # з автоперезбіркою
```
Або без npm: `sass scss/main.scss css/style.css`.
