obj.pickingAllowed == 1 &&

    (obj.getType() == '00269' ||
        obj.getType() == '00382' ||
        obj.getType() == '00248' ||
        obj.getType() == '00562' ||
        obj.getType() == '00641' ||
        obj.getType() == '00639' ||
        obj.getType() == '00706' ||
        obj.getType() == '00047' ||
        obj.getType() == '00561' ||
        obj.getType() == '00104' ||
        obj.getType() == '00027' ||
        obj.getType() == '00384' ||
        obj.getType() == '00640') &&
    obj.pickingAllowed == 1 &&
    ((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
        (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))




(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType() == '00269' ||
    obj.getType() == '00382' ||
    obj.getType() == '00248' ||
    obj.getType() == '00562' ||
    obj.getType() == '00641' ||
    obj.getType() == '00639' ||
    obj.getType() == '00706' ||
    obj.getType() == '00047' ||
    obj.getType() == '00561' ||
    obj.getType() == '00104' ||
    obj.getType() == '00027' ||
    obj.getType() == '00384' ||
    obj.getType() == '00640') &&
obj.pickingAllowed == 1 &&
    ((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
        (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))




        
        
        "obj.reference9=='Сабурово прод'&&
         !obj.reference9=='Кетчерская прод'"
        
        transport.reference9!='Сабурово прод'

        "obj.reference9=='Сабурово прод'"
        "obj.reference9!='Сабурово прод'"

        "obj.reference9=='Сабурово прод'"&&
        "!obj.reference9=='Кетчерская прод'"


        (obj.dueDate != null)&&
         (hours_between(c2d(obj.dueDate), now(0)) < 120) &&
         (obj.getType().startsWith('PICK')||
         obj.getType().startsWith('DELIVE')||
         obj.getType().startsWith('STO')||
         obj.getType().startsWith('VENDO')||
         obj.getType().startsWith('LOCKER')||
         obj.getType()=='MSKSPBCDE'||
         obj.getType()=='MKPLCBERU'||
         obj.getType()=='00067'||
         obj.getType()=='00624'||
         obj.getType()=='00500'||
         obj.getType()=='00676'||
		 obj.getType()=='00702'||
         obj.getType()=='00235')&&
         obj.pickingAllowed == 1 &&
         ((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) || 
         (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))


         (obj.dueDate != null)&&
         (hours_between(c2d(obj.dueDate), now(0)) < 120) &&
         (obj.getType().startsWith('PICK')||
         obj.getType().startsWith('DELIVE')||
         obj.getType().startsWith('STO')||
         obj.getType().startsWith('VENDO')||
         obj.getType().startsWith('LOCKER')||
         obj.getType()=='MSKSPBCDE'||
         obj.getType()=='MKPLCBERU'||
         obj.getType()=='00067'||
         obj.getType()=='00624'||
         obj.getType()=='00500'||
         obj.getType()=='00235')&&
         obj.pickingAllowed == 1 &&
         ((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) ||
         (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))


         (obj.dueDate != null)&&
         (hours_between(c2d(obj.dueDate), now(0)) < 12) &&
         ((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
         (obj.wave != null && obj.wave.planning == 0 && 
        !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
         obj.pickingAllowed == 1 &&
         !(obj.getType()=='00090'||
         obj.getType()=='00076'||
         obj.getType()=='00558'||
         obj.getType()=='00322'||
         obj.getType()=='00560'||
         obj.getType()=='00667'||
         obj.getType()=='00101')


         (obj.dueDate != null)&&
         (hours_between(c2d(obj.dueDate), now(0)) < 12) &&
         ((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
         (obj.wave != null && obj.wave.planning == 0 &&
         !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
         obj.pickingAllowed == 1 &&
         !(obj.getType()=='00090'||
         obj.getType()=='00076'||
         obj.getType()=='00558'||
         obj.getType()=='00322'||
         obj.getType()=='00560'||
         obj.getType()=='00667'||
         obj.getType()=='00101')

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
hiLog.soH.reference7=='06. Клиент ко времени (без упаковки)'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
hiLog.soH.reference7=='07. Клиент на территории (без упаковки)'


'08. Клиент на территории (без упаковки)'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
(hiLog.soH.reference7=='06. Клиент ко времени (без упаковки)' ||
hiLog.soH.reference7=='07. Клиент на территории (без упаковки)' ||
hiLog.soH.reference7=='08. Клиент на территории (без упаковки)')



'06. Клиент ко времени (без упаковки)'	   //CLIENTIME
'07. Клиент ко времени (с упаковкой)'       //CLIENTUPAK
'08. Клиент на территории (без упаковки)'	  // CLIENTTER




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
(hiLog.soH.reference7=='06. Клиент ко времени (без упаковки)'||
hiLog.soH.reference7=='07. Клиент ко времени (с упаковкой)') 


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
hiLog.soH.reference7=='08. Клиент ко времени на сегодня (с упаковкой)')


06. Клиент ко времени на сегодня (без упаковки)


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
hiLog.soH.reference7=='08. Клиент ко времени на сегодня (с упаковкой)' ||
hiLog.soH.reference7=='09. Клиент на территории (без упаковки)')


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
hiLog.soH.reference7=='08. Клиент ко времени на сегодня (с упаковкой)'||
hiLog.soH.reference7== '07. Самовывоз на завтра (без упаковки)')


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.reference7=='05. Самовывоз на завтра (с упаковкой)'&&
hiLog.soH.transport == null&&
!(hiLog.soH.type=='00560'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00101'||
hiLog.soH.reference4=='КОЛОМНА-розница'||
hiLog.soH.reference4=='САБУРОВО (покупатель)')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
hiLog.soH.reference7=='08. Клиент ко времени на сегодня (с упаковкой)'||
hiLog.soH.reference7== '07. Самовывоз на завтра (без упаковки)')


07. Самовывоз на завтра (без упаковки)'

07. Самовывоз  на завтра (без упаковки)




'07. Самовывоз  на завтра (без упаковки)'// было
'07. Самовывоз на завтра (без упаковки)' // стало


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
hiLog.soH.reference7== '07. Самовывоз на завтра (без упаковки)')


(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType()=='00269'||
obj.getType()=='00382'||
obj.getType()=='00248'||
obj.getType()=='00562'||
obj.getType()=='00641'||
obj.getType()=='00639'||
obj.getType()=='00706'||
obj.getType()=='00047'||
obj.getType()=='00561'||
obj.getType()=='00104'||
obj.getType()=='00027'||
obj.getType()=='00384'||
obj.getType()=='00640')&&
obj.pickingAllowed == 1 
((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) || 
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))&&
!(obj.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
obj.reference7== '07. Самовывоз на завтра (без упаковки)'||
obj.reference7=='09. Клиент на территории (без упаковки)')


!(obj.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
obj.reference7== '07. Самовывоз на завтра (без упаковки)'||
obj.reference7=='09. Клиент на территории (без упаковки)')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
hiLog.soH.reference7=='07. Самовывоз на завтра (без упаковки)'

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
hiLog.soH.reference7 == '07. Самовывоз на завтра (без упаковки)'
                        '07. Самовывоз на завтра (без упаковки)'  

coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
(hiLog.soH.reference7=='07. Самовывоз  на завтра (без упаковки)')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
hiLog.soH.reference7== '07. Самовывоз  на завтра (без упаковки)')
                                                 


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
hiLog.soH.reference7== '07. Самовывоз на завтра (без упаковки)')&&
!(hiLog.soH.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
hiLog.soH.reference4.contains('АЛЬФА ООО (БН-Люберцы)')||
hiLog.soH.reference4=='РТАООО(Рябиновая)'||
hiLog.soH.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')


!(obj.reference4 =='Белоусов С.В. ИП (МАЗ) ЭДО'||
obj.reference4.contains('АЛЬФА ООО (БН-Люберцы)')||
obj.reference4=='РТАООО(Рябиновая)'||
obj.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')



obj.reference4 == 'КЕТЧЕРСКАЯ транзит' ||



(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
obj.pickingAllowed == 1 &&
!(obj.getType()=='00090'||
obj.getType()=='00076'||
obj.getType()=='00558'||
obj.getType()=='00322'||
obj.getType()=='00560'||
obj.getType()=='00667'||
obj.getType()=='00101')



(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
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
!(obj.reference4 =='Белоусов С.В. ИП (МАЗ) ЭДО'&&
obj.reference4.contains('АЛЬФА ООО (БН-Люберцы)')&&
obj.reference4=='РТАООО(Рябиновая)'&&
obj.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')

so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4.contains('АЛЬФА     ООО (БН-Люберцы)')||
                        АЛЬФА   ООО (БН-Люберцы)

so.reference4=='РТАООО(Рябиновая)'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')



so.getComments('CLIENTTER').size() > 0&&
!(so.reference4=='Белоусов С.В. ИП (МАЗ) ЭДО'||
so.reference4.contains('АЛЬФА   
ООО (БН-Люберцы)')||
so.reference4=='РТАООО(Рябиновая)'||
so.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')


(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
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

АЛЬФА   ООО (БН-Люберцы)


(obj.getType()=='00472'||
obj.getType()=='00440'||
obj.getType()=='00488'||
obj.getType()=='00408'||
obj.getType()=='00038'||
obj.getType()=='00407'||
obj.getType()=='00493'||
obj.getType()=='00451'||
obj.getType()=='00101'||
obj.getType()=='00461'||
obj.getType()=='00462'||
obj.getType()=='00404'||
obj.getType()=='АВТОТ'||
obj.getType()=='00471'||
obj.getType()=='00426')




&&
obj.pickingAllowed == 0 &&
((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 1 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))&&
!(obj.reference7=='06. Клиент ко времени на сегодня (без упаковки)'||
obj.reference7== '07. Самовывоз  на завтра (без упаковки)'||
obj.reference7=='09. Клиент на территории (без упаковки)')




(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
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




(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&& obj.getComments('CLIENTTER').size() > 0))&&
obj.pickingAllowed == 1 &&
(obj.reference4 =='Белоусов С.В. ИП (МАЗ) ЭДО'||
obj.reference4 =='АЛЬФА   ООО (БН-Люберцы)'||
obj.reference4=='РТАООО(Рябиновая)'||
obj.reference4=='Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')


(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
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


getTasksContainZonesCount(s,lp.soH,null,['Консоли'])==1
getTasksContainZonesCount(s,lp.soH,null,['Стекло'])==1	


getLPTasksContainZonesCount(s,lp,null,['Консоли'])==1
getLPTasksContainZonesCount(s,lp,null,['Стекло'])==1


(obj.dueDate != null)&&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType()=='00472'||
obj.getType()=='00440'||
obj.getType()=='00488'||
obj.getType()=='00408'||
obj.getType()=='00038'||
obj.getType()=='00407'||
obj.getType()=='00493'||
obj.getType()=='00451'||
obj.getType()=='00101'||
obj.getType()=='00461'||
obj.getType()=='00462'||
obj.getType()=='00404'||
obj.getType()=='АВТОТ'||
obj.getType()=='00471'||
obj.getType()=='00417'||
obj.getType()=='00426')&&
obj.pickingAllowed == 1 &&
((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0)||
(obj.wave != null && obj.wave.planning == 1 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))