var leftBorderWidth = 5;
let second = 2;
const pi = 3.14;
console.log(leftBorderWidth)



console.log(4 / 2)

let num = 50;

if (num < 49) {
   console.log("Неверно")
} else if (num > 100) {
   console.log("Много")
} else {
   console.log("Верно")
};


switch (num) {
   case num < 49:
      console.log("Неверно");
      break;
   case num > 49:
      console.log("Много");
      break;
   case num > 80:
      console.log("Всё ещё много");
      break;
   case 50:
      console.log("Верно");
      break;
}


<serial>0104630390611058215')uTOS1DSkvS91EE1192EPTIqny6tUuYQ0IMALyqW/MKvUxZeBQkq8Uyp5NADVQ=</serial> 
<serial>0104630390611058215J6cfuLgNh3Qb91EE1192KcLgPogAXeRK2J0NwXtLVQ4BY5c+zt2YTGnIS073s/s=</serial> 
<serial>0104630390611058215ymACATVR=db&91EE11929AkBkicBMewbRgKJuoSxeg2qOIEFiulO6T3R1CaY4Ok=</serial> 
<serial>01046303906110582150L;k?LElHyY_91EE1192GT1IpgwT0ARfxHxP2N1QtfmGIJsO9VC0QCT/JgWOflw=</serial> 
<serial>0104630390611058215q&*PRk-2>PE791EE1192YAJ27BYy8pCkKzcJF7bhhgYoX+tUkluATnsn6FKuGhg=</serial> 
<serial>0104630390611058215MZCsDJVHe;Hb91EE1192tqf14e7K4l2XQPKCDhn6/7JCiIaQ54S+DEGLOvDFonA=</serial> 

<param param="taskList.wave.orders.transport.id" value="id" />


// Исключения по группам товаров
!isInvsContainsGroup(s, invKeys, 'Резина big') &&
!isInvsContainsGroup(s, invKeys, 'Резина small') &&

// Исключения по зонам
!getTasksContainZonesCount(s, so, invKeys, ['Консоли']) == 1 &&
!getTasksContainZonesCount(s, so, invKeys, ['Ангар']) == 1 &&
!getTasksContainZonesCount(s, so, invKeys, ['Улица']) == 1 &&
!getTasksContainZonesCount(s, so, invKeys, ['Стекло']) == 1 &&
!getTasksContainZonesCount(s, so, invKeys, ['НЕГАБАРИТ']) == 1 &&
!getTasksContainZonesCount(s, so, invKeys, ['NS склад']) == 1 &&
!getTasksContainZonesCount(s, so, invKeys, ['PAV склад']) == 1 &&
!getTasksContainZonesCount(s, so, invKeys, ['DS склад']) == 1 &&

// Исключения по reference4
!(so.reference4.indexOf('WILDBERRIES') != -1) &&
!(so.reference4.indexOf('Интернет Решения') != -1) &&

// Исключения по reference7
!(so.reference7 == '06. Клиент ко времени на сегодня (без упаковки)') &&
!(so.reference7 == '09. Клиент на территории (без упаковки)') &&
!(so.reference7 == '08. Клиент ко времени на сегодня (с упаковкой)') &&

// Проверка по накопителю: разрешаем всё, кроме накопителя БЕЗ доставки ТК
(
    // Не с накопителя
    getTasksContainZonesCount(s, so, invKeys, ['Накопитель для БП']) != 1
)
||
(
    // С накопителя, но с доставкой ТК
    getTasksContainZonesCount(s, so, invKeys, ['Накопитель для БП']) == 1 &&
    so.getComments('SO_CONTROL_PACK').size() > 0 &&
    so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')
)
