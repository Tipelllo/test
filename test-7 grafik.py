import matplotlib.pyplot as plt

# Данные для круговой диаграммы
data = [15, 30, 45, 10]
labels = ['Group A', 'Group B', 'Group C', 'Group D']

# Создание круговой диаграммы
plt.pie(data, labels=labels, autopct='%1.1f%%', startangle=140)

# Настройка графика
plt.title('Sample Pie Chart')

# Отображение графика
plt.show()


