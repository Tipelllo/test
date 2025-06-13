Фильтр выражение	Название
so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)'	06. Клиент ко времени на сегодня (без упаковки)
"so.reference4.indexOf('Эмекс')!=-1 ||
so.reference10 == 'Т6858' ||
(so.reference4.indexOf('Интернет Решения')!=-1&&
so.getType()=='00702')"	NEW VIP 1
"so.reference4.indexOf('А.П.Р')!=-1||
so.reference4.indexOf('ЮРАЛ')!=-1"	NEW VIP 2
getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1	NS склад
"so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1&&
!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1"	Альфа Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит
so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1	Альфа-ООО
isInvsContainsGroup(s,invKeys,'Ангар')	Ангар
getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1	Ангар (По зоне)
"so.reference10=='Л2924'||
so.reference10=='А3762'"	Белоусов С.В и Гудков
getTasksContainZonesCount(s,so,invKeys,['ВСЕ Машково 2'])==1	ВСЕ Машково 2
getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1	Все Накопители
"!isInvscontainsGroup(s,invKeys,'Резина big')&&
!isInvscontainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))"	Для Альфа Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Дост.ТК,ВБ,Озон,С клиентом-Копия
so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')	Доставка ТК
"so.getType()=='00558' &&
so.reference10=='62183'"	Екатеринбург пр
"so.reference4.indexOf('Интернет Решения')!=-1&&
so.getType()!='00702'"	Интеренет Решения(ОЗОН)
"so.getType().startsWith('DELI')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType().startsWith('MSK')||
so.getType() == 'MKPLCBERU' ||
so.getType() == 'MSKSPBCDE' ||
so.getType() == 'MKPLCWILB' "	Интернет магазин
"    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.getType() == 'MSKSPBCDE' ||
    so.getType() == 'MKPLCWILB' "	Интернет магазин(Сумарный отбор)
"!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1&&
!so.reference4.indexOf('WILDBERRIES')!=-1&&
!so.reference4.indexOf('Интернет Решения')!=-1"	Исключаем Ангар,Улицу, Консоль и Брак и ВБ, Озон
!getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1	Исключаем зону БРАК
!getTasksContainZonesCount(s,null,invKeys,['БРАК'])==1	Исключаем зону БРАК Предварительный фильтр
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!so.getComments('CLIENTTER').size() > 0"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,ВБ,Озон
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!so.getComments('CLIENTTER').size() > 0	&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Дост.ТК,ВБ,Озон
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1) &&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1
"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,ВБ,Озон-(без исключения Дост.ТК) 
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1) &&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!so.getComments('CLIENTTER').size() > 0	&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,ВБ,Озон,С доставкой
"    !isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,ВБ,Озон,С клиентом и Доставкой
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!so.getComments('CLIENTTER').size() > 0	&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1
"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,Дост.ТК,ВБ,Озон
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1 &&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,Дост.ТК,ВБ,Озон,С клиентом
"!(so.reference4.indexOf('ТЕНДЕР')!=-1 &&
!(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 &&
so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1)) &&
!getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1&&
!so.reference4.indexOf('WILDBERRIES')!=-1&&
!(so.reference4.indexOf('Интернет Решения')!=-1)"	Исключаем Тендер и зону Брак и ВБ,Озон
!null.reference4.indexOf('ТЕНДЕР')!=-1	Исключаем Тендер и зону Брак Предварительный фильтр
"!(
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 ||
    so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1)) ||
    (so.getType()=='00076'&&
    (so.reference4.indexOf('Транснефть')!=-1||
    so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1||
    so.reference4.indexOf('транснефть')!=-1)) ||
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
   (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference4.indexOf('Интернет Решения')!=-1||
    so.reference4.indexOf('WILDBERRIES')!=-1||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == "	Исключения ВСЕ Машково 2
"'83790' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'К3852' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.reference4.indexOf('ГСП-2')!=-1||
    so.reference4.startsWith('СОЛУ')
    )"	
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.getType().startsWith('MSK') ||
    so.reference4.startsWith('Интернет Решения (Н И)') ||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference4.indexOf('WILDBERRIES')!=-1||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('Эмекс.Ру')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('ЮРАЛ')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('ГСП-2')!=-1 ||
"	Исключения для стол контроля 17
"    so.reference4.indexOf('СВАРОГ')!=-1||
    so.reference4.indexOf('Дальзапчасть')!=-1||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'К3852' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л0818' ||
    so.reference10 == 'В0296' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    (so.reference10 == '62183' && so.getType() == '00558') ||
    so.reference4.indexOf('WILDBERRIES')!=-1 ||
    so.reference4.indexOf('Интернет Решения')!=-1 ||
    so.reference10 == 'Й8369' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-"	
"Люберцы)')!=-1 ||
    so.getComments('CLIENTTER').size() > 0 ||
    (so.getComments('SO_CONTROL_PACK').size() > 0 &&
      so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')) ||
    so.getType() == '00558' ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041') ||
    so.reference10 == 'Б3547' ||
    so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
    so.reference10 == '23695'
  )"	
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.getType().startsWith('MSK') ||
    so.reference4.startsWith('Интернет Решения (Н И)') ||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference4.indexOf('WILDBERRIES')!=-1||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('Эмекс.Ру')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('ЮРАЛ')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('ГСП-2')!=-1 ||
"	Исключения для столов ДОСТАВКИ
"    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'К3852' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == '39061' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    (so.reference10 == '62183' && so.getType() == '00558') ||
    so.reference4.indexOf('WILDBERRIES')!=-1 ||
    so.reference4.indexOf('Интернет Решения')!=-1 ||
    so.reference10 == 'Й8369' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1 ||
    so.getComments('CLIENTTER').size() > 0 ||
    so.getType() == '00558' ||
    (so.reference10 == 'НЕТОР' && so."	
"getType() == '00041') ||
    so.reference10 == 'Б3547' ||
    so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
    so.reference10 == '23695'
  )"	
