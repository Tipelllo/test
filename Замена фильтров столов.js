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

//Зона Контроля 13-2

//Перемещение под продажу РЯБИНОВАЯ-ОПТ,КРАСНОГОРСК,БАРТ,Дмитровка-ОПТ,ПЕРМЬ	


//было

so.getType()=='00558'&&
(so.reference4=='РЯБИНОВАЯ-ОПТ'||
so.reference4=='КРАСНОГОРСК'||
so.reference4=='БАРТ'||
so.reference4=='Дмитровка-ОПТ'||
so.reference4.contains('ПЕРМЬ'))


//стало


so.getType()=='00558'&&
(so.reference10=='Б5336'||
so.reference10=='Б1279'||
so.reference10=='75598'||
so.reference10=='34154'||
so.reference4.contains('ПЕРМЬ'))


//Зона Контроля 14-2
//Перемещение под продажу ЗИЛ,Кожухово

//было


so.getType()=='00558'&&
(so.reference4=='ЗИЛ Опт(М)'||
so.reference4=='Кожухово')


//стало


so.getType()=='00558'&&
(so.reference10=='10591'||
so.reference10=='43188')


//Зона Контроля 17-1

//Исключения для стол контроля 17


//было


!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.getType().startsWith('MSK')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка МЛ ЭДО (Н И)')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('ТРЕЙДИНГ ТРАНЗИТ')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка   М ЭДО (Н И)')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.contains('ЮРАЛ')||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX'||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
so.reference4.startsWith('СОЛУ')||
so.reference4=='МРТС АО (Безнал Варшавка)'||
so.reference4=='МГТС ПАО (Тендер)'||
so.reference4=='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'||
so.reference4=='МРТС Терминал (Арсенал-Нов.ОПТ)'||
so.reference4=='Рудник Валунистый ООО Тендер'||
so.reference4=='Базовые металлы АО Тендер'||
so.reference4=='Ипполитова И. А. ИП (БН-Люберцы)'||
so.reference4=='Техника Поволжья ООО (Волга) (АГЕ_Вцо)'||
so.reference4=='Ново-Широкинский рудник АО Тендер'||
so.reference4.contains('Вайлдберриз')||
so.reference4=='КэтЛогистик ЗАКАЗ (Рябиновая) ЭДО/УПД/Т'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.getComments('CLIENTTER').size() > 0 ||
(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))||
so.getType()=='00558' ||
( so.reference4=='Неторговые операции' && so.getType()=='00041')||
so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)')

//стало


