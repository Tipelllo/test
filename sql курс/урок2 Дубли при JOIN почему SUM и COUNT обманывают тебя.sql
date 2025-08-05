-- Ситуация
--Таблицы:

--Product(model, maker, type)

--Laptop(model, speed, price)

--Ты хочешь посчитать общую цену всех ноутбуков для каждого производителя.



SELECT p.maker, SUM(l.price) AS total_price
FROM Product p
JOIN Laptop l ON p.model = l.model
GROUP BY p.maker
--Выглядит логично? Но представим, что где-то в базе:

--В Product по ошибке две записи с одинаковым model,

--Или в Laptop у одного model две строчки (например, два склада или ошибка импорта).

--?? Тогда JOIN создаёт дубликаты, и SUM() посчитает в два раза больше.

--?? Практика
--Представь:

--Product		Laptop
--model=A		model=A
--maker=X		price=1000
--model=A		— ещё раз —
--price=1000

--? JOIN вернёт 4 строки (2?2), и SUM = 4000, а не 2000.

--?? Правило:
--JOIN может УМНОЖИТЬ строки, если связи не один-к-одному.

--??? Что с этим делать?
--?? Убедиться, что ключи уникальны (DISTINCT, PK)

--?? Использовать подзапрос до JOIN, если надо агрегировать заранее:

-- Сначала агрегируем, потом соединяем
SELECT p.maker, s.total_price
FROM Product p
JOIN (
  SELECT model, SUM(price) AS total_price
  FROM Laptop
  GROUP BY model
) s ON p.model = s.model


SELECT p.maker, COUNT(*) AS cnt
FROM Product p
JOIN Laptop l ON p.model = l.model
GROUP BY p.maker
