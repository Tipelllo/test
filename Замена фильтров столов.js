// Зона Контроля 14 - 1
// Перемещение под продажу Люберцы-ОПТ


// было
so.getType()=='00558'&&
so.reference4=='Люберцы-ОПТ'

// стало
so.getType()=='00558'&&
so.reference10=='28175'


// Зона Контроля 01-1
// Зона Контроля 01-2
// Мелкий заказ

// было
!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX'|| //so.reference10=='41940'||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||           //so.reference10=='83790'||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||  //so.reference4.startsWith('СОЛУ')||
so.reference4=='МРТС АО (Безнал Варшавка)'||     //so.reference10 == 'И5143'||                                                       
so.reference4=='МГТС ПАО (Тендер)'|| //so.reference10 == 'А0266'||
so.reference4=='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'|| //so.reference10 == 'Л0818'||
so.reference4=='МРТС Терминал (Арсенал-Нов.ОПТ)'|| //so.reference10 == 'В0296'||
so.reference4=='Рудник Валунистый ООО Тендер'|| //so.reference10 == 'Л8980'||
so.reference4=='Базовые металлы АО Тендер'|| //so.reference10 == 'М0285'||
so.reference4=='Техника Поволжья ООО (Волга) (АГЕ_Вцо)'|| //so.reference10 == 'В7679'||
so.reference4=='Ипполитова И. А. ИП  (БН-Люберцы)'|| //so.reference10 == '39061'||
so.reference4=='Ново-Широкинский рудник АО Тендер'|| //so.reference10 == 'М0180'||
so.reference4=='КэтЛогистик ЗАКАЗ (Рябиновая) ЭДО/УПД/Т'|| //so.reference10 == 'Й8369'||
so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'|| //so.reference10 == 'Л2924'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference4=='РТАООО(Рябиновая)'|| //so.reference10 == 'Н5497'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'|| //so.reference10 == 'А3762'||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
( so.reference4=='Неторговые операции' && so.getType()=='00041'))&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')&&
!(so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ЮРАЛ'))&&
!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)')&&
! (so.getType()=='00560' &&
so.reference4=='КЕТЧЕРСКАЯ транзит')



// стало 1.1


!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||                         //множество не менял
so.reference10 == 'О7266'||
so.reference10 == 'М4607'||                    
so.reference10 == 'Л6330'||               
so.reference10 == 'Й2962'||                              
so.reference10 == 'М6025'||
so.reference4.contains('Эмекс')||                           //множество не менял
so.reference4.contains('Emex.RU')||
so.reference10 == 'М6822'||               
so.reference10 == 'Й1138'|| 
so.reference10 == 'Р6545'||
so.reference10 == 'С7723'||
so.reference10 == '60239'||                               
so.reference4.contains('Козлов Сергей Витальевич')||        //множество не менял
so.reference10 == '41940'||
so.reference10 == '83790'||                           
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||    //множество не менял
so.reference4.startsWith('СОЛУ')||
so.reference10 == 'И5143'||
so.reference10 == 'А0266'||
so.reference10 == 'Л0818'||
so.reference10 == 'В0296'||
so.reference10 == 'Л8980'||
so.reference10 == 'М0285'||
so.reference10 == 'В7679'||
so.reference10 == '39061'||
so.reference10 == 'М0180'||
so.reference10 == 'Й8369'||
so.reference10 == 'Л2924'||
so.reference10 == 'Л6666'||
so.reference10 == 'Н5497'||
so.reference10 == 'А3762'||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
(so.reference10 == 'НЕТОР'&& so.getType()=='00041'))&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')&&
!(so.reference4=='МОТОР (Н И) /УПД'||                                // не нашёл
so.reference4.contains('Дальзапчасть')|| //60239
so.reference4.contains('АВТОДОК')||  //Множество не делал
so.reference4.contains('Автоконтракты')|| //Й9883
so.reference4.contains('АТИ ')||  //60256
so.reference4.contains('КЕНТАВР')|| //М6822
so.reference4.contains('ОРИОН')|| //Множество не делал
so.reference4.contains('КэтЛогистик')||//Й8369
so.reference4.contains('ПАСКЕР')|| //41940
so.reference4.contains('Профит Лига')|| //Й8670
so.reference4.contains('Эксист-закупка')|| //Г1293
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')|| //В5556
so.reference4.contains('Агро-Авто')|| //Л0812
so.reference4.contains('БЕРГ Холдинг М')|| //90379
so.reference4.contains('БЕРГ Холдинг м')|| //О9825
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ЮРАЛ'))&&
!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)')&&
! (so.getType()=='00560' &&
so.reference4=='КЕТЧЕРСКАЯ транзит')