!(so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType()=='MKPLCBERU'||
so.getType().startsWith('MSK')||
so.reference4.startsWith('Интернет Решения (Н И)')||
so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('АВТОДОК')||
so.reference4.contains('Автоконтракты')||
so.reference4.contains('АТИ ')||
so.reference4.contains('КЕНТАВР')||
so.reference4.contains('ОРИОН')||
so.reference4.contains('КэтЛогистик')||
so.reference4.contains('ПАСКЕР')||
so.reference4.contains('Профит Лига')||
so.reference4.contains('Эксист-закупка МЛ ЭДО (Н И)')||
so.reference4.contains('Эмекс.Ру')||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('АВДМОТОРС')||
so.reference4.contains('Агро-Авто')||
so.reference4.contains('БЕРГ Холдинг М')||
so.reference4.contains('БЕРГ Холдинг м')||
so.reference4.contains('КОМПЛЕКТСНАБАВТО')||
so.reference4.contains('Техника Поволжья')||
so.reference4.contains('Техногазавто')||
so.reference4.contains('Трейдинг Транзит')||
so.reference4.contains('ТРЕЙДИНГ ТРАНЗИТ')||
so.reference4.contains('Ф.А. Логистик')||
so.reference4.contains('Эксист-закупка   М ЭДО (Н И)')||
so.reference4.contains('А.П.Р')||
so.reference4.contains('АвтоСВ')||
so.reference4.contains('Автостэлс')||
so.reference4.contains('ЮРАЛ')||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='41940'||
so.reference10=='83790'||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
so.reference4.startsWith('СОЛУ')||
so.reference10=='И5143'||
so.reference10=='А0266'||
so.reference10=='Л0818'||
so.reference10=='В0296'||
so.reference10=='Л8980'||
so.reference10=='М0285'||
so.reference10=='39061'||
so.reference10=='В7679'||
so.reference10=='М0180'||
so.reference4.contains('Вайлдберриз')||
so.reference10=='Й8369'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.getComments('CLIENTTER').size() > 0 ||
(so.getComments('SO_CONTROL_PACK').size() > 0 && so.getComments('SO_CONTROL_PACK').get(0).equals('Доставка ТК'))||
so.getType()=='00558' ||
( so.reference10=='НЕТОР' && so.getType()=='00041')||
so.reference10=='Б3547'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695')



//НЕ Клиент на территории

//Было
so.getComments('CLIENTTER').size() > 0&&
(so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4=='РТАООО(Рябиновая)'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')



//Стало
so.getComments('CLIENTTER').size() > 0&&
(so.reference10=='Л2924'||
so.reference10=='Н5497'||
so.reference10=='А3762')



//Пр. КЕТЧЕРСКАЯ,АВТОСПЕЙС,ВЕШНЯКИ,МКАД-6,ПОДОЛЬСК,ТУЛА,ПЕРМЬ,ЕКБ,СТО,УФА,ИЖЕВСК,ПРОЛЕТАРКА

//Было

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
so.reference4=='ПРОЛЕТАРКА (покупатель)')


//Стало


so.getType()=='00558'&&
(so.reference10=='48232'||
so.reference10=='П7268'||
so.reference10=='В7546'||
so.reference10=='В7546'||
so.reference4.contains('МКАД-6 ООО')||
so.reference10=='34134'||
so.reference10=='Л6330'||
so.reference10=='62183'||
so.reference10=='Б5681'||
so.reference10=='64380'||
so.reference10=='Ж2743'||
so.reference10=='П3807'||
so.reference10=='07531'||
so.reference10=='А0749')



//Зона Контроля KNT

//Клиент на территории


//Было

so.getComments('CLIENTTER').size() > 0&&
!(so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference4=='РТАООО(Рябиновая)'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')


//Стало

so.getComments('CLIENTTER').size() > 0&&
!(so.reference10=='Л2924'||
so.reference4.contains('АЛЬФА   ООО (БН-Люберцы)')||
so.reference10=='Н5497'||
so.reference10=='А3762')


//Стол Контроля 16	

//Неторговые операции (Отпуск на сборку)


//Было
so.reference4=='Неторговые операции' && so.getType()=='00041'


//Стало
so.reference10=='НЕТОР' && so.getType()=='00041'


//Стол Контроля 06
//Белоусов С.В и Гудков

//Было

so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'

//Стало

so.reference10=='Л2924'||
so.reference10=='А3762'

//Зона Контроля 11-2	

//Рябиновая

//было

so.reference4=='РТАООО(Рябиновая)'

//Стало

so.reference10=='Н5497'


//Зона Контроля 03-1	
//Зона Контроля 03-2
//Зона Контроля 03-3

//Исключения Дост-ки ТК- Резину,Ангар,Консоль,Улицу,Стекло,Негабарит,Тандер,Перемещения под пр.	


//было

!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='Гонежук Эдуард Заурбиевич ИП (ЕГ) (ЭДО)'||
so.reference4=='ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX'||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
so.reference4.startsWith('СОЛУ')||
so.reference4=='МРТС АО (Безнал Варшавка)'||
so.reference4=='МГТС ПАО (Тендер)'||
so.reference4=='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'||
so.reference4=='МРТС Терминал (Арсенал-Нов.ОПТ)	'||
so.reference4=='Рудник Валунистый ООО Тендер'||
so.reference4=='Базовые металлы АО Тендер'||
so.reference4=='Техника Поволжья ООО (Волга) (АГЕ_Вцо)'||
so.reference4=='Ипполитова И. А. ИП (БН-Люберцы)'||
so.reference4=='Ново-Широкинский рудник АО Тендер'||
so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)'||
so.getType()=='00558')




//Стало