"so.getType()=='00560' &&
so.reference10=='48232'"	Кетчерская план
"so.getType().startsWith('DELI') ||
  so.getType().startsWith('PICK') ||
  so.getType().startsWith('LOCKER') ||
  so.getType().startsWith('STO') ||
  so.getType().startsWith('VENDO') ||
  so.getType().startsWith('MSK') ||
  so.getType() == 'MKPLCBERU' ||
  (!(
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 &&
    so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference4.indexOf('Emex.RU')!=-1 ||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('КЕНТАВР')!=-1 ||
    so.reference4.indexOf('Консул ООО (Вешняки) НОВЫЙ')!=-1 ||
    so.reference4.indexOf('ГСП-2')!=-1 ||
    so.reference4.indexOf('СВАРОГ')!=-1 ||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference10 == '61063' ||
    so.reference4 == 'ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX' ||
    so.reference4 == 'Федотов Р.Е. ИП (Борисов)' ||
    (so.reference4.startsWith"	Кластер Мелкие заказы
"('Ремдизель') &&
      so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
    so.reference4.startsWith('СОЛУ') ||
    so.reference4 == 'Рудник Валунистый ООО Тендер' ||
    so.reference4 == 'Базовые металлы АО Тендер' ||
    so.reference4 == 'Техника Поволжья ООО (Волга) (АГЕ_Вцо)' ||
    so.reference4 == 'Ново-Широкинский рудник АО Тендер' ||
    so.reference10 == 'У7883' ||
    so.xdockPOs.size() == 1 ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    (so.getComments('SO_CONTROL_PACK').size() > 0 &&
      so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')) ||
    (so.reference4 == 'Неторговые операции' && so.getType() == '00041')
  ) &&
    orderedQty < '100' &&
    lineCount < '30' &&
    volume < '0.096') ||
  so.reference4 == 'Евротранс (старый опт)' ||
  so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
  so.reference4 == 'Евротранс (МАЗ)'"	
"1!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 &&
    so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.contains('А.П.Р') ||
    so.reference4.contains('Эмекс') ||
    so.reference10 == 'Т6858' ||
    so.reference4.contains('КОЛОМНА-розница') ||
    so.reference4.contains('КЕНТАВР') ||
    so.reference4.contains('Консул ООО (Вешняки) НОВЫЙ') ||
    so.reference4.contains('ТУЛА (малая розница)') ||
    so.reference4.contains('Перово транзит') ||
    so.reference4.contains('КРАСНАЯ ГОРКА транзит') ||
    so.reference4.contains('Октябрьский магазин транзит') ||
    so.reference4.contains('БРАТИСЛАВСКАЯ  транзит') ||
    so.reference4.contains('НЕКРАСОВКА транзит') ||
    so.reference4.contains('Emex.RU') ||
    so.reference4."	Кластер Средние и Крупные заказы
"contains('СВАРОГ') ||
    (so.reference4.startsWith('Ремдизель') &&
      so.reference4.contains('Б/Н-Люберцы')) ||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference4.contains('ГСП-2') ||
    so.reference4 == 'ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX' ||
    so.reference4 == 'Федотов Р.Е. ИП (Борисов)' ||
    so.reference4 == 'МРТС АО (Безнал Варшавка)' ||
    so.reference4 == 'МГТС ПАО (Тендер)' ||
    so.reference4 == 'МРТС-Строймонтаж (Арсенал-Нов.ОПТ)' ||
    so.reference4 == 'МРТС Терминал (Арсенал-Нов.ОПТ)' ||
    so.reference4 == 'Рудник Валунистый ООО Тендер' ||
    so.reference4 == 'Базовые металлы АО Тендер' ||
    so.reference4 == 'Техника Поволжья ООО (Волга) (АГЕ_Вцо)' ||
    so.reference4 == 'Ново-Широкинский рудник АО Тендер' ||
    so.reference4 == 'КэтЛогистик ЗАКАЗ (Рябиновая) ЭДО/УПД/Т' ||
    so.reference10 == 'У7883' ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == "	
"'00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference4 == 'Неторговые операции' && so.getType() == '00041')
  ) &&
    (orderedQty >= '100' || lineCount >= '30' || volume >= '0.096') &&
    !(
      so.reference4.contains('ТРЕЙДИНГ ТРАНЗИТ') ||
      so.reference4.contains('Трейдинг Транзит') ||
      so.reference4.contains('АВТОДОК') ||
      so.reference4.contains('КОМПЛЕКТСНАБАВТО') ||
      so.reference4.contains('Эксист-закупка') ||
      so.reference4 == 'МОТОР (Н И) /УПД' ||
      so.reference4.contains('ЮРАЛ') ||
      so.reference4.contains('Ф.А. Логистик') ||
      so.reference4.contains('АвтоСВ') ||
      so.reference4.contains('Автостэлс') ||
      so.reference4.contains('АТИ ООО MP-дилер') ||
      so.reference4.contains('Дальзапчасть') ||
      so.reference4.contains('ОРИОН ООО') ||
      so.reference4.contains('Профит-Лига')
    ) &&
    !(
      so.reference4 == 'Евротранс (старый опт)' ||
      so.reference4 == "	
"'Евротранс (MEGAPOWER ) старый опт' ||
      so.reference4 == 'Евротранс (МАЗ)'
    ) &&
    !(
      so.getComments('SO_CONTROL_PACK').size() > 0 &&
      so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')
    )
  "	
"so.reference7 =='09. Клиент на территории (без упаковки)'&&
  !(
    so.reference10 == 'Л2924' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1 ||
    so.reference10 == 'Н5497' ||
    so.reference10 == 'А3762' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))
  )"	Клиент на территории
getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1	Консоль (по зоне тип 2)
"          !(
            so.getType().startsWith('DELI') ||
            so.getType().startsWith('PICK') ||
            so.getType().startsWith('LOCKER') ||
            so.getType().startsWith('STO') ||
            so.getType().startsWith('VENDO') ||
            so.getType() == 'MKPLCBERU' ||
            (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
            !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
            !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
            so.reference4.indexOf('А.П.Р.')!=-1 ||
            so.reference4.indexOf('А.П.Р')!=-1 ||
            so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
            so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
            so.reference4.indexOf('Перово транзит')!=-1 ||
            so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
            so.reference4.indexOf('Эмекс')!=-1 ||
            so.reference10 == 'Т6858' ||
            (so.reference4.startsWith('Ремдизель')&&
            so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
            so.reference4.startsWith('СОЛУ') ||
            so.reference10 == 'Ф6771' ||
            so.reference10 == '61063' ||
            so.reference10 == 'И5143' ||
"	Крупный заказ
"            so.reference10 == 'А0266' ||
            so.reference10 == '83790' ||
            so.reference4.indexOf('ГСП-2')!=-1 ||
            so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
            so.reference10 == 'Л8980' ||
            so.reference10 == 'М0285' ||
            so.reference10 == 'М0180' ||
            so.reference10 == 'Л2924' ||
            so.reference10 == 'Л6666' ||
            so.reference10 == 'Л3915' ||
            so.reference10 == 'Й0527' ||
            so.reference10 == '33266' ||
            so.reference10 == '68923' ||
            so.reference10 == 'У6633' ||
            so.reference10 == 'Р7113' ||
            so.reference10 == 'А3762' ||
            so.reference10 == 'Ф6075' ||
            so.reference10 == 'У7883' ||
            so.getType() == '00558' ||
            so.getType() == '00562' ||
            so.getType() == '00641' ||
            so.getType() == '00639' ||
            so.getType() == '00047' ||
            so.getType() == '00104' ||
"	
"            so.getType() == '00382' ||
            so.getType() == '00387' ||
            so.getType() == '00640' ||
            so.getType().startsWith('MSK') ||
            (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
            (so.reference10=='10591'&&so.getType()=='00560')||
            (so.reference10=='28175'&&so.getType()=='00560')||
            (so.reference10=='06944'&&so.getType()=='00560')||           
            (so.reference10=='И6535'&&so.getType()=='00560')              
          ) &&
            (orderedQty >= '1000' || lineCount >= '60' || volume >= '0.4') &&
            !(
              so.reference4 == 'МОТОР (Н И) /УПД' ||
              so.reference4.indexOf('Дальзапчасть')!=-1 ||
              so.reference4.indexOf('Эмекс.Ру')!=-1 ||
              so.reference4.indexOf('А.П.Р')!=-1 ||
              so.reference4.startsWith('Интернет Решения (Н И)') ||
              so.reference4.indexOf('ЮРАЛ')!=-1
            ) &&
            !(
              so.reference10 == 'Б3547' ||
              so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
"	
"              so.reference10 == '23695'
            )"	
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('ГСП-2')!=-1||
    so.reference4.indexOf('Дальзапчасть')!=-1||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-"	Мелкий заказ
"Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'Л2924' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'А3762' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
    (so.reference10=='10591'&&so.getType()=='00560')||
    (so."	
"reference10=='28175'&&so.getType()=='00560')||
    (so.reference10=='06944'&&so.getType()=='00560')||           
    (so.reference10=='И6535'&&so.getType()=='00560')              
  ) &&
    orderedQty < '100' &&
    lineCount < '30' &&
    volume < '0.096' &&
    !(
      so.reference4 == 'МОТОР (Н И) /УПД' ||
      so.reference4.indexOf('Дальзапчасть')!=-1||
      so.reference4.indexOf('Эмекс.Ру')!=-1||
      so.reference4.indexOf('А.П.Р')!=-1||
      so.reference4.startsWith('Интернет Решения (Н И)') ||
      so.reference4.indexOf('ЮРАЛ')!=-1
    ) &&
    !(
      so.reference10 == 'Б3547' ||
      so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
      so.reference10 == '23695'
    )"	
"(!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
    so.reference4.indexOf('Перово транзит')!=-1 ||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
    so.reference4.indexOf('ГСП-2')!=-1 ||
    so.reference4.indexOf('СВАРОГ')!=-1 ||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-"	Мелкий заказ или Евротранс
"Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'Л2924' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1 ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'А3762' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.reference4 == 'МОТОР (Н И) /УПД' ||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference4.indexOf('Эмекс.Ру')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('ЮРАЛ')!=-1 ||
    so.reference4.startsWith('Интернет Решения (Н И)') ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == "	
"'00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
    (so.reference10=='10591'&&so.getType()=='00560')||
    (so.reference10=='28175'&&so.getType()=='00560')||
    (so.reference10=='06944'&&so.getType()=='00560')||           
    (so.reference10=='И6535'&&so.getType()=='00560')              
  ) &&
    orderedQty < '100' &&
    lineCount < '30' &&
    volume < '0.096') ||
    so.reference10 == 'Б3547' ||
    so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
    so.reference10 == '23695'"	
"so.getType()=='00558'&&
(so.reference10=='У2080'||
so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='49123'||
so.reference4.indexOf('МКАД-6 ООО')!=-1||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749')&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')"	Мелкий и Пр. КЕТ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВСК,ПРОЛЕТАРКА,Ирку
"so.getComments('CLIENTTER').size() > 0&&
(so.reference10=='Л2924'||
so.reference10=='Н5497'||
so.reference10=='А3762')"	НЕ Клиент на территории
getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1	Негабарит (По зоне)
so.reference10=='НЕТОР' && so.getType()=='00041'	Неторговые операции (Отпуск на сборку)
"so.getType()=='00558'&&
(so.reference10=='10591'||
so.reference10=='43188')"	Перемещение под продажу ЗИЛ,Кожухово
"so.getType()=='00558'&&
so.reference10=='28175'"	Перемещение под продажу Люберцы-ОПТ
"so.getType()=='00558'&&
(so.reference10=='И6535'||
so.reference10=='П5132'||
so.reference10=='Й5126'||
so.reference10=='06944')"	Перемещение под продажу Нижний НОВЫЙ-ОПТ,НОВОСИБИРСК,ТОМИЛИНО,Сабурово(покупатель)
"so.getType()=='00558'&&
(so.reference10=='Б5336'||
so.reference10=='Б1279'||
so.reference10=='75598'||
so.reference10=='34154'||
so.reference4.indexOf('ПЕРМЬ')!=-1)"	Перемещение под продажу РЯБИНОВАЯ-ОПТ,КРАСНОГОРСК,БАРТ,Дмитровка-ОПТ,ПЕРМЬ
so.getType()=='00560'&& so.reference10=='10591'	Плановые перемещения (Зил(ОПТ))
so.getType()=='00560'&& so.reference10=='28175'	Плановые перемещения(Люберцы-ОПТ)
"so.reference10=='И6535'&&
so.getType()=='00560'"	Плановые перемещения(Нижний новый -опт)
so.reference10=='06944'&& so.getType()=='00560'	Плановые перемещения(Сабурово(покупатель))
"so.getType()=='00558'&&
(so.reference10=='У2080'||
so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='В7546'||
so.reference4.indexOf('МКАД-6 ООО')!=-1||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749')"	Пр. КЕТЧЕРСКАЯ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВСК,ПРОЛЕТАРКА
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1) &&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1
"	Пропускает Доставку из Накопителя для 4 типа
getTasksContainZonesCount(s,so,invKeys,['Резина'])==1	Резина (По зоне)
isInvsContainsGroup(s,invKeys,'Резина big')	Резина big
isInvsContainsGroup(s,invKeys,'Резина small')	Резина small
getTasksContainZonesCount(s,so,invKeys,['Резина TN'])==1	"Резина TN	 (По зоне)"
"getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1 &&
(so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00027'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00248'||
so.getType()=='00640')"	Рекламация
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1 ||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
    so.reference4.indexOf('Перово транзит')!=-1 ||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference4.indexOf('Emex.RU')!=-1 ||
    so.reference10 == 'Т6858' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference4.indexOf('ГСП-2')!=-1 ||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference10 == "	Средний заказ
