# **Создание заказа**

Тестовый пользователь:

email - test@mail.com
пароль - 1

## **Тест-кейс 1**

**Предусловия:**

1. Открыта главная страница http://shop.bugred.ru/
2. Пользователь зарегистрирован
3. Пользователь не авторизован

| **Название**                 | **Описание шагов**                                               | **Ожидаемый результат**                                                |
|------------------------------|------------------------------------------------------------------|------------------------------------------------------------------------|
| **Авторизация пользователя** | **1 В шапке сайта нажать на кнопку “Вход”**                        | **Открыта форма ввода email и пароля. По умолчанию поля не заполнены** |
|                              | **2 Заполнить поля email и пароль данными пользователя TestUser1** | **Поля заполнены**                                                     |
|                              | **3 Нажать кнопку “Войти”**                                        | **Осуществлен вход в магазин под пользователем TestUser1**             |

## **Тест-кейс 2**

**Предусловия:**

1. Открыта главная страница <http://shop.bugred.ru/>
2. Пользователь авторизован
3. В корзине нет товаров (счетчик равен 0)

| **Название**                    | **Описание шагов**                                          | **Ожидаемый результат**                                                                                            |
|---------------------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **Оформление заказа через корзину** | **1 Нажать на товар "Шортики 3"**                             |                                                                                                                    |
|                                 | **2 В поле “Количество” ввести значение 1**                   |                                                                                                                    |
|                                 | **3 Нажать кнопку “Добавить в корзину”**                      | **Товар добавлен в корзину, счетчик количества товара в корзине увеличен на 1.**                                   |
|                                 | **4 Нажать на кнопку “Корзина”**                              | **Открыта корзина с добавленным товаром.**                                                                         |
|                                 | **5 В полe “Телефон” ввести - 79991231230**                   |                                                                                                                    |
|                                 | **6 В полe “Адрес” ввести - "г. Уфа, ул. Ленина 13, кв 666"** |                                                                                                                    |
|                                 | **7 Нажать кнопку “Оформить заказ”**                          | **Заказ оформлен. Пользователь видит сообщение с текстом: “Ваш заказ №\[номер заказа\] собран и отправлен. Ура!”** |

## **Тест-кейс 3**

**Предусловия:**

1. Открыта главная страница <http://shop.bugred.ru/>
2. Пользователь зарегистрирован
3. Пользователь авторизован
4. Пользователь оформил заказ

| **Название**                            | **Описание шагов**                                                    | **Ожидаемый результат**                                                                                                                                                                                             |
|-----------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Просмотр заказа в “Личном кабинете”** | **1 В шапке сайта нажать на кнопку с логином пользователя “TestUser1”** | **Пользователь видит выпадающий список: <br/>- Настройки <br/>- Личный кабинет <br/>- Выйти**                                                                                                                       |
|                                         | **2 Нажать “Личный кабинет”**                                           | **Открыта форма просмотра истории заказов: <br/>Номер заказа <br/>Сумма заказа <br/> <br/>кнопка: Посмотреть детали**                                                                                               |
|                                         | **3 Нажать “Посмотреть детали”**                                        | **Отображается информация по заказу:<br/>Телефон: 89991231230 <br/>Адрес: г. Уфа, ул. Ленина 13, <br/>кв 666 <br/>Товар: Пальто <br/>Количество: 1 <br/>Цена за единицу: 999 <br/>Общая цена: 999 <br/>Итого: 999** |

## **Тест-кейс 4**

**Предусловия:**

1. Открыта главная страница <http://shop.bugred.ru/>
2. Пользователь зарегистрирован
3. Пользователь авторизован

| **Название**                       | **Описание шагов**                                                    | **Ожидаемый результат**                                                                       |
|------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Выход пользователя из магазина** | **1 В шапке сайта нажать на кнопку с логином пользователя “TestUser1”** | **Пользователь видит выпадающий список: <br/>- Настройки <br/>- Личный кабинет <br/>- Выйти** |
|                                    | **2 Нажать “Выйти”**                                                    | **Осуществлен выход из магазина. Отображается форма ввода логина и пароля**                   |