// стало 1.2

!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='41940'||
so.reference10=='83790'||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||
so.reference10 == 'И5143'||
so.reference10 == 'А0266'||
so.reference10 == 'Л0818'||
so.reference10 == 'В0296'||
so.reference10 == 'Л8980'||
so.reference10 == 'М0285'||
so.reference10 == 'В7679'||
so.reference10 == '39061'||
so.reference10 == 'М0180'||
so.reference10 == 'Й8369'||
so.reference10 == 'Л2924'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference10 == 'Н5497'||
so.reference10 == 'А3762'||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
(so.reference10=='НЕТОР' && so.getType()=='00041'))&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')&&
!(so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ЮРАЛ'))&&
!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695') &&
! (so.getType()=='00560' &&
so.reference10=='48232')



// Мелкий и Пр. КЕТЧЕРСКАЯ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВСК,ПРОЛЕТАРКА

//было

so.getType()=='00558'&&
(so.reference4=='КЕТЧЕРСКАЯ транзит'||
so.reference4=='БЕГОВАЯ ТРАНЗИТ'||
so.reference4=='АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)'||
so.reference4=='ВЕШНЯКИ'||
so.reference4.contains('МКАД-6 ООО')||
so.reference4=='Подольск (М)'||
so.reference4=='ТУЛА (малая розница)'||
so.reference4=='Авто-Альянс (Екатеринбург)'||
so.reference4=='КРАСНОГОРСК СТО (покупатель)'||
so.reference4=='Авто-Альянс (УФА)'||
so.reference4=='Авто-Альянс (Уфа)'||
so.reference4=='Авто-Альянс (Уфа 2)'||
so.reference4=='Нефтекамск ТРАНЗИТ'||
so.reference4=='Ижевск  (Уфа 3)'||
so.reference4=='ПРОЛЕТАРКА (покупатель)')&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')

//стало

so.getType()=='00558'&&
(so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='49123'||
so.reference4.contains('МКАД-6 ООО')||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='62183'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749')&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')


//Зона Контроля 01-3

//Мелкий заказ или Евротранс

//Было 
!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('Эмекс')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX'||
so.reference10=='Федотов Р.Е. ИП (Борисов)'||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||
so.reference4=='Рудник Валунистый ООО Тендер'||
so.reference4=='Базовые металлы АО Тендер'||
so.reference4=='Техника Поволжья ООО (Волга) (АГЕ_Вцо)'||
so.reference4=='Ипполитова И. А. ИП  (БН-Люберцы)'||
so.reference4=='Ново-Широкинский рудник АО Тендер'||
so.reference4=='КэтЛогистик ЗАКАЗ (Рябиновая) ЭДО/УПД/Т'||
so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference4=='РТАООО(Рябиновая)'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'||
so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.contains('ЮРАЛ')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
(so.getType()=='00560' &&
so.reference4=='КЕТЧЕРСКАЯ транзит') ||
( so.reference4=='Неторговые операции' && so.getType()=='00041'))&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')||
so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)'

//Стало
!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('Эмекс')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='41940'||
so.reference10=='83790'||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||
so.reference10=='Л8980'||
so.reference10=='М0285'||
so.reference10=='В7679'||
so.reference10=='39061'||
so.reference10=='М0180'||
so.reference10=='Й8369'||
so.reference10=='Л2924'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference10=='Н5497'||
so.reference10=='А3762'||
so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.contains('ЮРАЛ')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
(so.getType()=='00560' &&
so.reference10=='48232') ||
(so.reference10=='НЕТОР' && so.getType()=='00041'))&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')||
so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695'


//Зона Контроля 05-1

//Кетчерская план

//было

so.getType()=='00560' &&
so.reference4=='КЕТЧЕРСКАЯ транзит'

//стало
so.getType()=='00560' &&
so.reference10=='48232'