"'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == '83790' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'Л2924' ||
    so.reference10 == 'Л6666' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'А3762' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
    (so.reference10=='10591'&&so.getType()=='00560')||
    (so.reference10=='28175'&&so.getType()=='00560')||
    (so."	
"reference10=='06944'&&so.getType()=='00560')||           
    (so.reference10=='И6535'&&so.getType()=='00560')              
  ) &&
    orderedQty < '1000' &&
    lineCount < '60' &&
    volume < '0.4' &&
    (orderedQty >= '100' || lineCount >= '30' || volume >= '0.096') &&
    !(
      so.reference4 == 'МОТОР (Н И) /УПД' ||
      so.reference4.indexOf('Дальзапчасть')!=-1 ||
      so.reference4.indexOf('Эмекс.Ру')!=-1 ||
      so.reference4.indexOf('А.П.Р')!=-1 ||
      so.reference4.startsWith('Интернет Решения (Н И)') ||
      so.reference4.indexOf('ЮРАЛ')!=-1
    ) &&
    !(
      so.reference10 == 'Б3547' ||
      so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
      so.reference10 == '23695'
    )"	
"(((orderedQty<'1000'&&lineCount<'60'&&volume<'0.4')&&
(orderedQty>='100'||lineCount>='30'||volume>='0.096'))||
(orderedQty>='1000'||lineCount>='60'||volume>='0.4'))&&
(so.getType()=='00558'&&
(so.reference10=='У2080'||
so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='49123'||
so.reference4.indexOf('МКАД-6 ООО')!=-1||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749'))"	Средний или Крупный и Пр. КЕТ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВ,ПРОЛЕ,Ир
getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1	Стекло (По зоне)
"getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1||
getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1||
getTasksContainZonesCount(s,so,invKeys,['КУЗОВЩИНА'])==1||
getTasksContainZonesCount(s,so,invKeys,['Кузовщина Негабарит'])==1"	Стекло или Негабарит или Кузовщина (по зоне вместо группы)
so.reference10 == 'Т6858'	Т6858 для 4 фильтра
"so.reference4.indexOf('ТЕНДЕР')!=-1 && 
!(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
!(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1) &&
!(so.reference4.indexOf('Транснефть')!=-1) &&
!(so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1) &&
!(so.reference4.indexOf('транснефть')!=-1) ||
(so.reference4.startsWith('Ремдизель') &&
so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
so.reference4.indexOf('Дальзапчасть')!=-1 ||
so.reference10 == 'Ф6771' ||
so.reference10 == '61063' ||
so.reference10 == 'И5143' ||
so.reference10 == 'А0266' ||
so.reference10 == '83790' ||
so.reference10 == 'Л8980' ||
so.reference10 == 'М0180' ||
so.reference10 == '39061' ||
so.reference10 == 'М0285' ||
so.reference10 == 'Р7113' ||
so.reference10 == '33266' ||
so.reference10 == '68923' ||
so.reference10 == 'У6633' ||
so.reference10 == 'Ф6075' ||
so.reference10 == 'У7883' ||
so.reference4.indexOf('ГСП-2')!=-1||
so.reference4.startsWith('СОЛУ')"	Тендер* и Ремдизель и Дальзапчасть и Федотов
"so.reference4.indexOf('КОЛОМНА-розница')!=-1||
so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
so.reference4.indexOf('Перово транзит')!=-1||
so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1"	Транзитные перемещения
"so.getType()=='00076'&&
(so.reference4.indexOf('Транснефть')!=-1||
so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1||
so.reference4.indexOf('транснефть')!=-1)"	Транснефть
getTasksContainZonesCount(s,so,invKeys,['Улица'])==1	Улица (По зоне)
so.reference4.indexOf('WILDBERRIES')!=-1	Фильтр для ВБ
so.reference4.indexOf('Эмекс')!=-1	Эмекс NEW
Фильтр выражение	Название
so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)'	06. Клиент ко времени на сегодня (без упаковки)
"so.reference4.indexOf('Эмекс')!=-1 ||
so.reference10 == 'Т6858' ||
(so.reference4.indexOf('Интернет Решения')!=-1&&
so.getType()=='00702')"	NEW VIP 1
"so.reference4.indexOf('А.П.Р')!=-1||
so.reference4.indexOf('ЮРАЛ')!=-1"	NEW VIP 2
getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1	NS склад
"so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1&&
!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1"	Альфа Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит
so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1	Альфа-ООО
isInvsContainsGroup(s,invKeys,'Ангар')	Ангар
getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1	Ангар (По зоне)
"so.reference10=='Л2924'||
so.reference10=='А3762'"	Белоусов С.В и Гудков
getTasksContainZonesCount(s,so,invKeys,['ВСЕ Машково 2'])==1	ВСЕ Машково 2
getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1	Все Накопители
"!isInvscontainsGroup(s,invKeys,'Резина big')&&
!isInvscontainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))"	Для Альфа Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Дост.ТК,ВБ,Озон,С клиентом-Копия
so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')	Доставка ТК
"so.getType()=='00558' &&
so.reference10=='62183'"	Екатеринбург пр
"so.reference4.indexOf('Интернет Решения')!=-1&&
so.getType()!='00702'"	Интеренет Решения(ОЗОН)
"so.getType().startsWith('DELI')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType().startsWith('MSK')||
so.getType() == 'MKPLCBERU' ||
so.getType() == 'MSKSPBCDE' ||
so.getType() == 'MKPLCWILB' "	Интернет магазин
"    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.getType() == 'MSKSPBCDE' ||
    so.getType() == 'MKPLCWILB' "	Интернет магазин(Сумарный отбор)
"!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1&&
!so.reference4.indexOf('WILDBERRIES')!=-1&&
!so.reference4.indexOf('Интернет Решения')!=-1"	Исключаем Ангар,Улицу, Консоль и Брак и ВБ, Озон
!getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1	Исключаем зону БРАК
!getTasksContainZonesCount(s,null,invKeys,['БРАК'])==1	Исключаем зону БРАК Предварительный фильтр
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!so.getComments('CLIENTTER').size() > 0"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,ВБ,Озон
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!so.getComments('CLIENTTER').size() > 0	&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Дост.ТК,ВБ,Озон
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1) &&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1
"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,ВБ,Озон-(без исключения Дост.ТК) 
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1) &&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!so.getComments('CLIENTTER').size() > 0	&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,ВБ,Озон,С доставкой
"    !isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,ВБ,Озон,С клиентом и Доставкой
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!so.getComments('CLIENTTER').size() > 0	&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1
"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,Дост.ТК,ВБ,Озон
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1)&&
!(so.reference4.indexOf('Интернет Решения')!=-1)&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1 &&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')"	Исключаем Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Накопитель,Дост.ТК,ВБ,Озон,С клиентом
"!(so.reference4.indexOf('ТЕНДЕР')!=-1 &&
!(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 &&
so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1)) &&
!getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1&&
!so.reference4.indexOf('WILDBERRIES')!=-1&&
!(so.reference4.indexOf('Интернет Решения')!=-1)"	Исключаем Тендер и зону Брак и ВБ,Озон
!null.reference4.indexOf('ТЕНДЕР')!=-1	Исключаем Тендер и зону Брак Предварительный фильтр
"!(
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 ||
    so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1)) ||
    (so.getType()=='00076'&&
    (so.reference4.indexOf('Транснефть')!=-1||
    so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1||
    so.reference4.indexOf('транснефть')!=-1)) ||
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
   (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference4.indexOf('Интернет Решения')!=-1||
    so.reference4.indexOf('WILDBERRIES')!=-1||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == "	Исключения ВСЕ Машково 2
"'83790' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'К3852' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.reference4.indexOf('ГСП-2')!=-1||
    so.reference4.startsWith('СОЛУ')
    )"	
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.getType().startsWith('MSK') ||
    so.reference4.startsWith('Интернет Решения (Н И)') ||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference4.indexOf('WILDBERRIES')!=-1||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('Эмекс.Ру')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('ЮРАЛ')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('ГСП-2')!=-1 ||
