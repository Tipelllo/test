--���� ������ ����� ����� ���� ��� INNER JOIN

SELECT p.model, l.speed
FROM Product p
LEFT JOIN Laptop l ON p.model = l.model
WHERE l.speed > 2000




--����� inner ����� ���� ������ ��� ����������, left ����� ���� ��� ������ � �� ���������� ����, ����������� left join ����� 
--� ON ����� LEFT ������ inner ������� ���� ��� NULL > 100 ��� ��� �� TRUE, ��� UNKNOWN, � ������ ������ �������������.
--� ��� �� ���������� join ����������� ������ WHERE �� ����� ��������

--�����: ���� ������ ��������� ������ ��� ������������ � �������� � ON, � �� � WHERE.
SELECT p.model, l.speed
FROM Product p
LEFT JOIN Laptop l ON p.model = l.model AND l.speed > 200