//Крупный заказ	

//было

!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.')||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('СВАРОГ')||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||
so.reference4=='МРТС АО (Безнал Варшавка)'||
so.reference4=='МГТС ПАО (Тендер)'||
so.reference4=='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'||
so.reference4=='МРТС Терминал (Арсенал-Нов.ОПТ)'||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4=='Рудник Валунистый ООО Тендер'||
so.reference4=='Базовые металлы АО Тендер'||
so.reference4=='Ипполитова И. А. ИП  (БН-Люберцы)'||
so.reference4=='Ново-Широкинский рудник АО Тендер'||
so.reference4=='КэтЛогистик ЗАКАЗ (Рябиновая) ЭДО/УПД/Т'||
so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference4=='РТАООО(Рябиновая)'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
( so.reference4=='Неторговые операции' && so.getType()=='00041'))&&
(orderedQty>='1000'||lineCount>='60'||volume>='0.4')
&&!(so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ЮРАЛ'))&&
!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)')&&
! (so.getType()=='00560' &&
so.reference4=='КЕТЧЕРСКАЯ транзит')



//стало

!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.')||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('СВАРОГ')||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||
so.reference10=='И5143'||
so.reference10=='А0266'||
so.reference10=='Л0818'||
so.reference10=='В0296'||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='83790'||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference10=='Л8980'||
so.reference10=='М0285'||
so.reference10=='39061'||
so.reference10=='М0180'||
so.reference10=='Й8369'||
so.reference10=='Л2924'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference10=='Н5497'||
so.reference10=='А3762'||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
( so.reference4=='Неторговые операции' && so.getType()=='00041'))&&
(orderedQty>='1000'||lineCount>='60'||volume>='0.4')
&&!(so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ЮРАЛ'))&&
!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695') &&
! (so.getType()=='00560' &&
so.reference10=='48232')


//Средний заказ

//Было

!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.')||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('СВАРОГ')||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||
so.reference4=='МРТС АО (Безнал Варшавка)'||
so.reference4=='МГТС ПАО (Тендер)'||
so.reference4=='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'||
so.reference4=='МРТС Терминал (Арсенал-Нов.ОПТ)'||
so.reference4=='Рудник Валунистый ООО Тендер'||
so.reference4=='Базовые металлы АО Тендер'||
so.reference4=='Ипполитова И. А. ИП  (БН-Люберцы)'||
so.reference4=='Ново-Широкинский рудник АО Тендер'||
so.reference4=='КэтЛогистик ЗАКАЗ (Рябиновая) ЭДО/УПД/Т'||
so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference4=='РТАООО(Рябиновая)'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
( so.reference4=='Неторговые операции' && so.getType()=='00041'))&&
(orderedQty<'1000'&&lineCount<'60'&&volume<'0.4')&&
(orderedQty>='100'||lineCount>='30'||volume>='0.096')&&
!(so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ЮРАЛ'))&&
!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)')&&
! (so.getType()=='00560' &&
so.reference4=='КЕТЧЕРСКАЯ транзит')

//Стало