"	Исключения для стол контроля 17
"    so.reference4.indexOf('СВАРОГ')!=-1||
    so.reference4.indexOf('Дальзапчасть')!=-1||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'К3852' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л0818' ||
    so.reference10 == 'В0296' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    (so.reference10 == '62183' && so.getType() == '00558') ||
    so.reference4.indexOf('WILDBERRIES')!=-1 ||
    so.reference4.indexOf('Интернет Решения')!=-1 ||
    so.reference10 == 'Й8369' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-"	
"Люберцы)')!=-1 ||
    so.getComments('CLIENTTER').size() > 0 ||
    (so.getComments('SO_CONTROL_PACK').size() > 0 &&
      so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')) ||
    so.getType() == '00558' ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041') ||
    so.reference10 == 'Б3547' ||
    so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
    so.reference10 == '23695'
  )"	
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.getType().startsWith('MSK') ||
    so.reference4.startsWith('Интернет Решения (Н И)') ||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference4.indexOf('WILDBERRIES')!=-1||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('Эмекс.Ру')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('ЮРАЛ')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('ГСП-2')!=-1 ||
"	Исключения для столов ДОСТАВКИ
"    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'К3852' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == '39061' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    (so.reference10 == '62183' && so.getType() == '00558') ||
    so.reference4.indexOf('WILDBERRIES')!=-1 ||
    so.reference4.indexOf('Интернет Решения')!=-1 ||
    so.reference10 == 'Й8369' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1 ||
    so.getComments('CLIENTTER').size() > 0 ||
    so.getType() == '00558' ||
    (so.reference10 == 'НЕТОР' && so."	
"getType() == '00041') ||
    so.reference10 == 'Б3547' ||
    so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
    so.reference10 == '23695'
  )"	