!isInvsContainsGroup(s,invKeys,'Резина big')&&
!isInvsContainsGroup(s,invKeys,'Резина small')&&
!getTasksContainZonesCount(s,so,invKeys,['Консоли'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Ангар'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Улица'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['Стекло'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['НЕГАБАРИТ'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['NS склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['PAV склад'])==1&&
!getTasksContainZonesCount(s,so,invKeys,['DS склад'])==1&&
!(so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('Эмекс')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference10=='Е9816'||
so.reference10=='41940'||
so.reference10=='83790'||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
so.reference4.startsWith('СОЛУ')||
so.reference10=='И5143)'||
so.reference10=='А0266'||
so.reference10=='Л0818'||
so.reference10=='В0296'||
so.reference10=='Л8980'||
so.reference10=='М0285'||
so.reference10=='В7679'||
so.reference10=='39061'||
so.reference10=='М0180'||
so.reference10=='Б3547'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695'||
so.getType()=='00558')


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
so.reference10=='41940'||
so.reference10=='83790'||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
so.reference10=='Б3547'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695'



//Мелкий заказ
//было

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
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
!(so.reference10=='Б3547'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695') &&
! (so.getType()=='00560' &&
so.reference10=='48232')





//Зона Контроля 02-2

//Мелкий заказ и Интернет или ВБ


//Было

so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType().startsWith('MSK')
so.getType()=='MKPLCBERU'||
so.reference4.contains('Вайлдберриз')||
!(so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('Эмекс')||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX'||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
( so.reference4=='Неторговые операции' && so.getType()=='00041'))&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')
&&!(so.reference4=='Евротранс (старый опт)'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference4=='Евротранс (МАЗ)'
)&&
! (so.getType()=='00560' &&
so.reference4=='КЕТЧЕРСКАЯ транзит')



//Стало


so.getType().startsWith('DELIVE')||
so.getType().startsWith('PICK')||
so.getType().startsWith('LOCKER')||
so.getType().startsWith('STO')||
so.getType().startsWith('VENDO')||
so.getType().startsWith('MSK')
so.getType()=='MKPLCBERU'||
so.reference4.contains('Вайлдберриз')||
!(so.reference4.contains('ТЕНДЕР')||
so.reference4.contains('А.П.Р.') ||
so.reference4.contains('А.П.Р') ||
so.reference4.contains('Эмекс')||
so.reference4.contains('КОЛОМНА-розница')||
so.reference4.contains('ТУЛА (малая розница)')||
so.reference4.contains('Перово транзит')||
so.reference4.contains('НЕКРАСОВКА транзит')||
so.reference4.contains('Emex.RU')||
so.reference4.contains('КЕНТАВР МЛК  У/  (Н И)')||
so.reference4.contains('ГСП-2')||
so.reference4.contains('НТ Сервис ООО (Варшавка Новый Опт)')||
so.reference4.contains('СВАРОГ')||
so.reference4.contains('Дальзапчасть')||
so.reference4.contains('Козлов Сергей Витальевич')||
so.reference4=='ПАСКЕР ЛТД ООО (ТПС) - ЭДО дилер MX'||
so.reference4=='Федотов Р.Е. ИП (Борисов)'||
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
(so.reference10=='НЕТОР' && so.getType()=='00041'))&&
(orderedQty<'100' && lineCount<'30' && volume<'0.096')
&&!(so.reference10=='Б3547'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695'
)&&
! (so.getType()=='00560' &&
so.reference10=='48232')


//Средний заказ


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
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
(so.reference10=='НЕТОР' && so.getType()=='00041'))&&
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
!(so.reference10=='Б3547'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695') &&
! (so.getType()=='00560' &&
so.reference10=='48232')





//Крупный заказ

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
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
(so.reference4.startsWith('Ремдизель') && so.reference4.contains('Б/Н-Люберцы'))||
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
(so.reference10=='НЕТОР' && so.getType()=='00041'))&&
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
!(so.reference10=='Б3547'||
so.reference4=='Евротранс (MEGAPOWER ) старый опт'||
so.reference10=='23695') &&
! (so.getType()=='00560' &&
so.reference10=='48232')



// fileProcessed

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='В7546'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='БАРТ'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='75598'




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='Дмитровка-ОПТ'




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='34154'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.getComments('GEOZONE').size() > 0 &&
hiLog.soH.getComments('GEOZONE').get(0).startsWith('№4_Юг')&&
hiLog.soH.getComments('DELIVERITYPE').size() > 0 &&
(hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('1.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('2.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('3.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('4.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('8.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('Возврат поставщику')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('Возврат поставщику через ТК ')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('Забор у поставщика'))&&
!(hiLog.soH.type=='00560'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00101'||
hiLog.soH.type=='00027'||
hiLog.soH.getType().startsWith('DELIVE')||
hiLog.soH.getType().startsWith('PICK')||
hiLog.soH.getType().startsWith('LOCKER')||
hiLog.soH.getType().startsWith('STO')||
hiLog.soH.getType().startsWith('VENDO')||
hiLog.soH.getType().startsWith('MKPLCBERU')||
hiLog.soH.getType().startsWith('MSK')||
hiLog.soH.reference4=='САБУРОВО (покупатель)')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.getComments('GEOZONE').size() > 0 &&
hiLog.soH.getComments('GEOZONE').get(0).startsWith('№4_Юг')&&
hiLog.soH.getComments('DELIVERITYPE').size() > 0 &&
(hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('1.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('2.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('3.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('4.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('8.')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('Возврат поставщику')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('Возврат поставщику через ТК ')||
hiLog.soH.getComments('DELIVERITYPE').get(0).startsWith('Забор у поставщика'))&&
!(hiLog.soH.type=='00560'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00101'||
hiLog.soH.type=='00027'||
hiLog.soH.getType().startsWith('DELIVE')||
hiLog.soH.getType().startsWith('PICK')||
hiLog.soH.getType().startsWith('LOCKER')||
hiLog.soH.getType().startsWith('STO')||
hiLog.soH.getType().startsWith('VENDO')||
hiLog.soH.getType().startsWith('MKPLCBERU')||
hiLog.soH.getType().startsWith('MSK')||
hiLog.soH.reference10=='06944')


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='КЕТЧЕРСКАЯ транзит'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='48232'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00558'&&
hiLog.soH.reference4=='КЕТЧЕРСКАЯ транзит'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00558'&&
hiLog.soH.reference10=='48232'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00101'&&
hiLog.soH.reference4=='КЕТЧЕРСКАЯ транзит'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00101'&&
hiLog.soH.reference10=='48232'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='КОЛОМНА-розница'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='М4607'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='КОЛОМНА-розница'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='М4607'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='Кожухово'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='43188'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
(hiLog.soH.reference4=='КРАСНАЯ ГОРКА транзит'||
hiLog.soH.reference4=='НЕКРАСОВКА транзит'||
hiLog.soH.reference4.contains('БРАТИСЛАВСКАЯ')||
hiLog.soH.reference4=='Перово транзит'||
hiLog.soH.reference4=='Октябрьский магазин транзит')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
(hiLog.soH.reference10=='Е8045'||
hiLog.soH.reference10=='М6025'||
hiLog.soH.reference10=='Й3717'||
hiLog.soH.reference10=='Й2962'||
hiLog.soH.reference10=='Ж4338')


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
(hiLog.soH.reference4=='КРАСНОГОРСК'||
hiLog.soH.reference4=='КРАСНОГОРСК СТО (покупатель)')

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
(hiLog.soH.reference10=='Б1279'||
hiLog.soH.reference10=='Б5681')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00558'&&
hiLog.soH.reference4=='Люберцы-ОПТ'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00558'&&
hiLog.soH.reference4=='28175'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00560'&&
hiLog.soH.reference4=='Люберцы-ОПТ'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00560'&&
hiLog.soH.reference10=='28175'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='МКАД-6 ООО (МКАД 6км,д.3.) (Тайм)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='79364'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='МКАД-6 ООО (ул.Реутовская,19А) (Тайм)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='79365'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference4=='Нефтекамск ТРАНЗИТ'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference10=='П3807'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='Нижний НОВЫЙ-ОПТ'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='И6535'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='ПЕРМЬ НОВАЯ'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='Н8370'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558')&&
hiLog.soH.reference4=='ПЕРМЬ НОВАЯ'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558')&&
hiLog.soH.reference10=='Н8370'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='Подольск (М)'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='34134'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='ПРОЛЕТАРКА (покупатель)'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='А0749'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='РЯБИНОВАЯ-ОПТ'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='Б5336'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00090'||
hiLog.soH.type=='00667')&&
hiLog.soH.reference4=='САБУРОВО (покупатель)'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00090'||
hiLog.soH.type=='00667')&&
hiLog.soH.reference10=='06944'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='Щелково'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='И4353'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='ТУЛА (малая розница)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='Л6330'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558')&&
hiLog.soH.reference4=='ТУЛА (малая розница)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558')&&
hiLog.soH.reference10=='Л6330'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00560'&&
(hiLog.soH.reference4=='Авто-Альянс (Уфа)'||
hiLog.soH.reference4=='Авто-Альянс (Уфа 2)'||
hiLog.soH.reference4=='Ижевск  (Уфа 3)'||
hiLog.soH.reference4=='Нефтекамск ТРАНЗИТ')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00560'&&
(hiLog.soH.reference10=='64380'||
hiLog.soH.reference10=='Ж2743'||
hiLog.soH.reference10=='07531'||
hiLog.soH.reference10=='П3807')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference4=='Авто-Альянс (Уфа)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference10=='64380'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference4=='Авто-Альянс (Уфа 2)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference10=='Ж2743'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference4=='Ижевск  (Уфа 3)'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
 hiLog.soH.type=='00558')&&
hiLog.soH.reference10=='07531'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='ВЕШНЯКИ'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='49123'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00562'||
hiLog.soH.type=='00639'||
hiLog.soH.type=='00641'||
hiLog.soH.type=='00640')&&
(hiLog.soH.reference4=='Авто-Альянс (Уфа)'||
hiLog.soH.reference4=='АВТОСПЕЙС ООО'||
hiLog.soH.reference4=='БАРТ'||
hiLog.soH.reference4=='ВЕШНЯКИ'||
hiLog.soH.reference4=='Дмитровка-ОПТ'||
hiLog.soH.reference4=='ЗИЛ Опт(М)'||
hiLog.soH.reference4=='КЕТЧЕРСКАЯ транзит'||
hiLog.soH.reference4=='Кожухово'||
hiLog.soH.reference4=='КРАСНОГОРСК'||
hiLog.soH.reference4=='Люберцы-ОПТ'||
hiLog.soH.reference4=='Марусино (бывшая М3)'||
hiLog.soH.reference4=='МАРУСИНО ХРАНЕНИЕ'||
hiLog.soH.reference4=='МКАД-6 ООО (МКАД 6км,д.3.)'||
hiLog.soH.reference4=='МКАД-6 ООО (ул.Реутовская,19А)'||
hiLog.soH.reference4=='Нижний НОВЫЙ-ОПТ'||
hiLog.soH.reference4=='Подольск (М)'||
hiLog.soH.reference4=='ПРОЛЕТАРКА (покупатель)'||
hiLog.soH.reference4=='РЯБИНОВАЯ-ОПТ'||
hiLog.soH.reference4=='Щелково')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00562'||
hiLog.soH.type=='00639'||
hiLog.soH.type=='00641'||
hiLog.soH.type=='00640')&&
(hiLog.soH.reference10=='64380'||
hiLog.soH.reference10=='В7546'||
hiLog.soH.reference10=='75598'||
hiLog.soH.reference10=='49123'||
hiLog.soH.reference10=='34154'||
hiLog.soH.reference10=='10591'||
hiLog.soH.reference10=='48232'||
hiLog.soH.reference10=='43188'||
hiLog.soH.reference10=='Б1279'||
hiLog.soH.reference10=='28175'||
hiLog.soH.reference10=='И2273'||
hiLog.soH.reference10=='Г5125'||
hiLog.soH.reference10=='79364'||
hiLog.soH.reference10=='79365'||
hiLog.soH.reference10=='И6535'||
hiLog.soH.reference10=='34134'||
hiLog.soH.reference10=='А0749'||
hiLog.soH.reference10=='Б5336'||
hiLog.soH.reference10=='И4353')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00560'&&
hiLog.soH.reference4=='Авто-Альянс (Екатеринбург)'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.type=='00560'&&
hiLog.soH.reference10=='62183'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558')&&
hiLog.soH.reference4=='Авто-Альянс (Екатеринбург)'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558')&&
hiLog.soH.reference10=='62183'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference4=='ЗИЛ Опт(М)'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='10591'




// авто отправки
//Клиент на территории

//было

((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
obj.pickingAllowed == 1 &&
!(obj.getType()=='00090'||
obj.getType()=='00076'||
obj.getType()=='00558'||
obj.getType()=='00322'||
obj.getType()=='00560'||
obj.getType()=='00667'||
obj.getType()=='00101')&&
obj.reference4!='Белоусов С.В. ИП (МАЗ) ЭДО'&&
obj.reference4!='АЛЬФА   ООО (БН-Люберцы)'&&
obj.reference4!='РТАООО(Рябиновая)'&&
obj.reference4!='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'




//стало

((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
obj.pickingAllowed == 1 &&
!(obj.getType()=='00090'||
obj.getType()=='00076'||
obj.getType()=='00558'||
obj.getType()=='00322'||
obj.getType()=='00560'||
obj.getType()=='00667'||
obj.getType()=='00101')&&
obj.reference10!='Л2924'&&
obj.reference10!='Л6666'&&
obj.reference10!='Н5497'&&
obj.reference10!='А3762'



//Клиент на территории 290 метод

//было

((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
obj.pickingAllowed == 1 &&
(obj.reference4 =='Белоусов С.В. ИП (МАЗ) ЭДО'||
obj.reference4 =='АЛЬФА   ООО (БН-Люберцы)'||
obj.reference4=='РТАООО(Рябиновая)'||
obj.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')


//стало

((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
obj.pickingAllowed == 1 &&
(obj.reference10 =='Л2924'||
obj.reference10 =='Л6666'||
obj.reference10=='Н5497'||
obj.reference10=='А3762')





//4 Очередь


//было


(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
((obj.getType() == '00560' && !
(obj.reference4 == 'ЗИЛ Опт(М)' ||
obj.reference4 == 'Люберцы-ОПТ' ||
obj.reference4 == 'Нефтекамск ТРАНЗИТ' ||
obj.reference4 == 'КЕТЧЕРСКАЯ транзит' ||
obj.reference4.startsWith('ПЕРМЬ') ||
obj.reference4 == 'НОВОСИБИРСК' ||
obj.reference4 == 'Авто-Альянс (Уфа)' ||
obj.reference4 == 'Авто-Альянс (Екатеринбург)')) ||
obj.getType() == '00459' ||
obj.getType() == '00387') &&
obj.pickingAllowed == 1 &&
((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))





//стало


(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
((obj.getType() == '00560' && !
(obj.reference10 == '10591' ||
obj.reference10 == '28175' ||
obj.reference10 == 'П3807' ||
obj.reference10 == '48232' ||
obj.reference4.startsWith('ПЕРМЬ') ||
obj.reference10 == 'Й5126' ||
obj.reference10 == '64380' ||
obj.reference10 == '62183')) ||
obj.getType() == '00459' ||
obj.getType() == '00387') &&
obj.pickingAllowed == 1 &&
((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))


// LP Combined	

//Транспортная этикетка А4_Вторичка	


// было

!lp.soH.type.startsWith('PICK')&&
!lp.soH.type.startsWith('DELIVE')&&
!lp.soH.type.startsWith('LOCKER')&&
!lp.soH.type.startsWith('MSK')&&
!lp.soH.type.startsWith('STO')&&
!lp.soH.type.startsWith('MKPLCBERU')&&
!lp.soH.type.startsWith('Интернет Решения (Н И)')&&
lp.soH.type!='00076'&&
lp.soH.type!='00558'&&
lp.soH.type!='00664'&&
!lp.soH.reference4.contains('ТЕНДЕР')&&
lp.soH.reference4!='ИнтерТехСервис ООО(ТЕНДЕР)'&& // Е1424
lp.soH.reference4!='ГСП-2 ООО (безнал варшавка)'&& // Й1138
lp.soH.reference4!='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'&& //Л0818
lp.soH.reference4!='Козлов Сергей Витальевич ИП'&& //00778
lp.soH.reference4!='Козлов Сергей Витальевич ИП (Арсенал-Альянс)'&& //50778
lp.soH.reference4!='Федотов Р.Е. ИП (Борисов)'&& //83790
lp.soH.reference10!='О7266'&&
!lp.soH.reference4.contains('МРТС')&&
!lp.soH.reference4.contains('Ремдизель')&&
!lp.soH.reference4.startsWith('СОЛУ')&&
lp.soH.reference4!='Сургутнефтегаз ОАО(ТЕНДЕР)'&& //В1012
((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')




// стало

!lp.soH.type.startsWith('PICK')&&
!lp.soH.type.startsWith('DELIVE')&&
!lp.soH.type.startsWith('LOCKER')&&
!lp.soH.type.startsWith('MSK')&&
!lp.soH.type.startsWith('STO')&&
!lp.soH.type.startsWith('MKPLCBERU')&&
!lp.soH.type.startsWith('Интернет Решения (Н И)')&&
lp.soH.type!='00076'&&
lp.soH.type!='00558'&&
lp.soH.type!='00664'&&
!lp.soH.reference4.contains('ТЕНДЕР')&&
lp.soH.reference10!='Е1424'&&
lp.soH.reference10!='Й1138'&&
lp.soH.reference10!='Л0818'&&                
lp.soH.reference10!='00778'&&
lp.soH.reference10!='50778'&&
lp.soH.reference10!='М0788'&&
lp.soH.reference10!='83790'&&
lp.soH.reference10!='О7266'&&
!lp.soH.reference4.contains('МРТС')&&
!lp.soH.reference4.contains('Ремдизель')&&
!lp.soH.reference4.startsWith('СОЛУ')&&
lp.soH.reference10!='В1012'&&
((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')


//Транспортная этикетка А4

// было


!lp.soH.type.startsWith('PICK')&&
!lp.soH.type.startsWith('DELIVE')&&
!lp.soH.type.startsWith('LOCKER')&&
!lp.soH.type.startsWith('MSK')&&
!lp.soH.type.startsWith('STO')&&
!lp.soH.type.startsWith('MKPLCBERU')&&
!lp.soH.type.startsWith('Интернет Решения (Н И)')&&
lp.soH.type!='00076'&&
lp.soH.type!='00558'&&
lp.soH.type!='00664'&&
!lp.soH.reference4.contains('ТЕНДЕР')&&
lp.soH.reference4!='ИнтерТехСервис ООО(ТЕНДЕР)'&&
lp.soH.reference4!='ГСП-2 ООО (безнал варшавка)'&&
lp.soH.reference4!='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'&&
lp.soH.reference4!='Козлов Сергей Витальевич ИП'&&
lp.soH.reference4!='Козлов Сергей Витальевич ИП (Арсенал-Альянс)'&&
lp.soH.reference4!='Федотов Р.Е. ИП (Борисов)'&&
lp.soH.reference10!='О7266'&&
!lp.soH.reference4.contains('МРТС')&&
!lp.soH.reference4.contains('Ремдизель')&&
!lp.soH.reference4.startsWith('СОЛУ')&&
lp.soH.reference4!='Сургутнефтегаз ОАО(ТЕНДЕР)'&&
!((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')




// Стало

!lp.soH.type.startsWith('PICK')&&
!lp.soH.type.startsWith('DELIVE')&&
!lp.soH.type.startsWith('LOCKER')&&
!lp.soH.type.startsWith('MSK')&&
!lp.soH.type.startsWith('STO')&&
!lp.soH.type.startsWith('MKPLCBERU')&&
!lp.soH.type.startsWith('Интернет Решения (Н И)')&&
lp.soH.type!='00076'&&
lp.soH.type!='00558'&&
lp.soH.type!='00664'&&
!lp.soH.reference4.contains('ТЕНДЕР')&&
lp.soH.reference10!='Е1424'&&
lp.soH.reference10!='Й1138'&&
lp.soH.reference10!='Л0818'&&
lp.soH.reference10!='00778'&&
lp.soH.reference10!='50778'&&
lp.soH.reference10!='83790'&&
lp.soH.reference10!='О7266'&&
!lp.soH.reference4.contains('МРТС')&&
!lp.soH.reference4.contains('Ремдизель')&&
!lp.soH.reference4.startsWith('СОЛУ')&&
lp.soH.reference10!='В1012'&&
!((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')




//Транспортная этикетка А4 Тендер

//было

lp.soH.type=='00076'||
lp.soH.reference4.contains('ТЕНДЕР')||
lp.soH.reference4=='ИнтерТехСервис ООО(ТЕНДЕР)'||
lp.soH.reference4=='МРТС АО (Безнал Варшавка)'||
lp.soH.reference4=='ГСП-2 ООО (безнал варшавка)'||
lp.soH.reference4=='МРТС-Строймонтаж (Арсенал-Нов.ОПТ)'||
lp.soH.reference4=='Сургутнефтегаз ОАО(ТЕНДЕР)'||
lp.soH.reference4=='Козлов Сергей Витальевич ИП'||
lp.soH.reference4=='Козлов Сергей Витальевич ИП (Арсенал-Альянс)'||
lp.soH.reference4=='Федотов Р.Е. ИП (Борисов)'||
lp.soH.reference4.contains('Ремдизель')||
lp.soH.reference4.startsWith('СОЛУ')



//стало

lp.soH.type=='00076'||
lp.soH.reference4.contains('ТЕНДЕР')||
lp.soH.reference10=='Е1424'||
lp.soH.reference10=='И5143'||
lp.soH.reference10=='Й1138'||
lp.soH.reference10=='Л0818'||
lp.soH.reference10=='В1012'||
lp.soH.reference10=='00778'||
lp.soH.reference10=='50778'||
lp.soH.reference10=='83790'||
lp.soH.reference4.contains('Ремдизель')||
lp.soH.reference4.startsWith('СОЛУ')




//Транспортная этикетка А4 (перемещение под продажу)


//было

(lp.soH.type=='00558' || 
lp.soH.type=='00664')&&
!(lp.soH.reference4=='КЕТЧЕРСКАЯ транзит'||
lp.soH.reference4=='АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)'||
lp.soH.reference4=='ВЕШНЯКИ'||
lp.soH.reference4.contains('МКАД-6 ООО')||
lp.soH.reference4=='Подольск (М)'||
lp.soH.reference4=='ТУЛА (малая розница)'||
lp.soH.reference4=='Авто-Альянс (Екатеринбург)'||
lp.soH.reference4=='КРАСНОГОРСК СТО (покупатель)'||
lp.soH.reference4=='Авто-Альянс (УФА)'||
lp.soH.reference4=='Авто-Альянс (Уфа)'||
lp.soH.reference4=='Авто-Альянс (Уфа 2)'||
lp.soH.reference4=='Ижевск  (Уфа 3)'||
lp.soH.reference4=='ПРОЛЕТАРКА (покупатель)')



//стало

(lp.soH.type=='00558' || 
lp.soH.type=='00664')&&
!(lp.soH.reference10=='48232'||
lp.soH.reference10=='В7546'||
lp.soH.reference10=='49123'||
lp.soH.reference4.contains('МКАД-6 ООО')||
lp.soH.reference4=='Подольск (М)'||
lp.soH.reference10=='Л6330'||
lp.soH.reference10=='62183'||
lp.soH.reference10=='Б5681'||
lp.soH.reference10=='64380'||
lp.soH.reference10=='Ж2743'||
lp.soH.reference10=='07531'||
lp.soH.reference10=='А0749')




//Транспортная этикетка А4_Вторичка Продажки

//было

(lp.soH.type=='00558' || 
lp.soH.type=='00664')&&
(lp.soH.reference4=='КЕТЧЕРСКАЯ транзит'||
lp.soH.reference4=='АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)'||
lp.soH.reference4=='ВЕШНЯКИ'||
lp.soH.reference4.contains('МКАД-6 ООО')||
lp.soH.reference4=='Подольск (М)'||
lp.soH.reference4=='ТУЛА (малая розница)'||
lp.soH.reference4=='Авто-Альянс (Екатеринбург)'||
lp.soH.reference4=='КРАСНОГОРСК СТО (покупатель)'||
lp.soH.reference4=='Авто-Альянс (УФА)'||
lp.soH.reference4=='Авто-Альянс (Уфа)'||
lp.soH.reference4=='Авто-Альянс (Уфа 2)'||
lp.soH.reference4=='Ижевск  (Уфа 3)'||
lp.soH.reference4=='ПРОЛЕТАРКА (покупатель)')&&
((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')



//стало

(lp.soH.type=='00558' || 
lp.soH.type=='00664')&&
(lp.soH.reference10=='48232'||
lp.soH.reference10=='В7546'||
lp.soH.reference10=='49123'||
lp.soH.reference4.contains('МКАД-6 ООО')||
lp.soH.reference4=='Подольск (М)'||
lp.soH.reference10=='Л6330'||
lp.soH.reference10=='62183'||
lp.soH.reference10=='Б5681'||
lp.soH.reference10=='64380'||
lp.soH.reference10=='Ж2743'||
lp.soH.reference10=='07531'||
lp.soH.reference10=='А0749')&&
((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')


//Транспортная этикетка А4 Продажки

//было

(lp.soH.type=='00558' || 
lp.soH.type=='00664')&&
(lp.soH.reference4=='КЕТЧЕРСКАЯ транзит'||
lp.soH.reference4=='АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)'||
lp.soH.reference4=='ВЕШНЯКИ'||
lp.soH.reference4.contains('МКАД-6 ООО')||
lp.soH.reference4=='Подольск (М)'||
lp.soH.reference4=='ТУЛА (малая розница)'||
lp.soH.reference4=='Авто-Альянс (Екатеринбург)'||
lp.soH.reference4=='КРАСНОГОРСК СТО (покупатель)'||
lp.soH.reference4=='Авто-Альянс (УФА)'||
lp.soH.reference4=='Авто-Альянс (Уфа)'||
lp.soH.reference4=='Авто-Альянс (Уфа 2)'||
lp.soH.reference4=='Ижевск  (Уфа 3)'||
lp.soH.reference4=='ПРОЛЕТАРКА (покупатель)')&&
!((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')



//стало

(lp.soH.type=='00558' || 
lp.soH.type=='00664')&&
(lp.soH.reference10=='48232'||
lp.soH.reference10=='В7546'||
lp.soH.reference10=='49123'||
lp.soH.reference4.contains('МКАД-6 ООО')||
lp.soH.reference4=='Подольск (М)'||
lp.soH.reference10=='Л6330'||
lp.soH.reference10=='62183'||
lp.soH.reference10=='Б5681'||
lp.soH.reference10=='64380'||
lp.soH.reference10=='Ж2743'||
lp.soH.reference10=='07531'||
lp.soH.reference10=='А0749')&&
!((lp.palletType=='V'&&lp.volume<'16000')||
lp.palletType=='849093'||
lp.palletType=='849095')




//Упаковочный лист A4 Томилино

//было
lp.soH.reference4=='Томилино ТРАНЗИТ'


//стало
lp.soH.reference10=='П5132'



//Упаковочный лист А4	

//было
lp.soH.reference4.contains('Ремдизель')||
lp.soH.reference4.startsWith('СОЛУ')||
lp.soH.reference4=='Министерство Обороны РФ (ТЕНДЕР)'||
lp.soH.reference4=='Управление Черноморского флота (ТЕНДЕР)'||
lp.soH.reference4=='Газстройпром АО (ТЕНДЕР)'||
lp.soH.reference4=='СТНГ АО (ТЕНДЕР)'||
lp.soH.reference4=='ГСП-1 ООО (ТЕНДЕР)'||
lp.soH.reference4=='ГСП-2 ООО (БН-Варшавка)'


//стало
lp.soH.reference4.contains('Ремдизель')||
lp.soH.reference4.startsWith('СОЛУ')||
lp.soH.reference10=='В4945'||
lp.soH.reference10=='О8253'||
lp.soH.reference10=='Н4383'||
lp.soH.reference10=='В6780'||
lp.soH.reference10=='Л3659'||
lp.soH.reference10=='Й1138'