!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.')||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('СВАРОГ')||
(so.getType()=='00407' && so.reference4.contains('Ремдизель'))||
so.reference4.startsWith('СОЛУ')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='83790'||
so.reference10=='И5143'||
so.reference10=='А0266'||
so.reference10=='Л0818'||
so.reference10=='В0296'||
so.reference10=='Л8980'||
so.reference10=='М0285'||
so.reference10=='39061'||
so.reference10=='М0180'||
so.reference10=='Й8369'||
so.reference10=='Л2924'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference10=='Н5497'||
so.reference10=='А3762'||
so.getType()=='00558'||
so.getType()=='00562'||
so.getType()=='00641'||
so.getType()=='00639'||
so.getType()=='00047'||
so.getType()=='00104'||
so.getType()=='00382'||
so.getType()=='00387'||
so.getType()=='00640'|| 
so.getType().startsWith('MSK')||
( so.reference4=='Неторговые операции' && so.getType()=='00041'))&&
(orderedQty<'1000'&&lineCount<'60'&&volume<'0.4')&&
(orderedQty>='100'||lineCount>='30'||volume>='0.096')&&
!(so.reference4=='МОТОР (Н И) /УПД'||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||   
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ЮРАЛ'))&&
!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695') &&
! (so.getType()=='00560' &&
so.reference10=='48232')



//Средний или Крупный и Пр. КЕТЧЕР,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВ,ПРОЛЕ

//Было

(((orderedQty<'1000'&&lineCount<'60'&&volume<'0.4')&&
(orderedQty>='100'||lineCount>='30'||volume>='0.096'))||
(orderedQty>='1000'||lineCount>='60'||volume>='0.4'))&&
(so.getType()=='00558'&&
(so.reference4=='КЕТЧЕРСКАЯ транзит'||
so.reference4=='БЕГОВАЯ ТРАНЗИТ'||
so.reference4=='АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)'||
so.reference4=='ВЕШНЯКИ'||
so.reference4.contains('МКАД-6 ООО')||
so.reference4=='Подольск (М)'||
so.reference4=='ТУЛА (малая розница)'||
so.reference4=='Авто-Альянс (Екатеринбург)'||
so.reference4=='КРАСНОГОРСК СТО (покупатель)'||
so.reference4=='Авто-Альянс (УФА)'||
so.reference4=='Авто-Альянс (Уфа)'||
so.reference4=='Авто-Альянс (Уфа 2)'||
so.reference4=='Нефтекамск ТРАНЗИТ'||
so.reference4=='Ижевск  (Уфа 3)'||
so.reference4=='ПРОЛЕТАРКА (покупатель)'))

//Стало

(((orderedQty<'1000'&&lineCount<'60'&&volume<'0.4')&&
(orderedQty>='100'||lineCount>='30'||volume>='0.096'))||
(orderedQty>='1000'||lineCount>='60'||volume>='0.4'))&&
(so.getType()=='00558'&&
(so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='49123'||
so.reference4.contains('МКАД-6 ООО')||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='62183'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749'))



//Тендер* и Ремдизель и Сварог и Дальзапчасть и Козлов и Федотов и МРТС	

//было

(so.reference4.contains('ТЕНДЕР')&&
!so.reference4.contains('Транснефть')&&
!so.reference4.contains('ТРАНСНЕФТЬ')&&
!so.reference4.contains('транснефть')&&
so.reference4!='Техногазавто АК ООО (ТЕНДЕР) дилер MP и MX'&&
so.reference4!='Агро-Авто ООО (ТЕНДЕР)')||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='Гонежук Эдуард Заурбиевич ИП (ЕГ) (ЭДО)'||
so.reference4=='МРТС АО (Безнал Варшавка)'||
so.reference4=='МГТС ПАО (Тендер)'||
so.reference4=='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'||
so.reference4=='МРТС Терминал (Арсенал-Нов.ОПТ)'||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||
so.reference4=='Рудник Валунистый ООО Тендер'||
so.reference4=='Ново-Широкинский рудник АО Тендер'||
so.reference4=='Ипполитова И. А. ИП (БН-Люберцы)'||
so.reference4=='Базовые металлы АО Тендер'||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.startsWith('СОЛУ')


//стало

(so.reference4.contains('ТЕНДЕР')&&
!so.reference4.contains('Транснефть')&&
!so.reference4.contains('ТРАНСНЕФТЬ')&&
!so.reference4.contains('транснефть')&&
so.reference4!='Техногазавто АК ООО (ТЕНДЕР) дилер MP и MX'&&
so.reference4!='Агро-Авто ООО (ТЕНДЕР)')||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='Е9816'||
so.reference10=='И5143'||
so.reference10=='А0266'||
so.reference10=='Л0818'||
so.reference10=='В0296'||
so.reference10=='83790'||
so.reference10=='Л8980'||
so.reference10=='М0180'||
so.reference10=='39061'||
so.reference10=='М0285'||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.startsWith('СОЛУ')


//Перемещение под продажу Нижний НОВЫЙ-ОПТ,НОВОСИБИРСК,ТОМИЛИНО	

//было

so.getType()=='00558'&&
(so.reference4=='Нижний НОВЫЙ-ОПТ'||
so.reference4=='Томилино ТРАНЗИТ'||
so.reference4=='НОВОСИБИРСК')


//стало

so.getType()=='00558'&&
(so.reference10=='И6535'||
so.reference10=='П5132'||
so.reference10=='Й5126')