"so.getType()=='00560' &&
so.reference10=='48232'"	Кетчерская план
"so.getType().startsWith('DELI') ||
  so.getType().startsWith('PICK') ||
  so.getType().startsWith('LOCKER') ||
  so.getType().startsWith('STO') ||
  so.getType().startsWith('VENDO') ||
  so.getType().startsWith('MSK') ||
  so.getType() == 'MKPLCBERU' ||
  (!(
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 &&
    so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference4.indexOf('Emex.RU')!=-1 ||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('КЕНТАВР')!=-1 ||
    so.reference4.indexOf('Консул ООО (Вешняки) НОВЫЙ')!=-1 ||
    so.reference4.indexOf('ГСП-2')!=-1 ||
    so.reference4.indexOf('СВАРОГ')!=-1 ||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference10 == '61063' ||
    so.reference4 == 'ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX' ||
    so.reference4 == 'Федотов Р.Е. ИП (Борисов)' ||
    (so.reference4.startsWith"	Кластер Мелкие заказы
"('Ремдизель') &&
      so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
    so.reference4.startsWith('СОЛУ') ||
    so.reference4 == 'Рудник Валунистый ООО Тендер' ||
    so.reference4 == 'Базовые металлы АО Тендер' ||
    so.reference4 == 'Техника Поволжья ООО (Волга) (АГЕ_Вцо)' ||
    so.reference4 == 'Ново-Широкинский рудник АО Тендер' ||
    so.reference10 == 'У7883' ||
    so.xdockPOs.size() == 1 ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    (so.getComments('SO_CONTROL_PACK').size() > 0 &&
      so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')) ||
    (so.reference4 == 'Неторговые операции' && so.getType() == '00041')
  ) &&
    orderedQty < '100' &&
    lineCount < '30' &&
    volume < '0.096') ||
  so.reference4 == 'Евротранс (старый опт)' ||
  so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
  so.reference4 == 'Евротранс (МАЗ)'"	
"1!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1 &&
    so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.contains('А.П.Р') ||
    so.reference4.contains('Эмекс') ||
    so.reference10 == 'Т6858' ||
    so.reference4.contains('КОЛОМНА-розница') ||
    so.reference4.contains('КЕНТАВР') ||
    so.reference4.contains('Консул ООО (Вешняки) НОВЫЙ') ||
    so.reference4.contains('ТУЛА (малая розница)') ||
    so.reference4.contains('Перово транзит') ||
    so.reference4.contains('КРАСНАЯ ГОРКА транзит') ||
    so.reference4.contains('Октябрьский магазин транзит') ||
    so.reference4.contains('БРАТИСЛАВСКАЯ  транзит') ||
    so.reference4.contains('НЕКРАСОВКА транзит') ||
    so.reference4.contains('Emex.RU') ||
    so.reference4."	Кластер Средние и Крупные заказы
"contains('СВАРОГ') ||
    (so.reference4.startsWith('Ремдизель') &&
      so.reference4.contains('Б/Н-Люберцы')) ||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference4.contains('ГСП-2') ||
    so.reference4 == 'ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX' ||
    so.reference4 == 'Федотов Р.Е. ИП (Борисов)' ||
    so.reference4 == 'МРТС АО (Безнал Варшавка)' ||
    so.reference4 == 'МГТС ПАО (Тендер)' ||
    so.reference4 == 'МРТС-Строймонтаж (Арсенал-Нов.ОПТ)' ||
    so.reference4 == 'МРТС Терминал (Арсенал-Нов.ОПТ)' ||
    so.reference4 == 'Рудник Валунистый ООО Тендер' ||
    so.reference4 == 'Базовые металлы АО Тендер' ||
    so.reference4 == 'Техника Поволжья ООО (Волга) (АГЕ_Вцо)' ||
    so.reference4 == 'Ново-Широкинский рудник АО Тендер' ||
    so.reference4 == 'КэтЛогистик ЗАКАЗ (Рябиновая) ЭДО/УПД/Т' ||
    so.reference10 == 'У7883' ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == "	
"'00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference4 == 'Неторговые операции' && so.getType() == '00041')
  ) &&
    (orderedQty >= '100' || lineCount >= '30' || volume >= '0.096') &&
    !(
      so.reference4.contains('ТРЕЙДИНГ ТРАНЗИТ') ||
      so.reference4.contains('Трейдинг Транзит') ||
      so.reference4.contains('АВТОДОК') ||
      so.reference4.contains('КОМПЛЕКТСНАБАВТО') ||
      so.reference4.contains('Эксист-закупка') ||
      so.reference4 == 'МОТОР (Н И) /УПД' ||
      so.reference4.contains('ЮРАЛ') ||
      so.reference4.contains('Ф.А. Логистик') ||
      so.reference4.contains('АвтоСВ') ||
      so.reference4.contains('Автостэлс') ||
      so.reference4.contains('АТИ ООО MP-дилер') ||
      so.reference4.contains('Дальзапчасть') ||
      so.reference4.contains('ОРИОН ООО') ||
      so.reference4.contains('Профит-Лига')
    ) &&
    !(
      so.reference4 == 'Евротранс (старый опт)' ||
      so.reference4 == "	
"'Евротранс (MEGAPOWER ) старый опт' ||
      so.reference4 == 'Евротранс (МАЗ)'
    ) &&
    !(
      so.getComments('SO_CONTROL_PACK').size() > 0 &&
      so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК')
    )
  "	
"so.reference7 =='09. Клиент на территории (без упаковки)'&&
  !(
    so.reference10 == 'Л2924' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1 ||
    so.reference10 == 'Н5497' ||
    so.reference10 == 'А3762' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))
  )"	Клиент на территории
getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1	Консоль (по зоне тип 2)
"          !(
            so.getType().startsWith('DELI') ||
            so.getType().startsWith('PICK') ||
            so.getType().startsWith('LOCKER') ||
            so.getType().startsWith('STO') ||
            so.getType().startsWith('VENDO') ||
            so.getType() == 'MKPLCBERU' ||
            (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
            !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
            !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
            so.reference4.indexOf('А.П.Р.')!=-1 ||
            so.reference4.indexOf('А.П.Р')!=-1 ||
            so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
            so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
            so.reference4.indexOf('Перово транзит')!=-1 ||
            so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
            so.reference4.indexOf('Эмекс')!=-1 ||
            so.reference10 == 'Т6858' ||
            (so.reference4.startsWith('Ремдизель')&&
            so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
            so.reference4.startsWith('СОЛУ') ||
            so.reference10 == 'Ф6771' ||
            so.reference10 == '61063' ||
            so.reference10 == 'И5143' ||
"	Крупный заказ
"            so.reference10 == 'А0266' ||
            so.reference10 == '83790' ||
            so.reference4.indexOf('ГСП-2')!=-1 ||
            so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
            so.reference10 == 'Л8980' ||
            so.reference10 == 'М0285' ||
            so.reference10 == 'М0180' ||
            so.reference10 == 'Л2924' ||
            so.reference10 == 'Л6666' ||
            so.reference10 == 'Л3915' ||
            so.reference10 == 'Й0527' ||
            so.reference10 == '33266' ||
            so.reference10 == '68923' ||
            so.reference10 == 'У6633' ||
            so.reference10 == 'Р7113' ||
            so.reference10 == 'А3762' ||
            so.reference10 == 'Ф6075' ||
            so.reference10 == 'У7883' ||
            so.getType() == '00558' ||
            so.getType() == '00562' ||
            so.getType() == '00641' ||
            so.getType() == '00639' ||
            so.getType() == '00047' ||
            so.getType() == '00104' ||
"	
"            so.getType() == '00382' ||
            so.getType() == '00387' ||
            so.getType() == '00640' ||
            so.getType().startsWith('MSK') ||
            (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
            (so.reference10=='10591'&&so.getType()=='00560')||
            (so.reference10=='28175'&&so.getType()=='00560')||
            (so.reference10=='06944'&&so.getType()=='00560')||           
            (so.reference10=='И6535'&&so.getType()=='00560')              
          ) &&
            (orderedQty >= '1000' || lineCount >= '60' || volume >= '0.4') &&
            !(
              so.reference4 == 'МОТОР (Н И) /УПД' ||
              so.reference4.indexOf('Дальзапчасть')!=-1 ||
              so.reference4.indexOf('Эмекс.Ру')!=-1 ||
              so.reference4.indexOf('А.П.Р')!=-1 ||
              so.reference4.startsWith('Интернет Решения (Н И)') ||
              so.reference4.indexOf('ЮРАЛ')!=-1
            ) &&
            !(
              so.reference10 == 'Б3547' ||
              so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
"	
"              so.reference10 == '23695'
            )"	
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('ГСП-2')!=-1||
    so.reference4.indexOf('Дальзапчасть')!=-1||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-"	Мелкий заказ
"Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'Л2924' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'А3762' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
    (so.reference10=='10591'&&so.getType()=='00560')||
    (so."	
"reference10=='28175'&&so.getType()=='00560')||
    (so.reference10=='06944'&&so.getType()=='00560')||           
    (so.reference10=='И6535'&&so.getType()=='00560')              
  ) &&
    orderedQty < '100' &&
    lineCount < '30' &&
    volume < '0.096' &&
    !(
      so.reference4 == 'МОТОР (Н И) /УПД' ||
      so.reference4.indexOf('Дальзапчасть')!=-1||
      so.reference4.indexOf('Эмекс.Ру')!=-1||
      so.reference4.indexOf('А.П.Р')!=-1||
      so.reference4.startsWith('Интернет Решения (Н И)') ||
      so.reference4.indexOf('ЮРАЛ')!=-1
    ) &&
    !(
      so.reference10 == 'Б3547' ||
      so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
      so.reference10 == '23695'
    )"	
"(!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
    so.reference4.indexOf('Перово транзит')!=-1 ||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
    so.reference4.indexOf('ГСП-2')!=-1 ||
    so.reference4.indexOf('СВАРОГ')!=-1 ||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-"	Мелкий заказ или Евротранс
"Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'Л2924' ||
    so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1 ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'А3762' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.reference4 == 'МОТОР (Н И) /УПД' ||
    so.reference4.indexOf('Дальзапчасть')!=-1 ||
    so.reference4.indexOf('Эмекс.Ру')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('ЮРАЛ')!=-1 ||
    so.reference4.startsWith('Интернет Решения (Н И)') ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == "	
"'00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
    (so.reference10=='10591'&&so.getType()=='00560')||
    (so.reference10=='28175'&&so.getType()=='00560')||
    (so.reference10=='06944'&&so.getType()=='00560')||           
    (so.reference10=='И6535'&&so.getType()=='00560')              
  ) &&
    orderedQty < '100' &&
    lineCount < '30' &&
    volume < '0.096') ||
    so.reference10 == 'Б3547' ||
    so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
    so.reference10 == '23695'"	
