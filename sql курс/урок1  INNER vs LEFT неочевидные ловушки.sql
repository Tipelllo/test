--Ётот запрос будет вести себ€ как INNER JOIN

SELECT p.model, l.speed
FROM Product p
LEFT JOIN Laptop l ON p.model = l.model
WHERE l.speed > 2000




--¬ывод inner когда хочу только все совпадени€, left когда хочу все записи и не совпадени€ тоже, фильтровать left join лучше 
--в ON иначе LEFT станет inner причине того что NULL > 100 это это не TRUE, это UNKNOWN, а значит строка отбрасываетс€.
--а так же получатес€ join срабатывает раньше WHERE по этому работает

--¬ывод: если хочешь сохранить строки без соответствий Ч фильтруй в ON, а не в WHERE.
SELECT p.model, l.speed
FROM Product p
LEFT JOIN Laptop l ON p.model = l.model AND l.speed > 200