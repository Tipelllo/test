-- ��������
--�������:

--Product(model, maker, type)

--Laptop(model, speed, price)

--�� ������ ��������� ����� ���� ���� ��������� ��� ������� �������������.



SELECT p.maker, SUM(l.price) AS total_price
FROM Product p
JOIN Laptop l ON p.model = l.model
GROUP BY p.maker
--�������� �������? �� ����������, ��� ���-�� � ����:

--� Product �� ������ ��� ������ � ���������� model,

--��� � Laptop � ������ model ��� ������� (��������, ��� ������ ��� ������ �������).

--?? ����� JOIN ������ ���������, � SUM() ��������� � ��� ���� ������.

--?? ��������
--���������:

--Product		Laptop
--model=A		model=A
--maker=X		price=1000
--model=A		� ��� ��� �
--price=1000

--? JOIN ����� 4 ������ (2?2), � SUM = 4000, � �� 2000.

--?? �������:
--JOIN ����� �������� ������, ���� ����� �� ����-�-������.

--??? ��� � ���� ������?
--?? ���������, ��� ����� ��������� (DISTINCT, PK)

--?? ������������ ��������� �� JOIN, ���� ���� ������������ �������:

-- ������� ����������, ����� ���������
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