"so.getType()=='00558'&&
(so.reference10=='У2080'||
so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='49123'||
so.reference4.indexOf('МКАД-6 ООО')!=-1||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749')&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')"	Мелкий и Пр. КЕТ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВСК,ПРОЛЕТАРКА,Ирку
"so.getComments('CLIENTTER').size() > 0&&
(so.reference10=='Л2924'||
so.reference10=='Н5497'||
so.reference10=='А3762')"	НЕ Клиент на территории
getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1	Негабарит (По зоне)
so.reference10=='НЕТОР' && so.getType()=='00041'	Неторговые операции (Отпуск на сборку)
"so.getType()=='00558'&&
(so.reference10=='10591'||
so.reference10=='43188')"	Перемещение под продажу ЗИЛ,Кожухово
"so.getType()=='00558'&&
so.reference10=='28175'"	Перемещение под продажу Люберцы-ОПТ
"so.getType()=='00558'&&
(so.reference10=='И6535'||
so.reference10=='П5132'||
so.reference10=='Й5126'||
so.reference10=='06944')"	Перемещение под продажу Нижний НОВЫЙ-ОПТ,НОВОСИБИРСК,ТОМИЛИНО,Сабурово(покупатель)
"so.getType()=='00558'&&
(so.reference10=='Б5336'||
so.reference10=='Б1279'||
so.reference10=='75598'||
so.reference10=='34154'||
so.reference4.indexOf('ПЕРМЬ')!=-1)"	Перемещение под продажу РЯБИНОВАЯ-ОПТ,КРАСНОГОРСК,БАРТ,Дмитровка-ОПТ,ПЕРМЬ
so.getType()=='00560'&& so.reference10=='10591'	Плановые перемещения (Зил(ОПТ))
so.getType()=='00560'&& so.reference10=='28175'	Плановые перемещения(Люберцы-ОПТ)
"so.reference10=='И6535'&&
so.getType()=='00560'"	Плановые перемещения(Нижний новый -опт)
so.reference10=='06944'&& so.getType()=='00560'	Плановые перемещения(Сабурово(покупатель))
"so.getType()=='00558'&&
(so.reference10=='У2080'||
so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='В7546'||
so.reference4.indexOf('МКАД-6 ООО')!=-1||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749')"	Пр. КЕТЧЕРСКАЯ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВСК,ПРОЛЕТАРКА
"!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.indexOf('WILDBERRIES')!=-1) &&
!(so.reference7 =='06. Клиент ко времени на сегодня (без упаковки)')&&
!(so.reference7 =='09. Клиент на территории (без упаковки)')&&
!(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))&&
!getTasksContainZonesCount(s,so,invKeys,['Накопитель для БП'])==1
"	Пропускает Доставку из Накопителя для 4 типа
getTasksContainZonesCount(s,so,invKeys,['Резина'])==1	Резина (По зоне)
isInvsContainsGroup(s,invKeys,'Резина big')	Резина big
isInvsContainsGroup(s,invKeys,'Резина small')	Резина small
getTasksContainZonesCount(s,so,invKeys,['Резина TN'])==1	"Резина TN	 (По зоне)"
"getTasksContainZonesCount(s,so,invKeys,['БРАК'])==1 &&
(so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00027'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00248'||
so.getType()=='00640')"	Рекламация
"!(
    so.getType().startsWith('DELI') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    (so.reference4.indexOf('ТЕНДЕР')!=-1 &&
    !(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
    !(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1))||
    so.reference4.indexOf('А.П.Р.')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1 ||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
    so.reference4.indexOf('Перово транзит')!=-1 ||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference4.indexOf('Emex.RU')!=-1 ||
    so.reference10 == 'Т6858' ||
    (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
    so.reference4.startsWith('СОЛУ') ||
    so.reference4.indexOf('ГСП-2')!=-1 ||
    so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
    so.reference10 == "	Средний заказ
"'Ф6771' ||
    so.reference10 == '61063' ||
    so.reference10 == '83790' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'Л2924' ||
    so.reference10 == 'Л6666' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'У6633' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'А3762' ||
    so.reference10 == 'Ф6075' ||
    so.reference10 == 'У7883' ||
    so.getType() == '00558' ||
    so.getType() == '00562' ||
    so.getType() == '00641' ||
    so.getType() == '00639' ||
    so.getType() == '00047' ||
    so.getType() == '00104' ||
    so.getType() == '00382' ||
    so.getType() == '00387' ||
    so.getType() == '00640' ||
    so.getType().startsWith('MSK') ||
    (so.reference10 == 'НЕТОР' && so.getType() == '00041')||
    (so.reference10=='10591'&&so.getType()=='00560')||
    (so.reference10=='28175'&&so.getType()=='00560')||
    (so."	
"reference10=='06944'&&so.getType()=='00560')||           
    (so.reference10=='И6535'&&so.getType()=='00560')              
  ) &&
    orderedQty < '1000' &&
    lineCount < '60' &&
    volume < '0.4' &&
    (orderedQty >= '100' || lineCount >= '30' || volume >= '0.096') &&
    !(
      so.reference4 == 'МОТОР (Н И) /УПД' ||
      so.reference4.indexOf('Дальзапчасть')!=-1 ||
      so.reference4.indexOf('Эмекс.Ру')!=-1 ||
      so.reference4.indexOf('А.П.Р')!=-1 ||
      so.reference4.startsWith('Интернет Решения (Н И)') ||
      so.reference4.indexOf('ЮРАЛ')!=-1
    ) &&
    !(
      so.reference10 == 'Б3547' ||
      so.reference4 == 'Евротранс (MEGAPOWER ) старый опт' ||
      so.reference10 == '23695'
    )"	
"(((orderedQty<'1000'&&lineCount<'60'&&volume<'0.4')&&
(orderedQty>='100'||lineCount>='30'||volume>='0.096'))||
(orderedQty>='1000'||lineCount>='60'||volume>='0.4'))&&
(so.getType()=='00558'&&
(so.reference10=='У2080'||
so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='49123'||
so.reference4.indexOf('МКАД-6 ООО')!=-1||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749'))"	Средний или Крупный и Пр. КЕТ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВ,ПРОЛЕ,Ир
getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1	Стекло (По зоне)
"getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1||
getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1||
getTasksContainZonesCount(s,so,invKeys,['КУЗОВЩИНА'])==1||
getTasksContainZonesCount(s,so,invKeys,['Кузовщина Негабарит'])==1"	Стекло или Негабарит или Кузовщина (по зоне вместо группы)
so.reference10 == 'Т6858'	Т6858 для 4 фильтра
"so.reference4.indexOf('ТЕНДЕР')!=-1 && 
!(so.reference4.indexOf('Агро-Авто ООО (ТЕНДЕР)')!=-1) &&
!(so.reference4.indexOf('Техногазавто АК ООО (ТЕНДЕР)')!=-1) &&
!(so.reference4.indexOf('Транснефть')!=-1) &&
!(so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1) &&
!(so.reference4.indexOf('транснефть')!=-1) ||
(so.reference4.startsWith('Ремдизель') &&
so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
so.reference4.indexOf('Дальзапчасть')!=-1 ||
so.reference10 == 'Ф6771' ||
so.reference10 == '61063' ||
so.reference10 == 'И5143' ||
so.reference10 == 'А0266' ||
so.reference10 == '83790' ||
so.reference10 == 'Л8980' ||
so.reference10 == 'М0180' ||
so.reference10 == '39061' ||
so.reference10 == 'М0285' ||
so.reference10 == 'Р7113' ||
so.reference10 == '33266' ||
so.reference10 == '68923' ||
so.reference10 == 'У6633' ||
so.reference10 == 'Ф6075' ||
so.reference10 == 'У7883' ||
so.reference4.indexOf('ГСП-2')!=-1||
so.reference4.startsWith('СОЛУ')"	Тендер* и Ремдизель и Дальзапчасть и Федотов
"so.reference4.indexOf('КОЛОМНА-розница')!=-1||
so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
so.reference4.indexOf('Перово транзит')!=-1||
so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1"	Транзитные перемещения
"so.getType()=='00076'&&
(so.reference4.indexOf('Транснефть')!=-1||
so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1||
so.reference4.indexOf('транснефть')!=-1)"	Транснефть
getTasksContainZonesCount(s,so,invKeys,['Улица'])==1	Улица (По зоне)
so.reference4.indexOf('WILDBERRIES')!=-1	Фильтр для ВБ
so.reference4.indexOf('Эмекс')!=-1	Эмекс NEW
