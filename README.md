# Заняття 11 - Бібліотека Redux

## Алгоритм дій для реалізаціії якогось функціоналу

Один раз на додаток створити `store` та редюсер

1. Оголосити компонент(и)
2. Підписати компонент(и) на дані в `store` через `useSelector`
3. Оголосити екшен за допомогою `createAction`
4. Відправити екшен із компонента через `useDispatch`
5. Обробити екшен в редюсері

## Управління станом

- Глобальний стан та потік даних
- Встановлення бібліотек
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)

```shell
npm install @reduxjs/toolkit react-redux
```

## Store: Єдине джерело правди

- Функція `configureStore`
- Розбір Redux Devtools
- Підписка на стор хуком `useSelector`

## Actions: Описують, що сталося

- Фабрики екшенів
- Функція `createAction`

## Dispatch: Надсилає дії (actions)

- Відправлення екшенів з `useDispatch`

## Reducers: Визначають, як змінюється стан

- Сігнатура редюсера
- Кореневий редюсер
- Чому за замовчуванням `return state`
- Обробка екшенів

# Заняття 12 - Бібліотека Redux Toolkit

## Слайси стану

- Розділення коду кореневого редюсера на редюсери слайсів
- Створення файлів слайсів `balanceSlice.js` та `localeSlice.js`

## Функція `createSlice`

- Створення слайса
- Властивості `name` та `initialState`
- Властивість `reducers` та case-редюсери
- Експорт фабрик екшенів
- Експорт кореневого редюсера
- Використання `Immer` для оновлення стану у case-редюсерах слайсів

## Бібліотека [Redux Persist](https://www.npmjs.com/package/redux-persist)

- Створення конфігурації
- Створення `persistor`
- Додавання `PersistGate`

## Практика

Техническое задание (ТЗ) для проекта "To-Do List"
Описание проекта
To-Do List — это приложение для управления задачами, которое позволяет пользователям добавлять, удалять, фильтровать и отслеживать статус задач (активные или завершенные). Приложение построено с использованием React, Redux Toolkit и локального хранилища (localStorage) для сохранения состояния между сессиями.

Функциональные требования

1. Добавление задач
   Пользователь может ввести текст задачи в поле ввода и нажать кнопку "Add task".
   Новая задача добавляется в список задач с уникальным идентификатором (генерируется с помощью nanoid).
   По умолчанию новая задача имеет статус "активная" (completed: false).
2. Удаление задач
   Пользователь может удалить задачу, нажав на кнопку с иконкой удаления (крестик) рядом с задачей.
   После удаления задача исчезает из списка.
3. Изменение статуса задачи
   Пользователь может отметить задачу как выполненную, установив флажок (чекбокс) рядом с задачей.
   Если задача уже выполнена, пользователь может снять флажок, чтобы вернуть задачу в статус "активная".
4. Фильтрация задач
   Пользователь может фильтровать задачи по статусу:
   All: отображаются все задачи.
   Active: отображаются только активные задачи.
   Completed: отображаются только завершенные задачи.
   Фильтр применяется мгновенно, и выбранный фильтр визуально выделяется.
5. Счетчик задач
   В верхней части приложения отображается количество активных и завершенных задач.
6. Сохранение состояния
   Состояние задач и выбранного фильтра сохраняется в localStorage.
   При перезагрузке страницы состояние восстанавливается из localStorage.
   Технические требования
7. Frontend
   React: используется для построения пользовательского интерфейса.
   Redux Toolkit: используется для управления состоянием приложения.
   CSS-модули: используются для стилизации компонентов.
8. Функциональность Redux
   tasksSlice:
   Хранит массив задач.
   Содержит редукторы для добавления, удаления и изменения статуса задач.
   filterSlice:
   Хранит текущий статус фильтра (all, active, completed).
   Содержит редуктор для изменения фильтра.
   store:
   Объединяет tasksSlice и filterSlice.
   Инициализируется состоянием из localStorage.
   Сохраняет состояние в localStorage при каждом изменении.
9. Компоненты
   App:
   Основной компонент, который рендерит AppBar, TaskForm и TaskList.
   AppBar:
   Содержит счетчик задач (TaskCounter) и фильтр задач (StatusFilter).
   TaskForm:
   Форма для добавления новых задач.
   TaskList:
   Отображает список задач в зависимости от выбранного фильтра.
   Task:
   Отдельный компонент для отображения одной задачи.
   Содержит чекбокс для изменения статуса и кнопку для удаления задачи.
   TaskCounter:
   Отображает количество активных и завершенных задач.
   StatusFilter:
   Кнопки для выбора фильтра задач (All, Active, Completed).
   Button:
   Универсальный компонент кнопки с поддержкой стилей и состояния selected.
10. Стилизация
    Используются CSS-модули для изоляции стилей.
    Стили кнопок, списка задач, формы и других элементов определены в соответствующих CSS-файлах.
11. Локальное хранилище
    Состояние Redux сохраняется в localStorage при каждом изменении.
    При загрузке приложения состояние восстанавливается из localStorage.
    Что реализовано в проекте
12. Redux Store
    Создан store с использованием configureStore из Redux Toolkit.
    Подключены два слайса: tasksSlice и filterSlice.
    Реализованы функции loadState и saveState для работы с localStorage.
13. tasksSlice
    Хранит массив задач.
    Реализованы редукторы:
    addTask: добавляет новую задачу.
    deleteTask: удаляет задачу по id.
    toggleCompleted: изменяет статус задачи.
14. filterSlice
    Хранит текущий фильтр задач.
    Реализован редуктор setStatusFilter для изменения фильтра.
15. Компоненты
    TaskForm: форма для добавления задач с валидацией (пустые задачи не добавляются).
    TaskList: отображает задачи в зависимости от фильтра.
    Task: отдельный компонент для задачи с функциональностью удаления и изменения статуса.
    TaskCounter: считает количество активных и завершенных задач.
    StatusFilter: кнопки для фильтрации задач.
    Button: переиспользуемый компонент кнопки с поддержкой состояния selected.
16. Стилизация
    Все компоненты стилизованы с использованием CSS-модулей.
    Реализованы эффекты наведения и нажатия для кнопок.
17. Работа с localStorage
    Состояние Redux сохраняется в localStorage при каждом изменении.
    При загрузке приложения состояние восстанавливается из localStorage.
    Что можно улучшить
    Добавить уведомления:

Использовать библиотеки, такие как react-toastify, для отображения уведомлений (например, при добавлении или удалении задачи).
Реализовать редактирование задач:

Добавить возможность редактировать текст задачи.
Добавить тесты:

Написать модульные тесты для редукторов и компонентов.
Оптимизация производительности:

Использовать React.memo для оптимизации рендеринга компонентов.
Поддержка темной темы:

Добавить переключатель между светлой и темной темой.
