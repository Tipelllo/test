oldvalue contain .1
newvalue not contain
  &&
  canclose = false


pojoChangeH.fieldValueOld.contains('.1') &&
  pojoChangeH.fieldValueNew.notcontains('.1') &&
  canClose == false && loadingAllowed == false



  !(hiLog.soH.type == '00560' ||
    hiLog.soH.type == '00558' ||
    hiLog.soH.type == '00101' ||
    hiLog.soH.type == '00027')



coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  !(hiLog.soH.type == '00560' ||
    hiLog.soH.type == '00558' ||
    hiLog.soH.type == '00101' ||
    hiLog.soH.type == '00076')

pojoChangeH.getOldField("soNumber").contains('.1') &&
  !pojoChangeH.getNewField("soNumber").contains('.1') &&
  pojoChangeH.soH("canClose") == false &&
  pojoChangeH.soH("loadingAllowed") == false

pojoChangeH.getOldField("soNumber").contains('.1') &&
  !pojoChangeH.getNewField("soNumber").contains('.1')


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



pojoChangeH.getOldField("soNumber").contains('.1') &&
  !pojoChangeH.getNewField("soNumber").contains('.1') &&
  pojoChangeH.soH.canClose == false &&
  pojoChangeH.soH.loadingAllowed == false


pojoChangeH.getOldField("soNumber").contains('.1') &&
  !pojoChangeH.getNewField("soNumber").contains('.1') &&
  pojoChangeH.soH.loadingAllowed == false

(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType() == '00667' ||
  obj.getType() == '00558') &&
obj.pickingAllowed == 1 &&
  ((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))


getTasksContainZonesCount(s, lp.soH, null, ['Консоли']) == 1 &&
  !getTasksContainZonesCount(s, lp.soH, null, ['Консолидация']) == 1



pojoChangeH.getOldField("soNumber") != null &&
  pojoChangeH.getNewField("soNumber") != null &&
  pojoChangeH.soH.loadingAllowed != null &&
  pojoChangeH.getOldField("soNumber").contains('.1') &&
  !pojoChangeH.getNewField("soNumber").contains('.1') &&
  pojoChangeH.soH.loadingAllowed == true



coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.reference7 == '6. Клиент на территории (без упаковки)' &&
  hiLog.soH.transport == null


hiLog.soH.reference7 == '6. Клиент на территории (без упаковки)'

reference7 = '6. Клиент на территории (без упаковки)'


(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
  (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0)) &&
obj.pickingAllowed == 1 &&
  !(obj.getType() == '00090' ||
    obj.getType() == '00076' ||
    obj.getType() == '00558' ||
    obj.getType() == '00322' ||
    obj.getType() == '00560' ||
    obj.getType() == '00667' ||
    obj.getType() == '00101') &&
  obj.reference4 != 'Белоусов С.В. ИП (МАЗ) ЭДО' &&
  obj.reference4 != 'АЛЬФА   ООО (БН-Люберцы)' &&
  obj.reference4 != 'РТАООО(Рябиновая)' &&
  obj.reference4 != 'Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'



((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
  (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0)) &&
obj.pickingAllowed == 1 &&
  !(obj.getType() == '00090' ||
    obj.getType() == '00076' ||
    obj.getType() == '00558' ||
    obj.getType() == '00322' ||
    obj.getType() == '00560' ||
    obj.getType() == '00667' ||
    obj.getType() == '00101') &&
  obj.reference4 != 'Белоусов С.В. ИП (МАЗ) ЭДО' &&
  obj.reference4 != 'АЛЬФА   ООО (БН-Люберцы)' &&
  obj.reference4 != 'РТАООО(Рябиновая)' &&
  obj.reference4 != 'Гудков Алексей Павлович ИП (ТПС) дилер MP и MX'



(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 12) &&
((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
  (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0)) &&
obj.pickingAllowed == 1 &&
  (obj.reference4 == 'Белоусов С.В. ИП (МАЗ) ЭДО' ||
    obj.reference4 == 'АЛЬФА   ООО (БН-Люберцы)' ||
    obj.reference4 == 'РТАООО(Рябиновая)' ||
    obj.reference4 == 'Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')



((obj.wave == null && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0) ||
  (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && obj.getComments('CLIENTTER').size() > 0)) &&
obj.pickingAllowed == 1 &&
  (obj.reference4 == 'Белоусов С.В. ИП (МАЗ) ЭДО' ||
    obj.reference4 == 'АЛЬФА   ООО (БН-Люберцы)' ||
    obj.reference4 == 'РТАООО(Рябиновая)' ||
    obj.reference4 == 'Гудков Алексей Павлович ИП (ТПС) дилер MP и MX')



getType().startsWith('DELIVE') ||
  getType().startsWith('PICK') ||
  getType().startsWith('LOCKER') ||
  getType().startsWith('STO') ||
  getType().startsWith('VENDO') ||
  getType().startsWith('MSK')


getType().startsWith('DELIVE') ||
  getType().startsWith('PICK') ||
  getType().startsWith('LOCKER') ||
  getType().startsWith('STO') ||
  getType().startsWith('VENDO') ||
  getType().startsWith('MKPLCBERU')


getType().startsWith('DELIVE') || getType().startsWith('PICK') || etType().startsWith('LOCKER') || getType().startsWith('STO') || getType().startsWith('VENDO') ||
  getType().startsWith('MKPLCBERU') || getType() == 'MKPLCBERU'

getType()

MKPLCBERU

getType().startsWith('DELIVE') ||
  getType().startsWith('PICK') ||
  getType().startsWith('LOCKER') ||
  getType().startsWith('STO') ||
  getType().startsWith('VENDO') ||
  getType().startsWith('MKPLCBERU')


coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  !hiLog.soH.xdockPOs.size() == 1 &&
  (hiLog.soH.getType().startsWith('DELIVE') ||
    hiLog.soH.getType().startsWith('PICK') ||
    hiLog.soH.getType().startsWith('LOCKER') ||
    hiLog.soH.getType().startsWith('STO') ||
    hiLog.soH.getType().startsWith('VENDO') ||
    hiLog.soH.getType().startsWith('MSK'))



coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  !hiLog.soH.xdockPOs.size() == 1 &&
  (hiLog.soH.getType().startsWith('DELIVE') ||
    hiLog.soH.getType().startsWith('PICK') ||
    hiLog.soH.getType().startsWith('LOCKER') ||
    hiLog.soH.getType().startsWith('STO') ||
    hiLog.soH.getType().startsWith('VENDO') ||
    hiLog.soH.getType().startsWith('MSK') ||
    hiLog.soH.getType().startsWith('MKPLCBERU'))

  !(hiLog.soH.type == '00560' ||
    hiLog.soH.type == '00558' ||
    hiLog.soH.type == '00101' || )

coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  (hiLog.soH.reference7 == '08. Клиент ко времени на сегодня (с упаковкой)') &&
  hiLog.soH.reference10 != 'Л6666'


coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  (hiLog.soH.reference7 == '08. Клиент ко времени на сегодня (с упаковкой)') &&
  !(hiLog.soH.reference10 == 'Л6666' ||
    hiLog.soH.type == '00560' ||
    hiLog.soH.type == '00558' ||
    hiLog.soH.type == '00101')

coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  hiLog.soH.reference7 == '09. Клиент на территории (без упаковки)' &&
  hiLog.soH.reference10 != 'Л6666'


coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  hiLog.soH.reference7 == '09. Клиент на территории (без упаковки)' &&
  !(hiLog.soH.reference10 == 'Л6666' ||
    hiLog.soH.type == '00560' ||
    hiLog.soH.type == '00558' ||
    hiLog.soH.type == '00101')

coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  (hiLog.soH.reference7 == '06. Клиент ко времени на сегодня (без упаковки)') &&
  hiLog.soH.reference10 != 'Л6666'

coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  (hiLog.soH.reference7 == '06. Клиент ко времени на сегодня (без упаковки)') &&
  !(hiLog.soH.reference10 == 'Л6666' ||
    hiLog.soH.type == '00560' ||
    hiLog.soH.type == '00558' ||
    hiLog.soH.type == '00101')

coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  (hiLog.soH.reference7 == '07. Самовывоз на дату (без упаковки)') &&
  hiLog.soH.reference10 != 'Л6666'

coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  (hiLog.soH.reference7 == '07. Самовывоз на дату (без упаковки)') &&
  !(hiLog.soH.reference10 == 'Л6666' ||
    hiLog.soH.type == '00560' ||
    hiLog.soH.type == '00558' ||
    hiLog.soH.type == '00101')


coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.getType().startsWith('MKPLCBERU') &&
  hiLog.soH.reference10 == 'К2590'

//было

(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType() == '00472' ||
  obj.getType() == '00440' ||
  obj.getType() == '00488' ||
  obj.getType() == '00408' ||
  obj.getType() == '00038' ||
  obj.getType() == '00407' ||
  obj.getType() == '00493' ||
  obj.getType() == '00451' ||
  obj.getType() == '00101' ||
  obj.getType() == '00461' ||
  obj.getType() == '00462' ||
  obj.getType() == '00404' ||
  obj.getType() == 'АВТОТ' ||
  obj.getType() == '00471' ||
  obj.getType() == '00417' ||
  obj.getType() == '00426') &&
obj.pickingAllowed == 1 &&
  ((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))



//стало


(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType() == '00472' ||
  obj.getType() == '00440' ||
  obj.getType() == '00488' ||
  obj.getType() == '00408' ||
  obj.getType() == '00038' ||
  obj.getType() == '00407' ||
  obj.getType() == '00493' ||
  obj.getType() == '00451' ||
  obj.getType() == '00101' ||
  obj.getType() == '00461' ||
  obj.getType() == '00462' ||
  obj.getType() == '00404' ||
  obj.getType() == 'АВТОТ' ||
  obj.getType() == '00471' ||
  obj.getType() == '00417' ||
  obj.getType() == '00426') &&
obj.pickingAllowed == 1 &&
  ((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 1 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))







(obj.dueDate != null) &&
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
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0)) &&
  !(obj.reference7 == '06. Клиент ко времени на сегодня (без упаковки)' ||
    obj.reference7 == '07. Самовывоз  на завтра (без упаковки)' ||
    obj.reference7 == '09. Клиент на территории (без упаковки)')


(obj.dueDate != null) &&
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






(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType() == '00472' ||
  obj.getType() == '00440' ||
  obj.getType() == '00488' ||
  obj.getType() == '00408' ||
  obj.getType() == '00038' ||
  obj.getType() == '00407' ||
  obj.getType() == '00493' ||
  obj.getType() == '00451' ||
  obj.getType() == '00101' ||
  obj.getType() == '00461' ||
  obj.getType() == '00462' ||
  obj.getType() == '00404' ||
  obj.getType() == 'АВТОТ' ||
  obj.getType() == '00471' ||
  obj.getType() == '00417' ||
  obj.getType() == '00426') &&
obj.pickingAllowed == 1 &&
  ((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))







(obj.dueDate != null) &&
(hours_between(c2d(obj.dueDate), now(0)) < 120) &&
(obj.getType().startsWith('PICK') ||
  obj.getType().startsWith('DELIVE') ||
  obj.getType().startsWith('STO') ||
  obj.getType().startsWith('VENDO') ||
  obj.getType().startsWith('LOCKER') ||
  obj.getType() == 'MSKSPBCDE' ||
  obj.getType() == 'MKPLCBERU' ||
  obj.getType() == '00067' ||
  obj.getType() == '00624' ||
  obj.getType() == '00500' ||
  obj.getType() == '00676' ||
  obj.getType() == '00702' ||
  obj.getType() == '00235') &&
obj.pickingAllowed == 1 &&
  ((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))



coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  hiLog.soH.transport == null &&
  hiLog.soH.reference10 == 'Л6666'


coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  !hiLog.soH.xdockPOs.size() == 1 &&
  (hiLog.soH.type == '00101' ||
    hiLog.soH.type == '00558') &&
  (hiLog.soH.reference10 == 'П7268' ||
    hiLog.soH.reference10 == 'Н7971')



coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  !hiLog.soH.xdockPOs.size() == 1 &&
  hiLog.soH.type == '00560' &&
  (hiLog.soH.reference10 == 'П7268' ||
    hiLog.soH.reference10 == 'Н7971')


pojoChangeH.isPojoChanged("Transport") &&
  pojoChangeH.isFieldChanged("status") &&
  pojoChangeH.getNewField("status") == "CLOSED"

  coordinator.messageHandler.hasErrors() == false &&hiLog.channelName.contains('SO')&&!hiLog.soH.xdockPOs.size()==1&&(hiLog.soH.type=='00562'||hiLog.soH.type=='00639'||hiLog.soH.type=='00641'||hiLog.soH.type=='00640')&&(hiLog.soH.reference10=='64380'||hiLog.soH.reference10=='В7546'||hiLog.soH.reference10=='75598'||hiLog.soH.reference10=='49123'||hiLog.soH.reference10=='34154'||hiLog.soH.reference10=='10591'||hiLog.soH.reference10=='48232'||hiLog.soH.reference10=='43188'||hiLog.soH.reference10=='Б1279'||hiLog.soH.reference10=='28175'||hiLog.soH.reference10=='И2273'||hiLog.soH.reference10=='Г5125'||hiLog.soH.reference10=='79364'||hiLog.soH.reference10=='79365'||hiLog.soH.reference10=='И6535'||hiLog.soH.reference10=='34134'||hiLog.soH.reference10=='А0749'||hiLog.soH.reference10=='Б5336'||hiLog.soH.reference10=='И4353')

coordinator.messageHandler.hasErrors() == false &&
  hiLog.channelName.contains('SO') &&
  !hiLog.soH.xdockPOs.size() == 1 &&
  (hiLog.soH.type == '00562' ||
    hiLog.soH.type == '00639' ||
    hiLog.soH.type == '00641' ||
    hiLog.soH.type == '00640') &&
  (hiLog.soH.reference10 == '64380' ||
    hiLog.soH.reference10 == 'В7546' ||
    hiLog.soH.reference10 == '75598' ||
    hiLog.soH.reference10 == '49123' ||
    hiLog.soH.reference10 == '34154' ||
    hiLog.soH.reference10 == '10591' ||
    hiLog.soH.reference10 == '48232' ||
    hiLog.soH.reference10 == '43188' ||
    hiLog.soH.reference10 == 'Б1279' ||
    hiLog.soH.reference10 == '28175' ||
    hiLog.soH.reference10 == 'И2273' ||
    hiLog.soH.reference10 == 'Г5125' ||
    hiLog.soH.reference10 == '79364' ||
    hiLog.soH.reference10 == '79365' ||
    hiLog.soH.reference10 == 'И6535' ||
    hiLog.soH.reference10 == '34134' ||
    hiLog.soH.reference10 == 'А0749' ||
    hiLog.soH.reference10 == 'Б5336' ||
    hiLog.soH.reference10 == 'П7268' ||
    hiLog.soH.reference10 == 'И4353')

    

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
    so.reference4.contains('Emex.RU')


    lp.location.targetPickZoneGrouping != null ? 
    lp.location.targetPickZoneGrouping.sortLoc.label : null


    lp.location.targetPickZoneGrouping && 
    lp.location.targetPickZoneGrouping.sortLoc ? 
    lp.location.targetPickZoneGrouping.sortLoc.label : " "

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
    hiLog.soH.reference10=='Ж4338'||
    hiLog.soH.reference10=='С1246')



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
     hiLog.soH.reference10=='Ж4338'||   
     hiLog.soH.reference10=='С1246'||
     hiLog.soH.reference10=='Р3793'||
     hiLog.soH.reference10=='С6320')


     pojoChangeH.getOldField("soNumber")!=null &&
     pojoChangeH.getNewField("soNumber")!=null &&
     pojoChangeH.soH.loadingAllowed!=null&&
     pojoChangeH.getOldField("soNumber").contains('.1')&&
    !pojoChangeH.getNewField("soNumber").contains('.1')&&
     pojoChangeH.soH.loadingAllowed == true


     pojoChangeH.getOldField("soNumber")!=null &&
     pojoChangeH.getNewField("soNumber")!=null &&
     pojoChangeH.getOldField("loadingAllowed") == "0" &&
     pojoChangeH.getNewField("loadingAllowed") == "1"

      
     pojoChangeH.getOldField("loadingAllowed") == false &&
     pojoChangeH.getNewField("loadingAllowed") == true

     
     pojoChangeH.getOldField("soNumber")!=null &&
     pojoChangeH.getNewField("soNumber")!=null &&
     pojoChangeH.isFieldChanged("loadingAllowed")&&
     pojoChangeH.getOldField("loadingAllowed")== false &&
     pojoChangeH.getNewField("loadingAllowed")== true

     pojoChangeH.getOldField("soNumber")!=null &&
     pojoChangeH.getNewField("soNumber")!=null &&
     pojoChangeH.isFieldChanged("loadingAllowed")&&
     pojoChangeH.getNewField("loadingAllowed")== true


     pojoChangeH.getOldField("soNumber")!=null &&
     pojoChangeH.getNewField("soNumber")!=null &&
     pojoChangeH.isFieldChanged("loadingAllowed")&&
     pojoChangeH.getOldField("loadingAllowed")== false &&
     pojoChangeH.getNewField("loadingAllowed")== true &&
     pojoChangeH.soH.loadingAllowed == true



     pojoChangeH.getOldField("soNumber")!=null &&
     pojoChangeH.getNewField("soNumber")!=null &&
     pojoChangeH.isFieldChanged("loadingAllowed")&&
     pojoChangeH.getOldField("loadingAllowed")== false &&
     pojoChangeH.getNewField("loadingAllowed")== true
     
     pojoChangeH.soH.loadingAllowed == true


     pojoChangeH.isFieldChanged("loadingAllowed")&&
     pojoChangeH.soH.loadingAllowed == true



     pojoChangeH.isFieldChanged("loadingAllowed")&&
     pojoChangeH.getOldField("loadingAllowed")== "Нет"&&
     pojoChangeH.getNewField("loadingAllowed")== "Да"

     soh.getType()=='00560'&&
     soh.reference10=='48232'
 

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
     hiLog.soH.reference10=='Ж4338'||       
     hiLog.soH.reference10=='С1246'||   
     hiLog.soH.reference10=='Р3793'|| 
     hiLog.soH.reference10=='С6320'||
     hiLog.soH.reference10=='О6040'||
     hiLog.soH.reference10=='Т1756'
     )


     !(soh.reference10=='48232')



     getType().startsWith('DELIVE')|| 
     getType().startsWith('PICK')|| 
     getType().startsWith('LOCKER')|| 
     getType().startsWith('STO')|| 
     getType().startsWith('VENDO')|| 
     getType().startsWith('MSK')

     
     
     getType().startsWith('STO')|| 
     getType().startsWith('VENDO')|| 
     getType().startsWith('MSK')


var str = 'Какой-нибудь текст!';
alert(str.length);



soh.getType()=='00560' && soh.reference10=='48232'



getType().startsWith('DELIVE')||
getType().startsWith('PICK')||
getType().startsWith('LOCKER')||
getType().startsWith('STO')||
getType().startsWith('VENDO')||
getType().startsWith('MSK')||
getType()=='MKPLCBERU'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00631'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='П5132'




!(so.getComments('DELIVERITYPE').size() > 0 && 
so.getComments('DELIVERITYPE').get(0).equals('Доставка Почта России сборные'))




 so.pickingAllowed == 0 && 
(so.type=='00101'|| so.type=='00558'|| so.type=='00560')
&& so.reference10=='И6535'

xdockPOs


hiLog.channelName.contains('SO') && 
(hiLog.soH.type.startsWith('PICK')||  
hiLog.soH.type.startsWith('DELIVE')|| 
 hiLog.soH.type.startsWith('MSK')||  
 hiLog.soH.type.startsWith('STO')||  
 hiLog.soH.type.startsWith('LOCKER')) &&  
 (hiLog.soH.getComments('COMBINEDORDER').size() > 0 && 
hiLog.soH.getComments('COMBINEDORDER').get(0).equals('несколько мест')) &&  
(hiLog.soH.getComments('DELIVERITYPE').size() > 0 && 
hiLog.soH.getComments('DELIVERITYPE').get(0).equals('Доставка Почта России EMS сборные') &&  
hiLog.soH.getVTSoH(s).lpCount>1)


(hiLog.soH.type.startsWith('PICK')|| hiLog.soH.type.startsWith('DELIVE')|| hiLog.soH.type.startsWith('MSK')|| hiLog.soH.type.startsWith('STO')|| hiLog.soH.type.startsWith('LOCKER')) && (hiLog.soH.getComments('COMBINEDORDER').size() > 0 && hiLog.soH.getComments('COMBINEDORDER').get(0).equals('несколько мест')) && (hiLog.soH.getComments('DELIVERITYPE').size() > 0 && hiLog.soH.getComments('DELIVERITYPE').get(0).equals('Доставка Почта России EMS сборные') && hiLog.soH.getVTSoH(s).lpCount>1)



: TypeError: Cannot read property "type" from null in eval at line number 0 at column number 0


hiLog.channelName.contains('SO') && 
hiLog.soH.getComments('DELIVERITYPE').size() > 0 && 
hiLog.soH.getComments('DELIVERITYPE').get(0).equals('Доставка Почта России EMS сборные')&& 
hiLog.soH.getVTSoH(s).lpCount>1


coordinator.messageHandler.hasErrors() == false &&   hiLog.channelName.contains('SO') &&   !hiLog.soH.xdockPOs.size() == 1 &&   (hiLog.soH.type == '00562' ||     hiLog.soH.type == '00639' ||     hiLog.soH.type == '00641' ||     hiLog.soH.type == '00640') &&   (hiLog.soH.reference10 == '64380' ||     hiLog.soH.reference10 == 'В7546' ||     hiLog.soH.reference10 == '75598' ||     hiLog.soH.reference10 == '49123' ||     hiLog.soH.reference10 == '34154' ||     hiLog.soH.reference10 == '10591' ||     hiLog.soH.reference10 == '48232' ||     hiLog.soH.reference10 == '43188' ||     hiLog.soH.reference10 == 'Б1279' ||     hiLog.soH.reference10 == '28175' ||     hiLog.soH.reference10 == 'И2273' ||     hiLog.soH.reference10 == 'Г5125' ||     hiLog.soH.reference10 == '79364' ||     hiLog.soH.reference10 == '79365' ||     hiLog.soH.reference10 == 'И6535' ||     hiLog.soH.reference10 == '34134' ||     hiLog.soH.reference10 == 'А0749' ||     hiLog.soH.reference10 == 'Б5336' ||     hiLog.soH.reference10 == 'П7268' ||     hiLog.soH.reference10 == 'И4353' ||     hiLog.soH.reference10 == 'П5132' )


getTasksContainZonesCount(s,lp.soH,null,['Консоли'])==1

getTasksContainZonesCount(s,lp.soH,null,['Стекло'])==1


getLPTasksContainZonesCount(s,lp,null,['Консоли'])==1


getLPTasksContainZonesCount(s,lp,null,['Стекло'])==1




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='И2273'


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.transport == null&&
(hiLog.soH.reference7=='06. Клиент ко времени на сегодня (без упаковки)')




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.type=='00641'


hiLog.channelName.contains('SO')&&
hiLog.soH.reference10=='Р4248'||
hiLog.soH.reference10=='Р4247'||
hiLog.soH.reference10=='С3509'


obj.reference4=='Авто-Альянс Сабурово (М)'
obj.reference4=='ПРОЛЕТАРКА (покупатель)' 
obj.reference4=='САБУРОВО (покупатель)'


((obj.wave == null)|| (obj.wave != null && obj.wave.planning == 0 ))&& 
(obj.reference10=='Р4248'||
 obj.reference10=='Р4247'||
 obj.reference10=='С3509')


((obj.wave == null)||
(obj.wave != null && obj.wave.planning == 0 ))&&
(obj.getType()=='00558')



hiLog.channelName.contains('SO')&&
( hiLog.soH.type=='00558'||
  hiLog.soH.type=='00560'||
  hiLog.soH.type=='00101'||
  hiLog.soH.type=='00090'||
  hiLog.soH.type=='00217')&&
(hiLog.soH.reference10=='Р4248'||
hiLog.soH.reference10=='Р4247'||
hiLog.soH.reference10=='С3509')



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00631'||
hiLog.soH.type=='00560')&&
hiLog.soH.reference10=='И2273'



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.type=='00101'||
hiLog.soH.type=='00558'||
hiLog.soH.type=='00631'||
hiLog.soH.type=='00560')&&
(hiLog.soH.reference10=='С3509'||
hiLog.soH.reference10=='Р4248'||
hiLog.soH.reference10=='Р4247')


coordinator.messageHandler.hasErrors() == false && 
hiLog.channelName.contains('SO')&& 
!hiLog.soH.xdockPOs.size()==1&& 
(hiLog.soH.type=='00101'|| 
  hiLog.soH.type=='00558'|| 
  hiLog.soH.type=='00631'|| 
  hiLog.soH.type=='00217'|| 
  hiLog.soH.type=='00560')&& 
  (hiLog.soH.reference10=='С3509'|| 
    hiLog.soH.reference10=='Р4248'|| 
    hiLog.soH.reference10=='Р4247')

    ((obj.wave == null)|| (obj.wave != null && obj.wave.planning == 0 ))&& (obj.getType()=='00558')



!(so.reference4.contains('Транснефть') || 
so.reference4.contains('Эмекс')|| 
so.reference4.contains('Emex.RU') || 
so.getType().startsWith('DELIVE')|| 
so.getType().startsWith('PICK')|| 
so.getType().startsWith('LOCKER')|| 
so.getType().startsWith('STO')|| 
so.getType().startsWith('VENDO')|| 
so.getType().startsWith('MSK')) &&
!(
  so.getType().startsWith('DELIVE') ||
  so.getType().startsWith('PICK') ||
  so.getType().startsWith('LOCKER') ||
  so.getType().startsWith('STO') ||
  so.getType().startsWith('VENDO') ||
  so.getType() == 'MKPLCBERU' ||
  so.reference4.indexOf('ТЕНДЕР')!=-1||
  so.reference4.indexOf('А.П.Р.')!=-1||
  so.reference4.indexOf('А.П.Р')!=-1||
  so.reference4.indexOf('КОЛОМНА-розница')!=-1||
  so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
  so.reference4.indexOf('Перово транзит')!=-1||
  so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
  so.reference4.indexOf('Эмекс')!=-1||
  so.reference10 == 'Т6858' ||
  so.reference4.indexOf('ГСП-2')!=-1||
  so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1||
  so.reference4.indexOf('СВАРОГ')!=-1||
  so.reference4.indexOf('Дальзапчасть')!=-1||
  so.reference4.indexOf('Козлов Сергей Витальевич')!=-1||
  so.reference10 == '41940' ||
  so.reference10 == '83790' ||
  (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
  so.reference4.startsWith('СОЛУ') ||
  so.reference10 == 'Е9816' ||
  so.reference10 == '61063' ||
  so.reference10 == 'И5143' ||
  so.reference10 == 'А0266' ||
  so.reference10 == 'Л0818' ||
  so.reference10 == 'В0296' ||
  so.reference10 == 'Л8980' ||
  so.reference10 == 'М0285' ||
  so.reference10 == 'В7679' ||
  so.reference10 == '39061' ||
  so.reference10 == 'М0180' ||
  so.reference10 == 'Л2924' ||
  so.reference4.indexOf('АЛЬФА   ООО (БН-Люберцы)')!=-1||
  so.reference10 == 'М8270' ||
  so.reference10 == 'И5793' ||
  so.reference10 == '63826' ||
  so.reference10 == 'К3852' ||
  so.reference10 == 'Л3915' ||
  so.reference10 == 'М9862' ||
  so.reference10 == 'Т4489' ||
  so.reference10 == 'Й0527' ||
  so.reference10 == 'К6509' ||
  so.reference10 == 'Ж8543' ||
  so.reference10 == '33266' ||
  so.reference10 == '68923' ||
  so.reference10 == 'Р7113' ||
  so.reference10 == 'Н5497' ||
  so.reference10 == 'А3762' ||
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
  (so.reference10 == 'НЕТОР' && so.getType() == '00041')
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
  )



  !(so.reference4.indexOf('Транснефть')!=-1) &&
   !(so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1) &&
   !(so.reference4.indexOf('транснефть')!=-1) ||

  !(
    (so.reference4.indexOf('Транснефть')!=-1) ||
    (so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1) ||
    (so.reference4.indexOf('транснефть')!=-1) ||
    so.getType().startsWith('DELIVE') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.reference4.indexOf('ТЕНДЕР')!=-1||
    so.reference4.indexOf('А.П.Р.')!=-1||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('ГСП-2')!=-1||
    so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1||
    so.reference4.indexOf('СВАРОГ')!=-1||
    so.reference4.indexOf('Дальзапчасть')!=-1||
    so.reference4.indexOf('Козлов Сергей Витальевич')!=-1||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
      so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
    so.reference4.startsWith('СОЛУ')
  )
   
   
  so.reference4.indexOf('ТЕНДЕР')!=-1 && 
  !(so.reference4.indexOf('Транснефть')!=-1) &&
  !(so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1) &&
  !(so.reference4.indexOf('транснефть')!=-1) ||
 (so.reference4.startsWith('Ремдизель') &&
   so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
 so.reference4.indexOf('СВАРОГ')!=-1 ||
 so.reference4.indexOf('Дальзапчасть')!=-1 ||
 so.reference4.indexOf('Козлов Сергей Витальевич')!=-1 ||
 so.reference10 == '61063' ||
 so.reference10 == 'Е9816' ||
 so.reference10 == 'И5143' ||
 so.reference10 == 'А0266' ||
 so.reference10 == 'Л0818' ||
 so.reference10 == 'В0296' ||
 so.reference10 == 'Л8980' ||
 so.reference10 == 'М0180' ||
 so.reference10 == '39061' ||
 so.reference10 == 'М0285' ||
 so.reference10 == 'М8270' ||
 so.reference10 == 'И5793' ||
 so.reference10 == '63826' ||
 so.reference10 == 'К3852' ||
 so.reference10 == 'Л3915' ||
 so.reference10 == 'М9862' ||
 so.reference10 == 'Т4489' ||
 so.reference10 == 'Й0527' ||
 so.reference10 == 'К6509' ||
 so.reference10 == 'Ж8543' ||
 so.reference10 == 'Р7113' ||
 so.reference4.indexOf('ГСП-2')!=-1||
 so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1 ||
 so.reference4.startsWith('СОЛУ')  
   









   ||
  
  (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
  so.reference4.indexOf('СВАРОГ')!=-1 ||
  so.reference4.indexOf('Дальзапчасть')!=-1 ||
  so.reference4.indexOf('Козлов Сергей Витальевич')!=-1 ||
  so.reference10 == '61063' ||
  so.reference10 == 'Е9816' ||
  so.reference10 == 'И5143' ||
  so.reference10 == 'А0266' ||
  so.reference10 == 'Л0818' ||
  so.reference10 == 'В0296' ||
  so.reference10 == '83790' ||
  so.reference10 == 'Л8980' ||
  so.reference10 == 'М0180' ||
  so.reference10 == '39061' ||
  so.reference10 == 'М0285' ||
  so.reference10 == 'М8270' ||
  so.reference10 == 'И5793' ||
  so.reference10 == '63826' ||
  so.reference10 == 'К3852' ||
  so.reference10 == 'Л3915' ||
  so.reference10 == 'М9862' ||
  so.reference10 == 'Т4489' ||
  so.reference10 == 'Й0527' ||
  so.reference10 == 'К6509' ||
  so.reference10 == 'Ж8543' ||
  so.reference10 == 'Р7113' ||
  so.reference10 == '33266' ||
  so.reference10 == '68923' ||
  so.reference4.indexOf('ГСП-2')!=-1||
  so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1 ||
  so.reference4.startsWith('СОЛУ')





  so.reference4.indexOf('ТЕНДЕР')!=-1 && 
   !(so.reference4.indexOf('Транснефть')!=-1) &&
   !(so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1) &&
   !(so.reference4.indexOf('транснефть')!=-1) ||
  (so.reference4.startsWith('Ремдизель') &&
    so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
  so.reference4.indexOf('СВАРОГ')!=-1 ||
  so.reference4.indexOf('Дальзапчасть')!=-1 ||
  so.reference4.indexOf('Козлов Сергей Витальевич')!=-1 ||
  so.reference10 == '61063' ||
  so.reference10 == 'Е9816' ||
  so.reference10 == 'И5143' ||
  so.reference10 == 'А0266' ||
  so.reference10 == 'Л0818' ||
  so.reference10 == 'В0296' ||
  so.reference10 == '83790' ||
  so.reference10 == 'Л8980' ||
  so.reference10 == 'М0180' ||
  so.reference10 == '39061' ||
  so.reference10 == 'М0285' ||
  so.reference10 == 'М8270' ||
  so.reference10 == 'И5793' ||
  so.reference10 == '63826' ||
  so.reference10 == 'К3852' ||
  so.reference10 == 'Л3915' ||
  so.reference10 == 'М9862' ||
  so.reference10 == 'Т4489' ||
  so.reference10 == 'Й0527' ||
  so.reference10 == 'К6509' ||
  so.reference10 == 'Ж8543' ||
  so.reference10 == 'Р7113' ||
  so.reference10 == '33266' ||
  so.reference10 == '68923' ||
  so.reference4.indexOf('ГСП-2')!=-1||
  so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1 ||
  so.reference4.startsWith('СОЛУ')


  





  !(
  so.reference4.indexOf('ТЕНДЕР')!=-1 ||
  so.reference4.indexOf('Транснефть')!=-1 ||
  so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1 ||
  so.reference4.indexOf('транснефть')!=-1 ||
  so.getType().startsWith('DELIVE') ||
  so.getType().startsWith('PICK') ||
  so.getType().startsWith('LOCKER') ||
  so.getType().startsWith('STO') ||
  so.getType().startsWith('VENDO') ||
  so.getType() == 'MKPLCBERU' ||
  (so.reference4.startsWith('Ремдизель') &&
   so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
  so.reference4.indexOf('СВАРОГ')!=-1 ||
  so.reference4.indexOf('Дальзапчасть')!=-1 ||
  so.reference4.indexOf('Козлов Сергей Витальевич')!=-1 ||
  so.reference4.indexOf('Эмекс')!=-1||
  so.reference10 == '61063' ||
  so.reference10 == 'Е9816' ||
  so.reference10 == 'И5143' ||
  so.reference10 == 'А0266' ||
  so.reference10 == 'Л0818' ||
  so.reference10 == 'В0296' ||
  so.reference10 == '83790' ||
  so.reference10 == 'Л8980' ||
  so.reference10 == 'М0180' ||
  so.reference10 == '39061' ||
  so.reference10 == 'М0285' ||
  so.reference10 == 'М8270' ||
  so.reference10 == 'И5793' ||
  so.reference10 == '63826' ||
  so.reference10 == 'К3852' ||
  so.reference10 == 'Л3915' ||
  so.reference10 == 'М9862' ||
  so.reference10 == 'Т4489' ||
  so.reference10 == 'Й0527' ||
  so.reference10 == 'К6509' ||
  so.reference10 == 'Ж8543' ||
  so.reference10 == 'Р7113' ||
  so.reference10 == '33266' ||
  so.reference10 == '68923' ||
  so.reference4.indexOf('ГСП-2')!=-1||
  so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1 ||
  so.reference4.startsWith('СОЛУ')
  )








  !(
    (so.reference4.indexOf('Транснефть')!=-1) ||
    (so.reference4.indexOf('ТРАНСНЕФТЬ')!=-1) ||
    (so.reference4.indexOf('транснефть')!=-1) ||
    so.getType().startsWith('DELIVE') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.reference4.indexOf('ТЕНДЕР')!=-1||
    so.reference4.indexOf('А.П.Р.')!=-1||
    so.reference4.indexOf('А.П.Р')!=-1||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1||
    so.reference4.indexOf('Перово транзит')!=-1||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1||
    so.reference4.indexOf('Эмекс')!=-1||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('ГСП-2')!=-1||
    so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1||
    so.reference4.indexOf('СВАРОГ')!=-1||
    so.reference4.indexOf('Дальзапчасть')!=-1||
    so.reference4.indexOf('Козлов Сергей Витальевич')!=-1||
    so.reference10 == '41940' ||
    so.reference10 == '83790' ||
    (so.reference4.startsWith('Ремдизель') &&
      so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
    so.reference4.startsWith('СОЛУ')
  )





  !(
    so.getType().startsWith('DELIVE') ||
    so.getType().startsWith('PICK') ||
    so.getType().startsWith('LOCKER') ||
    so.getType().startsWith('STO') ||
    so.getType().startsWith('VENDO') ||
    so.getType() == 'MKPLCBERU' ||
    so.reference4.indexOf('ТЕНДЕР')!=-1 ||
    so.reference4.indexOf('А.П.Р.')!=-1 ||
    so.reference4.indexOf('А.П.Р')!=-1 ||
    so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
    so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
    so.reference4.indexOf('Перово транзит')!=-1 ||
    so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
    so.reference4.indexOf('Эмекс')!=-1 ||
    so.reference10 == 'Т6858' ||
    so.reference4.indexOf('СВАРОГ')!=-1 ||
    (so.reference4.startsWith('Ремдизель') &&
      so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
    so.reference4.startsWith('СОЛУ') ||
    so.reference10 == 'Е9816' ||
    so.reference10 == '61063' ||
    so.reference10 == 'И5143' ||
    so.reference10 == 'А0266' ||
    so.reference10 == 'Л0818' ||
    so.reference10 == 'В0296' ||
    so.reference4.indexOf('Козлов Сергей Витальевич')!=-1 ||
    so.reference10 == '83790' ||
    so.reference4.indexOf('ГСП-2')!=-1 ||
    so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1 ||
    so.reference10 == 'Л8980' ||
    so.reference10 == 'М0285' ||
    so.reference10 == '39061' ||
    so.reference10 == 'М0180' ||
    so.reference10 == 'Л2924' ||
    so.reference10 == 'Л6666' ||
    so.reference10 == 'М8270' ||
    so.reference10 == 'И5793' ||
    so.reference10 == '63826' ||
    so.reference10 == 'К3852' ||
    so.reference10 == 'Л3915' ||
    so.reference10 == 'М9862' ||
    so.reference10 == 'Т4489' ||
    so.reference10 == 'Й0527' ||
    so.reference10 == 'К6509' ||
    so.reference10 == 'Ж8543' ||
    so.reference10 == '33266' ||
    so.reference10 == '68923' ||
    so.reference10 == 'Р7113' ||
    so.reference10 == 'Н5497' ||
    so.reference10 == 'А3762' ||
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
    (so.reference10 == 'НЕТОР' && so.getType() == '00041')
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
      so.reference10 == '23695'
    )



    so.pickingAllowed == 0 && 
    (so.type=='00101'|| so.type=='00558'|| so.type=='00560')
    && 
    (so.reference10=='Б5681'||so.reference10=='Б1279')



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
      hiLog.soH.reference10=='Ж4338'||
      hiLog.soH.reference10=='С1246'||
      hiLog.soH.reference10=='Р3793'||
      hiLog.soH.reference10=='С6320'||
      hiLog.soH.reference10=='О6040'||
      hiLog.soH.reference10=='У2083'||
      hiLog.soH.reference10=='Т1756')

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
      hiLog.soH.reference10=='Ж4338'||
      hiLog.soH.reference10=='С1246'||
      hiLog.soH.reference10=='Р3793'||
      hiLog.soH.reference10=='С6320'||
      hiLog.soH.reference10=='О6040'||
      hiLog.soH.reference10=='У2083'||
      hiLog.soH.reference10=='Т1756')




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO') &&
!hiLog.soH.xdockPOs.size() == 1 &&
(hiLog.soH.type == '00562' ||
    hiLog.soH.type == '00639' || 
    hiLog.soH.type == '00641' ||  
    hiLog.soH.type == '00640') &&
    (hiLog.soH.reference10 == '64380'||
     hiLog.soH.reference10 == 'В7546'||
     hiLog.soH.reference10 == '75598'||
     hiLog.soH.reference10 == '49123'||
     hiLog.soH.reference10 == '34154'||
     hiLog.soH.reference10 == '10591'||
     hiLog.soH.reference10 == '48232'||
     hiLog.soH.reference10 == '43188'||
     hiLog.soH.reference10 == 'Б1279'||
     hiLog.soH.reference10 == '28175'||
     hiLog.soH.reference10 == 'И2273'||
     hiLog.soH.reference10 == 'Г5125'||
     hiLog.soH.reference10 == '79364'|| 
     hiLog.soH.reference10 == '79365'||
     hiLog.soH.reference10 == 'И6535'||
     hiLog.soH.reference10 == '34134'||
     hiLog.soH.reference10 == 'А0749'||
     hiLog.soH.reference10 == 'Б5336'|| 
     hiLog.soH.reference10 == 'П7268'||
     hiLog.soH.reference10 == 'И4353'||
     hiLog.soH.reference10 == 'П5132'||
     hiLog.soH.reference10 == 'Й2962'||
     hiLog.soH.reference10 == 'О6040'||
     hiLog.soH.reference10 == 'Й3717'||
     hiLog.soH.reference10 == 'Р3793'||
     hiLog.soH.reference10 == 'Й5126'||
     hiLog.soH.reference10 == 'Н8370'||
     hiLog.soH.reference10 == '62183'||
     hiLog.soH.reference10 == 'Б5681'
    )

    coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO') &&
!hiLog.soH.xdockPOs.size() == 1 &&
(hiLog.soH.type == '00562' ||
    hiLog.soH.type == '00639' || 
    hiLog.soH.type == '00641' ||  
    hiLog.soH.type == '00640') &&
    (hiLog.soH.reference10 == '64380'||
     hiLog.soH.reference10 == 'В7546'||
     hiLog.soH.reference10 == '75598'||
     hiLog.soH.reference10 == '49123'||
     hiLog.soH.reference10 == '34154'||
     hiLog.soH.reference10 == '10591'||
     hiLog.soH.reference10 == '48232'||
     hiLog.soH.reference10 == '43188'||
     hiLog.soH.reference10 == 'Б1279'||  
     hiLog.soH.reference10 == '28175'||
     hiLog.soH.reference10 == 'И2273'||
     hiLog.soH.reference10 == 'Г5125'||
     hiLog.soH.reference10 == '79364'|| 
     hiLog.soH.reference10 == '79365'||
     hiLog.soH.reference10 == 'И6535'||
     hiLog.soH.reference10 == '34134'||
     hiLog.soH.reference10 == 'А0749'||
     hiLog.soH.reference10 == 'Б5336'|| 
     hiLog.soH.reference10 == 'П7268'||
     hiLog.soH.reference10 == 'И4353'||
     hiLog.soH.reference10 == 'П5132'||
     hiLog.soH.reference10 == 'Й2962'||
     hiLog.soH.reference10 == 'О6040'||
     hiLog.soH.reference10 == 'Й3717'||
     hiLog.soH.reference10 == 'Р3793'||
     hiLog.soH.reference10 == 'Й5126'
    )





    "obj.reference10=='test'"
    "obj.reference9!='test'"

    if (String(obj.reference10) === 'test') { 
      console.log("Объект соответствует условиям: reference10 === 'test'");
  } else {
      console.log("Объект не соответствует условиям: reference10 !== 'test'");
  }


  soh.type =='00560'
  &&soh.reference4== 'test'



  "soh.type == '00560' && soh.reference4 == 'test'"





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
obj.reference10 == '62183' ||
obj.reference10 == 'У2080')) ||
obj.getType() == '00459' ||
obj.getType() == '00387') &&
obj.pickingAllowed == 1 &&
((obj.wave == null && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0) ||
(obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.') && !obj.getComments('CLIENTTER').size() > 0))



coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.getType().startsWith('MKPLCBERU')&&
(hiLog.soH.reference10=='К2590'||
hiLog.soH.reference10=='У9944')



transport.reference9=='Екатеринбург'||
transport.reference9=='Уфа план'||
transport.reference9=='Пермь план'




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.getType().startsWith('DELIVE')||
hiLog.soH.getType().startsWith('DELID')||
hiLog.soH.getType().startsWith('PICK')||
hiLog.soH.getType().startsWith('LOCKER')||
hiLog.soH.getType().startsWith('STO')||
hiLog.soH.getType().startsWith('VENDO')||
hiLog.soH.getType().startsWith('MSK'))




(obj.getType()=='00667'||
    obj.getType()=='00558')&&
    obj.pickingAllowed == 1 &&
    ((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))


   ((obj.getType()=='00667'||
    obj.getType()=='00558')||
   (obj.getType()=='00217'&& obj.reference10 =='Р4248'))
    &&
   obj.pickingAllowed == 1 &&
    ((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) ||
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))



&&


    00217
    Р4248


    !(
      so.getType().startsWith('DELI') ||
      so.getType().startsWith('PICK') ||
      so.getType().startsWith('LOCKER') ||
      so.getType().startsWith('STO') ||
      so.getType().startsWith('VENDO') ||
      so.getType() == 'MKPLCBERU' ||
      so.reference4.indexOf('ТЕНДЕР')!=-1 ||
      so.reference4.indexOf('А.П.Р.')!=-1 ||
      so.reference4.indexOf('А.П.Р')!=-1 ||
      so.reference4.indexOf('КОЛОМНА-розница')!=-1 ||
      so.reference4.indexOf('ТУЛА (малая розница)')!=-1 ||
      so.reference4.indexOf('Перово транзит')!=-1 ||
      so.reference4.indexOf('НЕКРАСОВКА транзит')!=-1 ||
      so.reference4.indexOf('Эмекс')!=-1 ||
      so.reference10 == 'Т6858' ||
      so.reference4.indexOf('СВАРОГ')!=-1 ||
      (so.reference4.startsWith('Ремдизель') &&
        so.reference4.indexOf('Б/Н-Люберцы')!=-1) ||
      so.reference4.startsWith('СОЛУ') ||
      so.reference10 == 'Е9816' ||
      so.reference10 == '61063' ||
      so.reference10 == 'И5143' ||
      so.reference10 == 'А0266' ||
      so.reference10 == 'Л0818' ||
      so.reference10 == 'В0296' ||
      so.reference4.indexOf('Козлов Сергей Витальевич')!=-1 ||
      so.reference10 == '83790' ||
      so.reference4.indexOf('ГСП-2')!=-1 ||
      so.reference4.indexOf('НТ Сервис ООО (Варшавка Новый Опт)')!=-1 ||
      so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
      so.reference10 == 'Л8980' ||
      so.reference10 == 'М0285' ||
      so.reference10 == '39061' ||
      so.reference10 == 'М0180' ||
      so.reference10 == 'Л2924' ||
      so.reference10 == 'Л6666' ||
      so.reference10 == 'М8270' ||
      so.reference10 == 'И5793' ||
      so.reference10 == '63826' ||
      so.reference10 == 'К3852' ||
      so.reference10 == 'Л3915' ||
      so.reference10 == 'М9862' ||
      so.reference10 == 'Т4489' ||
      so.reference10 == 'Й0527' ||
      so.reference10 == 'К6509' ||
      so.reference10 == 'Ж8543' ||
      so.reference10 == '33266' ||
      so.reference10 == '68923' ||
      so.reference10 == 'У6633' ||
      so.reference10 == 'Р7113' ||
      so.reference10 == 'Н5497' ||
      so.reference10 == 'А3762' ||
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
        so.reference10 == '23695'
      )




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.getComments('TRNUM').size() > 0&&
hiLog.soH.type=='MKPLCWILB'&&
hiLog.soH.reference10=='У3433'





coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
hiLog.soH.getComments('GEOZONE').size() > 0 &&
hiLog.soH.getComments('GEOZONE').get(0).startsWith('№003 ПЭК')&&
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
hiLog.soH.getType().startsWith('MSK'))





coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
hiLog.soH.reference7=='09. Клиент на территории (без упаковки)'&&
!(hiLog.soH.reference10=='Л6666'||
  hiLog.soH.type=='00560'||
  hiLog.soH.type=='00558'||
  hiLog.soH.type=='00101')


  (obj.dueDate != null)&& 
  (hours_between(c2d(obj.dueDate), now(0)) < 120) &&
    (obj.getType().startsWith('PICK')||
  obj.getType().startsWith('DELI')||
  obj.getType().startsWith('STO')||
  obj.getType().startsWith('VENDO')||
  obj.getType().startsWith('LOCKER')||
  obj.getType()=='MSKSPBCDE'||
  obj.getType()=='MKPLCBERU'||
  obj.getType()=='MKPLCWILB')&&
    obj.pickingAllowed == 1 &&
    ((obj.wave == null && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0) || 
    (obj.wave != null && obj.wave.planning == 0 && !obj.soNumber.contains('.')&&!obj.getComments('CLIENTTER').size() > 0))



    


    !(
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
      so.reference4.indexOf('СВАРОГ')!=-1 ||
      (so.reference4.startsWith('Ремдизель')&&
      so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
      so.reference4.startsWith('СОЛУ') ||
      so.reference10 == 'Ф6771' ||
      so.reference10 == '61063' ||
      so.reference10 == 'И5143' ||
      so.reference10 == 'А0266' ||
      so.reference10 == 'Л0818' ||
      so.reference10 == 'В0296' ||
      so.reference10 == '83790' ||
      so.reference4.indexOf('ГСП-2')!=-1 ||
      so.reference4.indexOf('Интернет Решения УТ_АДС покуп.')!=-1||
      so.reference10 == 'Л8980' ||
      so.reference10 == 'М0285' ||
      so.reference10 == 'М0180' ||
      so.reference10 == 'Л2924' ||
      so.reference10 == 'Л6666' ||
      so.reference10 == 'Л3915' ||
      so.reference10 == 'М9862' ||
      so.reference10 == 'Й0527' ||
      so.reference10 == '33266' ||
      so.reference10 == '68923' ||
      so.reference10 == 'У6633' ||
      so.reference10 == 'Р7113' ||
      so.reference10 == 'Н5497' ||
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
        so.reference10 == '23695'
      )


      0104630390611058215rG)WT=OUfNVZ91EE1192gQXAWVrKE5maYwTgNi4pvo2eNFSgIXNeOKZ8ZOYiELY

      so.reference4.indexOf('ТЕНДЕР')!=-1 && 
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
      so.reference10 == 'У6633' ||
      so.reference10 == 'Ф6075' ||
      so.reference10 == 'У7883' ||
      so.reference10 == 'Х1920' ||
      so.reference4.indexOf('ГСП-2')!=-1||
      so.reference4.startsWith('СОЛУ')




      0104670238021632215&DKp5gJcK1>a91EE1092Wa42C8vhqiDgh2if8zjvMaxyngV7tdAe4vpG6SxdX4o=




      <?xml version="1.0" encoding="UTF-8" ?> 
      - <instock>
        <id>ID30689060</id> 
        <date>2025-05-16 07:57:16</date> 
        <owner>01</owner> 
        <whse>04</whse> 
      - <documents>
      - <document type="SO">
      - <header>
        <doc_number>0204225252</doc_number> 
        <status>PACKED</status> 
        <type>00440</type> 
        <method>SO</method> 
        <created_date>2025-05-07 00:00:00</created_date> 
        <source_system>LF</source_system> 
        <reference1>17642847</reference1> 
        <reference2>Елена Медведева, Индивидуальный предприниматель Медведева Елена Александровна</reference2> 
        <reference3>676290, Амурская обл, Тында г, Красная Пресня ул, д.39, кв.52</reference3> 
        <reference4>Медведева Е.А. ИП (МАЗ) ЭДО</reference4> 
        <reference5>0204732561</reference5> 
        <reference6>№8_Северо-Восток</reference6> 
        <reference7>02. Доставка через ТК до терминала</reference7> 
        <reference10>Р2050</reference10> 
        <receiverId>Р2050</receiverId> 
        <loading>0</loading> 
        </header>
      - <lines>
      - <line>
        <sku>483075</sku> 
        <line_no>483075</line_no> 
        <ordered_quantity>10.00000</ordered_quantity> 
        <ordered_orig_quantity>10.00000</ordered_orig_quantity> 
        <processed_quantity>8.00000</processed_quantity> 
        <reserved_quantity>8.00000</reserved_quantity> 
        <picked_quantity>8.00000</picked_quantity> 
        <checked_quantity>8.00000</checked_quantity> 
        <ready_quantity>8.00000</ready_quantity> 
        <staged_quantity>8.00000</staged_quantity> 
        <loaded_quantity>0.00000</loaded_quantity> 
        <shipped_quantity>0.00000</shipped_quantity> 
        <intransit_quantity>0.00000</intransit_quantity> 
        <delivered_quantity>0.00000</delivered_quantity> 
        <built_quantity>0</built_quantity> 
        <pallet>26W005966541</pallet> 
        <pallet_id>19730641</pallet_id> 
        <pallet_width>80.0</pallet_width> 
        <pallet_height>60.0</pallet_height> 
        <pallet_length>120.0</pallet_length> 
        <pallet_weight>4.42</pallet_weight> 
      - <lp_info>
        <lp>26W005966541</lp> 
        <nest_level>2</nest_level> 
        <width>80.0</width> 
        <height>60.0</height> 
        <length>120.0</length> 
        <weight>3.7</weight> 
        </lp_info>
      - <serials>
        <serial>0104630390611041215/EyT-O'VH8oM91EE109263HUTvDbE7y0UZuN358oezcbb5O4iN9eWADd8LMoOxc=</serial> 
        <serial>0104630390611041215JNdmn1eGzMRa91EE1092DXPsrC0/gJoRID72zvrRg4XUX+qNRoZZRZeC4dwkFkI=</serial> 
        <serial>01046303906110412158I:6*LKSINGG91EE1092PGLhIq0UAGZu+koF2WgKj5bXC9rNQReBD6uhJUMbGP4=</serial> 
        <serial>0104630390611041215!6HnRFbXbuI191EE1092Pj+w5MNs7QLgiU/pCDc/Y/ckr6YkE1sVcygNnXnuYoQ=</serial> 
        <serial>0104630390611041215ytDlPSlZa//R91EE1092if2hN23/E80gG6x2/ROlnl4khpQsIOhkr7QjhW1wMtY=</serial> 
        <serial>0104630390611041215Ppkx"OEsO6gw91EE1092wddxFavFAHfRVLcDysPW3dalOxK9GKJhSJzxaVB2a5I=</serial> 
        <serial>01046303906110412153k0MX<XO*NL?91EE1092F3/SCmlgeVbGNH3GIzKlVjOW4iIA9nyJtrsy5t4oX8A=</serial> 
        <serial>0104630390611041215Fa5FQ=zX/Ugf91EE10922grIAicYtt5x0++Yiipg+XEEmHFsVFPUv3EbkbbAfy8=</serial> 
        </serials>
        <lp_tara_code>492380</lp_tara_code> 
        <uom>шт</uom> 
        </line>
      - <line>
        <sku>483075</sku> 
        <line_no>483075</line_no> 
        <ordered_quantity>10.00000</ordered_quantity> 
        <ordered_orig_quantity>10.00000</ordered_orig_quantity> 
        <processed_quantity>2.00000</processed_quantity> 
        <reserved_quantity>2.00000</reserved_quantity> 
        <picked_quantity>2.00000</picked_quantity> 
        <checked_quantity>2.00000</checked_quantity> 
        <ready_quantity>2.00000</ready_quantity> 
        <staged_quantity>2.00000</staged_quantity> 
        <loaded_quantity>0.00000</loaded_quantity> 
        <shipped_quantity>0.00000</shipped_quantity> 
        <intransit_quantity>0.00000</intransit_quantity> 
        <delivered_quantity>0.00000</delivered_quantity> 
        <built_quantity>0</built_quantity> 
        <pallet>26W005537190</pallet> 
        <pallet_id>19731273</pallet_id> 
        <pallet_width>80.0</pallet_width> 
        <pallet_height>60.0</pallet_height> 
        <pallet_length>120.0</pallet_length> 
        <pallet_weight>3.7800000000000002</pallet_weight> 
      - <lp_info>
        <lp>26W005537190</lp> 
        <nest_level>2</nest_level> 
        <width>80.0</width> 
        <height>60.0</height> 
        <length>120.0</length> 
        <weight>3.7</weight> 
        </lp_info>
      - <serials>
        <serial>0104630390611041215VWnvhj%J2gqV91EE1092+rCGjWQUoJ8uVYV9t1J3VoMCuIYhCJH6cSfqgUEHiFI=</serial> 
        <serial>0104630390611041215=W)4dZUWtdtl91EE1092z/DsDV7Mb2HfHCCoROVwWUl1h5zLyj1oTMT0VN8EQBM=</serial> 
        </serials>
        <lp_tara_code>492380</lp_tara_code> 
        <uom>шт</uom> 
        </line>
      - <line>
        <sku>897824</sku> 
        <line_no>897824</line_no> 
        <ordered_quantity>10.00000</ordered_quantity> 
        <ordered_orig_quantity>10.00000</ordered_orig_quantity> 
        <processed_quantity>1.00000</processed_quantity> 
        <reserved_quantity>1.00000</reserved_quantity> 
        <picked_quantity>1.00000</picked_quantity> 
        <checked_quantity>1.00000</checked_quantity> 
        <ready_quantity>1.00000</ready_quantity> 
        <staged_quantity>1.00000</staged_quantity> 
        <loaded_quantity>0.00000</loaded_quantity> 
        <shipped_quantity>0.00000</shipped_quantity> 
        <intransit_quantity>0.00000</intransit_quantity> 
        <delivered_quantity>0.00000</delivered_quantity> 
        <built_quantity>0</built_quantity> 
        <pallet>26W005966541</pallet> 
        <pallet_id>19730641</pallet_id> 
        <pallet_width>80.0</pallet_width> 
        <pallet_height>60.0</pallet_height> 
        <pallet_length>120.0</pallet_length> 
        <pallet_weight>4.42</pallet_weight> 
      - <lp_info>
        <lp>26W005966541</lp> 
        <nest_level>2</nest_level> 
        <width>80.0</width> 
        <height>60.0</height> 
        <length>120.0</length> 
        <weight>3.7</weight> 
        </lp_info>
      - <serials>
        <serial>0104630390611058215OSYgdB-n6'Lr91EE1192rGG3BvtTK1pokD98HyHsHFZxr08YZM+uh3Kow0Ghr6M=</serial> 
        <serial>0104630390611058215sORi./&c,uC591EE1192exHQkVP6PC0vAPOpnKM3VNP92DwiWgkJ1/OjiLooxss=</serial> 
        <serial>0104630390611058215rG)WT=OUfNVZ91EE1192gQXAWVrKE5maYwTgNi4pvo2eNFSgIXNeOKZ8ZOYiELY=</serial> 
        <serial>01046303906110582158InFkie8%LJX91EE1092gDUYhSDUNFr7NlQsPrA0ymMyTXFUSqjjnFg7c1ybBv0=</serial> 
        </serials>
        <lp_tara_code>492380</lp_tara_code> 
        <uom>шт</uom> 
        </line>
      - <line>
        <sku>897824</sku> 
        <line_no>897824</line_no> 
        <ordered_quantity>10.00000</ordered_quantity> 
        <ordered_orig_quantity>10.00000</ordered_orig_quantity> 
        <processed_quantity>6.00000</processed_quantity> 
        <reserved_quantity>6.00000</reserved_quantity> 
        <picked_quantity>6.00000</picked_quantity> 
        <checked_quantity>6.00000</checked_quantity> 
        <ready_quantity>6.00000</ready_quantity> 
        <staged_quantity>6.00000</staged_quantity> 
        <loaded_quantity>0.00000</loaded_quantity> 
        <shipped_quantity>0.00000</shipped_quantity> 
        <intransit_quantity>0.00000</intransit_quantity> 
        <delivered_quantity>0.00000</delivered_quantity> 
        <built_quantity>0</built_quantity> 
        <pallet>26W005537210</pallet> 
        <pallet_id>19730722</pallet_id> 
        <pallet_width>80.0</pallet_width> 
        <pallet_height>60.0</pallet_height> 
        <pallet_length>120.0</pallet_length> 
        <pallet_weight>4.300000000000001</pallet_weight> 
      - <lp_info>
        <lp>26W005537210</lp> 
        <nest_level>2</nest_level> 
        <width>80.0</width> 
        <height>60.0</height> 
        <length>120.0</length> 
        <weight>3.7</weight> 
        </lp_info>
      - <serials>
        <serial>0104630390611058215ke,bmUDY)VAM91EE1192yUrPz7s0eVIwdAuGYZ1qqnG0Vz7rwukZHghHvf/cgy8=</serial> 
        <serial>0104630390611058215qL)HSfBfVG+/91EE119277S8nf/4IXwB5WqX9cVB8AwrZxH40vQZwWBIquW9whc=</serial> 
        <serial>0104630390611058215UT<okJ3M'lqs91EE1192RdyqdgBbwnZDg1ROq3KWuytQV/WHn3Z/5ZXC1bd7wy4=</serial> 
        <serial>0104630390611058215qB)MKtwwuy_q91EE1192W+2vvoPxl/B406JWh2Vmc3OvGlW1mPGzntlnVfWZI20=</serial> 
        <serial>0104630390611058215CB&j'JgZ1LUw91EE1192hlHrF3kbpog0Msz8JwrdIiuQKl8wiZW2g4D5lr3dSPI=</serial> 
        <serial>0104630390611058215fWPpuoCEBRpC91EE1192Mr99zY+YUsi9bXC9VIHznwpenIE5gHNKNThlg8KuCl0=</serial> 
        </serials>
        <lp_tara_code>492380</lp_tara_code> 
        <uom>шт</uom> 
        </line>
      - <line>
        <sku>897824</sku> 
        <line_no>897824</line_no> 
        <ordered_quantity>10.00000</ordered_quantity> 
        <ordered_orig_quantity>10.00000</ordered_orig_quantity> 
        <lot_string>0040278956</lot_string> 
        <processed_quantity>3.00000</processed_quantity> 
        <reserved_quantity>3.00000</reserved_quantity> 
        <picked_quantity>3.00000</picked_quantity> 
        <checked_quantity>3.00000</checked_quantity> 
        <ready_quantity>3.00000</ready_quantity> 
        <staged_quantity>3.00000</staged_quantity> 
        <loaded_quantity>0.00000</loaded_quantity> 
        <shipped_quantity>0.00000</shipped_quantity> 
        <intransit_quantity>0.00000</intransit_quantity> 
        <delivered_quantity>0.00000</delivered_quantity> 
        <built_quantity>0</built_quantity> 
        <pallet>26W005966541</pallet> 
        <pallet_id>19730641</pallet_id> 
        <pallet_width>80.0</pallet_width> 
        <pallet_height>60.0</pallet_height> 
        <pallet_length>120.0</pallet_length> 
        <pallet_weight>4.42</pallet_weight> 
      - <lp_info>
        <lp>26W005966541</lp> 
        <nest_level>2</nest_level> 
        <width>80.0</width> 
        <height>60.0</height> 
        <length>120.0</length> 
        <weight>3.7</weight> 
        </lp_info>
      - <attributes>
      - <attribute>
        <name>accountedFGIS</name> 
        <value>0</value> 
        </attribute>
      - <attribute>
        <name>PO</name> 
        <value>0203052373</value> 
        </attribute>
        </attributes>
      - <serials>
        <serial>0104630390611058215OSYgdB-n6'Lr91EE1192rGG3BvtTK1pokD98HyHsHFZxr08YZM+uh3Kow0Ghr6M=</serial> 
        <serial>0104630390611058215sORi./&c,uC591EE1192exHQkVP6PC0vAPOpnKM3VNP92DwiWgkJ1/OjiLooxss=</serial> 
        <serial>0104630390611058215rG)WT=OUfNVZ91EE1192gQXAWVrKE5maYwTgNi4pvo2eNFSgIXNeOKZ8ZOYiELY=</serial> 
        </serials>
        <lp_tara_code>492380</lp_tara_code> 
        <uom>шт</uom> 
        </line>
        </lines>
        </document>
        </documents>
        </instock>



        <?xml version="1.0" encoding="UTF-8"?>
<instock>
	<id>ID30689058</id>
	<date>2025-05-21 10:28:26</date>
	<owner>01</owner>
	<whse>04</whse>
	<documents>
		<document type="SO">
			<header>
				<doc_number>0204225252</doc_number>
				<status>PACKED</status>
				<type>00440</type>
				<method>SO</method>
				<created_date>2025-05-07 00:00:00</created_date>
				<source_system>LF</source_system>
				<reference1>17642847</reference1>
				<reference2>Елена Медведева, Индивидуальный предприниматель Медведева Елена Александровна</reference2>
				<reference3>676290, Амурская обл, Тында г, Красная Пресня ул, д.39, кв.52</reference3>
				<reference4>Медведева Е.А. ИП (МАЗ) ЭДО</reference4>
				<reference5>0204732561</reference5>
				<reference6>№8_Северо-Восток</reference6>
				<reference7>02. Доставка через ТК до терминала</reference7>
				<reference10>Р2050</reference10>
				<receiverId>Р2050</receiverId>
				<loading>0</loading>
			</header>
			<lines>
				<line>
					<sku>483075</sku>
					<line_no>483075</line_no>
					<ordered_quantity>10.00000</ordered_quantity>
					<ordered_orig_quantity>10.00000</ordered_orig_quantity>
					<processed_quantity>8.00000</processed_quantity>
					<reserved_quantity>8.00000</reserved_quantity>
					<picked_quantity>8.00000</picked_quantity>
					<checked_quantity>8.00000</checked_quantity>
					<ready_quantity>8.00000</ready_quantity>
					<staged_quantity>8.00000</staged_quantity>
					<loaded_quantity>0.00000</loaded_quantity>
					<shipped_quantity>0.00000</shipped_quantity>
					<intransit_quantity>0.00000</intransit_quantity>
					<delivered_quantity>0.00000</delivered_quantity>
					<built_quantity>0</built_quantity>
					<pallet>26W005966541</pallet>
					<pallet_id>19730641</pallet_id>
					<pallet_width>80.0</pallet_width>
					<pallet_height>60.0</pallet_height>
					<pallet_length>120.0</pallet_length>
					<pallet_weight>4.42</pallet_weight>
					<lp_info>
						<lp>26W005966541</lp>
						<nest_level>2</nest_level>
						<width>80.0</width>
						<height>60.0</height>
						<length>120.0</length>
						<weight>3.7</weight>
					</lp_info>
					<serials>
						<serial>0104630390611041215/EyT-O'VH8oM91EE109263HUTvDbE7y0UZuN358oezcbb5O4iN9eWADd8LMoOxc=</serial>
						<serial>0104630390611041215JNdmn1eGzMRa91EE1092DXPsrC0/gJoRID72zvrRg4XUX+qNRoZZRZeC4dwkFkI=</serial>
						<serial>01046303906110412158I:6*LKSINGG91EE1092PGLhIq0UAGZu+koF2WgKj5bXC9rNQReBD6uhJUMbGP4=</serial>
						<serial>0104630390611041215!6HnRFbXbuI191EE1092Pj+w5MNs7QLgiU/pCDc/Y/ckr6YkE1sVcygNnXnuYoQ=</serial>
						<serial>0104630390611041215ytDlPSlZa//R91EE1092if2hN23/E80gG6x2/ROlnl4khpQsIOhkr7QjhW1wMtY=</serial>
						<serial>0104630390611041215Ppkx"OEsO6gw91EE1092wddxFavFAHfRVLcDysPW3dalOxK9GKJhSJzxaVB2a5I=</serial>
						<serial>01046303906110412153k0MX&lt;XO*NL?91EE1092F3/SCmlgeVbGNH3GIzKlVjOW4iIA9nyJtrsy5t4oX8A=</serial>
						<serial>0104630390611041215Fa5FQ=zX/Ugf91EE10922grIAicYtt5x0++Yiipg+XEEmHFsVFPUv3EbkbbAfy8=</serial>
					</serials>
					<lp_tara_code>492380</lp_tara_code>
					<uom>шт</uom>
				</line>
				<line>
					<sku>483075</sku>
					<line_no>483075</line_no>
					<ordered_quantity>10.00000</ordered_quantity>
					<ordered_orig_quantity>10.00000</ordered_orig_quantity>
					<processed_quantity>2.00000</processed_quantity>
					<reserved_quantity>2.00000</reserved_quantity>
					<picked_quantity>2.00000</picked_quantity>
					<checked_quantity>2.00000</checked_quantity>
					<ready_quantity>2.00000</ready_quantity>
					<staged_quantity>2.00000</staged_quantity>
					<loaded_quantity>0.00000</loaded_quantity>
					<shipped_quantity>0.00000</shipped_quantity>
					<intransit_quantity>0.00000</intransit_quantity>
					<delivered_quantity>0.00000</delivered_quantity>
					<built_quantity>0</built_quantity>
					<pallet>26W005537190</pallet>
					<pallet_id>19731273</pallet_id>
					<pallet_width>80.0</pallet_width>
					<pallet_height>60.0</pallet_height>
					<pallet_length>120.0</pallet_length>
					<pallet_weight>3.7800000000000002</pallet_weight>
					<lp_info>
						<lp>26W005537190</lp>
						<nest_level>2</nest_level>
						<width>80.0</width>
						<height>60.0</height>
						<length>120.0</length>
						<weight>3.7</weight>
					</lp_info>
					<serials>
						<serial>0104630390611041215VWnvhj%J2gqV91EE1092+rCGjWQUoJ8uVYV9t1J3VoMCuIYhCJH6cSfqgUEHiFI=</serial>
						<serial>0104630390611041215=W)4dZUWtdtl91EE1092z/DsDV7Mb2HfHCCoROVwWUl1h5zLyj1oTMT0VN8EQBM=</serial>
					</serials>
					<lp_tara_code>492380</lp_tara_code>
					<uom>шт</uom>
				</line>
				<line>
					<sku>897824</sku>
					<line_no>897824</line_no>
					<ordered_quantity>10.00000</ordered_quantity>
					<ordered_orig_quantity>10.00000</ordered_orig_quantity>
					<processed_quantity>1.00000</processed_quantity>
					<reserved_quantity>1.00000</reserved_quantity>
					<picked_quantity>1.00000</picked_quantity>
					<checked_quantity>1.00000</checked_quantity>
					<ready_quantity>1.00000</ready_quantity>
					<staged_quantity>1.00000</staged_quantity>
					<loaded_quantity>0.00000</loaded_quantity>
					<shipped_quantity>0.00000</shipped_quantity>
					<intransit_quantity>0.00000</intransit_quantity>
					<delivered_quantity>0.00000</delivered_quantity>
					<built_quantity>0</built_quantity>
					<pallet>26W005966541</pallet>
					<pallet_id>19730641</pallet_id>
					<pallet_width>80.0</pallet_width>
					<pallet_height>60.0</pallet_height>
					<pallet_length>120.0</pallet_length>
					<pallet_weight>4.42</pallet_weight>
					<lp_info>
						<lp>26W005966541</lp>
						<nest_level>2</nest_level>
						<width>80.0</width>
						<height>60.0</height>
						<length>120.0</length>
						<weight>3.7</weight>
					</lp_info>
					<serials>
						<serial>0104630390611058215OSYgdB-n6'Lr&#x1d;91EE11&#x1d;92rGG3BvtTK1pokD98HyHsHFZxr08YZM+uh3Kow0Ghr6M=</serial>
						<serial>0104630390611058215sORi./&amp;c,uC5&#x1d;91EE11&#x1d;92exHQkVP6PC0vAPOpnKM3VNP92DwiWgkJ1/OjiLooxss=</serial>
						<serial>0104630390611058215rG)WT=OUfNVZ&#x1d;91EE11&#x1d;92gQXAWVrKE5maYwTgNi4pvo2eNFSgIXNeOKZ8ZOYiELY=</serial>
						<serial>01046303906110582158InFkie8%LJX91EE1092gDUYhSDUNFr7NlQsPrA0ymMyTXFUSqjjnFg7c1ybBv0=</serial>
					</serials>
					<lp_tara_code>492380</lp_tara_code>
					<uom>шт</uom>
				</line>
				<line>
					<sku>897824</sku>
					<line_no>897824</line_no>
					<ordered_quantity>10.00000</ordered_quantity>
					<ordered_orig_quantity>10.00000</ordered_orig_quantity>
					<processed_quantity>6.00000</processed_quantity>
					<reserved_quantity>6.00000</reserved_quantity>
					<picked_quantity>6.00000</picked_quantity>
					<checked_quantity>6.00000</checked_quantity>
					<ready_quantity>6.00000</ready_quantity>
					<staged_quantity>6.00000</staged_quantity>
					<loaded_quantity>0.00000</loaded_quantity>
					<shipped_quantity>0.00000</shipped_quantity>
					<intransit_quantity>0.00000</intransit_quantity>
					<delivered_quantity>0.00000</delivered_quantity>
					<built_quantity>0</built_quantity>
					<pallet>26W005537210</pallet>
					<pallet_id>19730722</pallet_id>
					<pallet_width>80.0</pallet_width>
					<pallet_height>60.0</pallet_height>
					<pallet_length>120.0</pallet_length>
					<pallet_weight>4.300000000000001</pallet_weight>
					<lp_info>
						<lp>26W005537210</lp>
						<nest_level>2</nest_level>
						<width>80.0</width>
						<height>60.0</height>
						<length>120.0</length>
						<weight>3.7</weight>
					</lp_info>
					<serials>
						<serial>0104630390611058215ke,bmUDY)VAM91EE1192yUrPz7s0eVIwdAuGYZ1qqnG0Vz7rwukZHghHvf/cgy8=</serial>
						<serial>0104630390611058215qL)HSfBfVG+/91EE119277S8nf/4IXwB5WqX9cVB8AwrZxH40vQZwWBIquW9whc=</serial>
						<serial>0104630390611058215UT&lt;okJ3M'lqs91EE1192RdyqdgBbwnZDg1ROq3KWuytQV/WHn3Z/5ZXC1bd7wy4=</serial>
						<serial>0104630390611058215qB)MKtwwuy_q91EE1192W+2vvoPxl/B406JWh2Vmc3OvGlW1mPGzntlnVfWZI20=</serial>
						<serial>0104630390611058215CB&amp;j'JgZ1LUw91EE1192hlHrF3kbpog0Msz8JwrdIiuQKl8wiZW2g4D5lr3dSPI=</serial>
						<serial>0104630390611058215fWPpuoCEBRpC91EE1192Mr99zY+YUsi9bXC9VIHznwpenIE5gHNKNThlg8KuCl0=</serial>
					</serials>
					<lp_tara_code>492380</lp_tara_code>
					<uom>шт</uom>
				</line>
				<line>
					<sku>897824</sku>
					<line_no>897824</line_no>
					<ordered_quantity>10.00000</ordered_quantity>
					<ordered_orig_quantity>10.00000</ordered_orig_quantity>
					<lot_string>0040278956</lot_string>
					<processed_quantity>3.00000</processed_quantity>
					<reserved_quantity>3.00000</reserved_quantity>
					<picked_quantity>3.00000</picked_quantity>
					<checked_quantity>3.00000</checked_quantity>
					<ready_quantity>3.00000</ready_quantity>
					<staged_quantity>3.00000</staged_quantity>
					<loaded_quantity>0.00000</loaded_quantity>
					<shipped_quantity>0.00000</shipped_quantity>
					<intransit_quantity>0.00000</intransit_quantity>
					<delivered_quantity>0.00000</delivered_quantity>
					<built_quantity>0</built_quantity>
					<pallet>26W005966541</pallet>
					<pallet_id>19730641</pallet_id>
					<pallet_width>80.0</pallet_width>
					<pallet_height>60.0</pallet_height>
					<pallet_length>120.0</pallet_length>
					<pallet_weight>4.42</pallet_weight>
					<lp_info>
						<lp>26W005966541</lp>
						<nest_level>2</nest_level>
						<width>80.0</width>
						<height>60.0</height>
						<length>120.0</length>
						<weight>3.7</weight>
					</lp_info>
					<attributes>
						<attribute>
							<name>accountedFGIS</name>
							<value>0</value>
						</attribute>
						<attribute>
							<name>PO</name>
							<value>0203052373</value>
						</attribute>
					</attributes>
					<serials>
						<serial>0104630390611058215OSYgdB-n6'Lr&#x1d;91EE11&#x1d;92rGG3BvtTK1pokD98HyHsHFZxr08YZM+uh3Kow0Ghr6M=</serial>
						<serial>0104630390611058215sORi./&amp;c,uC5&#x1d;91EE11&#x1d;92exHQkVP6PC0vAPOpnKM3VNP92DwiWgkJ1/OjiLooxss=</serial>
						<serial>0104630390611058215rG)WT=OUfNVZ&#x1d;91EE11&#x1d;92gQXAWVrKE5maYwTgNi4pvo2eNFSgIXNeOKZ8ZOYiELY=</serial>
					</serials>
					<lp_tara_code>492380</lp_tara_code>
					<uom>шт</uom>
				</line>
			</lines>
		</document>
	</documents>
</instock>



0104630390611041215:,WsB?kgc.F&91EE1192Es1f+0bfnzZjYanLQuhei9bE6G3Hq7SuielhvjAMPgA=
0

0104630390611041215>AokKJ?zHllr91EE1192rbjYVAMMzgBYqrPv+7WugpFjznGVF2Q/S3xv60HFqy0=
0

01046303906110412154'GcbP2&mUmA91EE1192pOvZhIp78wK2aIYAin4ABJnV2ksCMp1T63yJLDNnheQ=
0

0104630390611041215dId3/6IkgHg<91EE1192QyGasu8L8cmfFFNcpdgC7tReV5kZVvACtlPieic8OjY=
0

0104630390611041215F0m1,ppq;Wd!91EE119288la6hAqeigpD+/7+sYmILH+sQ6o8bKj3L162pVnb5Q=
0

0104630390611041215hugwb;2?ZJS+91EE1192dde6vz81rltn4gnzxw0lpyq8PD/3N/2SwtjGC4sFKXE=
0

0104630390611041215i)O<C0cckG0W91EE11922kJ9pqWkVbrDdxuWnPFspe2eQQEp8R0KCEzf4XX4BN4=
0

0104630390611041215kpozWS=JhLlB91EE1192EQC7KaWnucT5JNH0+FL9qxEfQhwUYCTwEfamBww0srY=
0

0104630390611041215kS4vT4GhTvNt91EE1192g0U5Whp5pfmBqaUeA3nuN9eY2o273v9Ei+usEXEPZWg=
0

0104630390611041215pSraXoQU/V4d91EE1192qDjflAUrPxiGmqT1wq0MTLEAbfHhv2v4G7Lh0XcmbsQ=
0

0104630390611041215qbZfq4F5sBwp91EE1192fhfQlJInufGBjr3WnbBgP9slj/ge06wYp+R+ZLcd3uA=
0

0104630390611041215wKLHmXD._&Lt91EE1192xpse2e1GKwDSJIpVMJQj2VzcencP53p1+TI3DrRWUfo=
0

0104630390611041215ZHl.*TfUmt?e91EE1192JgSpyr/OnwuabSfM9qqfG15Y6Y1yvtsd/IpiYPFZyG8=


0104607025849537215HT+PbX*GQ5DY91EE1092giU5mViblJeyiEN+O8RCkke3Zz9LVifmxRthoGcrKBI=


0104604725000954215g!um_'gScnfy91EE1092rYeOl91hGX/0+X6XLggIZEmtF7RBIXoNg2wA/GtnMOU=






<?xml version="1.0" encoding="UTF-8" ?> 
- <instock>
  <id>ID30805917</id> 
  <date>2025-05-21 16:40:29</date> 
  <owner>01</owner> 
  <whse>04</whse> 
- <documents>
- <document type="SO">
- <header>
  <doc_number>0204907292</doc_number> 
  <status>PACKED</status> 
  <type>00560</type> 
  <method>SO</method> 
  <created_date>2025-05-17 00:00:00</created_date> 
  <processed_date>2025-05-18 08:47:23</processed_date> 
  <source_system>LF</source_system> 
  <reference3 /> 
  <reference4>АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)</reference4> 
  <reference5>0204875451</reference5> 
  <reference6>№8_Северо-Восток</reference6> 
  <reference7>17. Доставка перемещений плановых</reference7> 
  <reference10>В7546</reference10> 
  <receiverId>В7546</receiverId> 
  <loading>0</loading> 
  </header>
- <lines>
- <line>
  <sku>824289</sku> 
  <line_no>824289</line_no> 
  <ordered_quantity>11.00000</ordered_quantity> 
  <ordered_orig_quantity>11.00000</ordered_orig_quantity> 
  <lot_string>0040188241</lot_string> 
  <processed_quantity>9.00000</processed_quantity> 
  <reserved_quantity>9.00000</reserved_quantity> 
  <picked_quantity>9.00000</picked_quantity> 
  <checked_quantity>9.00000</checked_quantity> 
  <ready_quantity>9.00000</ready_quantity> 
  <staged_quantity>0.00000</staged_quantity> 
  <loaded_quantity>0.00000</loaded_quantity> 
  <shipped_quantity>9.00000</shipped_quantity> 
  <intransit_quantity>9.00000</intransit_quantity> 
  <delivered_quantity>0.00000</delivered_quantity> 
  <built_quantity>0</built_quantity> 
  <pallet>26W006196995</pallet> 
  <pallet_id>19752902</pallet_id> 
  <pallet_width>80.0</pallet_width> 
  <pallet_height>60.0</pallet_height> 
  <pallet_length>120.0</pallet_length> 
  <pallet_weight>13.0</pallet_weight> 
- <lp_info>
  <lp>26W006196995</lp> 
  <nest_level>2</nest_level> 
  <width>80.0</width> 
  <height>60.0</height> 
  <length>120.0</length> 
  <weight>3.7</weight> 
  </lp_info>
  <transport_id>М433ТУ797_250518_5</transport_id> 
- <attributes>
- <attribute>
  <name>accountedFGIS</name> 
  <value>0</value> 
  </attribute>
- <attribute>
  <name>PO</name> 
  <value>0202450325</value> 
  </attribute>
  </attributes>
- <serials>
  <serial>0104670238021632215&dmTIiFsKhOd91EE1092dQ9JS9edHfu9oMGhlhCp6+wnNbrmC2CB7+5Fu07Ng1E=</serial> 
  <serial>0104670238021632215!cLT?fnH!UCg91EE1092Wtjm0EJu+unqTGCGmyjU5HiRvAus1xrdlmzoU9biBBw=</serial> 
  <serial>0104670238021632215!HWaB-u)fITc91EE1092CrhwMqBUo3ob9mvqPmy1IvAQPhc/IDSwOaCmEHBZUxU=</serial> 
  <serial>0104670238021632215&cWd3;rKMKb/91EE1092PwhF22v57/8zl9LNAICvSXxf97NWXXB9uGyuhr4iwXQ=</serial> 
  <serial>0104670238021632215&DKp5gJcK1>a91EE1092Wa42C8vhqiDgh2if8zjvMaxyngV7tdAe4vpG6SxdX4o=</serial> 
  <serial>0104670238021632215!9O3!ynqFTRj91EE1092FDpMF1UDYvbBfOQPFiNY2RhY2qSza6vmq/jI3Jz1yKo=</serial> 
  <serial>0104670238021632215!akG_5mh-pI:91EE1092UTgHYFMtClwaGUWaQIB547R087IjSkR6Dy+zbg0neRU=</serial> 
  <serial>0104670238021632215!nkhW_q!or9w91EE10926VC3fCQUV3G3TcuIXgeDZ7B/4qWiPxMEbiJPQESz/B4=</serial> 
  <serial>0104670238021632215!dmIitRTZ?HJ91EE1092lFkxBvnge41twJddqDR0vMghS4rRhBJy2GiIIzlGqTY=</serial> 
  </serials>
  <lp_tara_code>492380</lp_tara_code> 
  <uom>шт</uom> 
- <item>
  <owner>01</owner> 
  <whse>04</whse> 
  <sku>824289</sku> 
  <description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</description> 
  <short_description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</short_description> 
  <rf_screen_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_screen_description> 
  <rf_list_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_list_description> 
  <lot_track_lot>0</lot_track_lot> 
  <lot_track_po>1</lot_track_po> 
  <lot_track_exp_date>0</lot_track_exp_date> 
  <lot_track_mfg_date>0</lot_track_mfg_date> 
  <lot_track>0</lot_track> 
  <track_tara>0</track_tara> 
  <active>1</active> 
  <pick_zone_profile>Паллетная зона</pick_zone_profile> 
  <pick_fefo_window>0</pick_fefo_window> 
  <pick_fifo_window>0</pick_fifo_window> 
  <put_fefo_window>0</put_fefo_window> 
  <put_fifo_window>0</put_fifo_window> 
  <price>226.4</price> 
  <skip_scan>0</skip_scan> 
  <weight_product>0</weight_product> 
  <uom_lot_controlled>0</uom_lot_controlled> 
- <sku_groups>
- <sku_group>
  <code>Жилет</code> 
  <name>Жилет</name> 
  </sku_group>
- <sku_group>
  <code>Аест подтверждения ввода на наборе</code> 
  <name>Аест подтверждения ввода на наборе</name> 
  </sku_group>
- <sku_group>
  <code>Группа МГХ 3</code> 
  <name>Группа МГХ 3</name> 
  </sku_group>
- <sku_group>
  <code>Паллетка Сотрудник</code> 
  <name>Паллетка Сотрудник</name> 
  </sku_group>
- <sku_group>
  <code>ЧЗ</code> 
  <name>ЧЗ</name> 
  </sku_group>
  </sku_groups>
  <serial_control>PO_SO_DETAIL</serial_control> 
  <reference1>20022XXXL</reference1> 
  <reference4>20022XXXL</reference4> 
  <reference10>ТОП АВТО</reference10> 
- <barcodes>
- <barcode>
  <name>ARTBAR</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>4670238021632</value> 
  <scanned>0</scanned> 
  </barcode>
- <barcode>
  <name>ARTBAR</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>0</user_collected> 
  <value>20022</value> 
  </barcode>
- <barcode>
  <name>EAN13</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>4620752787835</value> 
  <scanned>0</scanned> 
  </barcode>
- <barcode>
  <name>KODTOV</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>0</user_collected> 
  <value>824289</value> 
  <scanned>0</scanned> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7212120</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7212132</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7218105</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7218133VR7218133</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7572038</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7572042</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7751439</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7751457</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7751458</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7878088</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7883182</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7887761</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7897004</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7931690</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7988440</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8018291</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8025874</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8034976</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8053577</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8062751</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8068157</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074551</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074558</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074571</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074575</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8090133</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8100768</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8110426</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128202</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128203</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128204</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128205</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8135776</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8145675</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8145676</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8182525</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8224272</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8224276</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8232865</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8232874</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284246</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284340</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284399</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284452</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8289355</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8306164</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321300</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321529VR8321529</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321530VR8321530</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321531VR8321531</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321532VR8321532</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321532VR8321532</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321533VR8321533</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321534</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321995</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8322091</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8339421</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8341818</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8341826</value> 
  </barcode>
  </barcodes>
- <attributes>
- <attribute>
  <name>marked</name> 
  <value>0</value> 
  </attribute>
- <attribute>
  <name>warmStorage</name> 
  <value>Любой</value> 
  </attribute>
  </attributes>
- <uoms>
- <uom>
  <name>шт</name> 
  <rf_name>шт</rf_name> 
  <gui_name>шт</gui_name> 
  <description>шт</description> 
  <conversion_factor>1.0</conversion_factor> 
  <pick_uom>1</pick_uom> 
  <default_uom>1</default_uom> 
  <used_for_receiving>1</used_for_receiving> 
  <used_for_picking>1</used_for_picking> 
  <used_for_inv_ctrl>1</used_for_inv_ctrl> 
  <used_for_mfg>1</used_for_mfg> 
  <show_in_rf>1</show_in_rf> 
  <show_in_fv>1</show_in_fv> 
- <physical_chars type="gross">
  <weight>0.1</weight> 
  <width>24.0</width> 
  <height>1.0</height> 
  <length>26.0</length> 
  </physical_chars>
  </uom>
  </uoms>
  <subject_to_fgis>1</subject_to_fgis> 
  </item>
  </line>
- <line>
  <sku>824289</sku> 
  <line_no>824289</line_no> 
  <ordered_quantity>11.00000</ordered_quantity> 
  <ordered_orig_quantity>11.00000</ordered_orig_quantity> 
  <lot_string>0040188241</lot_string> 
  <processed_quantity>2.00000</processed_quantity> 
  <reserved_quantity>2.00000</reserved_quantity> 
  <picked_quantity>2.00000</picked_quantity> 
  <checked_quantity>2.00000</checked_quantity> 
  <ready_quantity>2.00000</ready_quantity> 
  <staged_quantity>0.00000</staged_quantity> 
  <loaded_quantity>0.00000</loaded_quantity> 
  <shipped_quantity>2.00000</shipped_quantity> 
  <intransit_quantity>2.00000</intransit_quantity> 
  <delivered_quantity>0.00000</delivered_quantity> 
  <built_quantity>0</built_quantity> 
  <pallet>26W006196994</pallet> 
  <pallet_id>19752994</pallet_id> 
  <pallet_width>80.0</pallet_width> 
  <pallet_height>60.0</pallet_height> 
  <pallet_length>120.0</pallet_length> 
  <pallet_weight>1.0</pallet_weight> 
- <lp_info>
  <lp>26W006196994</lp> 
  <nest_level>2</nest_level> 
  <width>80.0</width> 
  <height>60.0</height> 
  <length>120.0</length> 
  <weight>3.7</weight> 
  </lp_info>
  <transport_id>М433ТУ797_250518_5</transport_id> 
- <attributes>
- <attribute>
  <name>accountedFGIS</name> 
  <value>0</value> 
  </attribute>
- <attribute>
  <name>PO</name> 
  <value>0202450325</value> 
  </attribute>
  </attributes>
- <serials>
  <serial>0104670238021632215!RaeILiFe%li91EE1092FLnr0xs5cSe4YLculS9NlXz76GVEOPvY2oUuaQ9d8ug=</serial> 
  <serial>0104670238021632215-!Km83!hvB:N91EE1092H0d5wZVR9ETKc6k+LoqSn/j5VNurawu20Dw2M8y5NPE=</serial> 
  </serials>
  <lp_tara_code>492380</lp_tara_code> 
  <uom>шт</uom> 
- <item>
  <owner>01</owner> 
  <whse>04</whse> 
  <sku>824289</sku> 
  <description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</description> 
  <short_description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</short_description> 
  <rf_screen_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_screen_description> 
  <rf_list_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_list_description> 
  <lot_track_lot>0</lot_track_lot> 
  <lot_track_po>1</lot_track_po> 
  <lot_track_exp_date>0</lot_track_exp_date> 
  <lot_track_mfg_date>0</lot_track_mfg_date> 
  <lot_track>0</lot_track> 
  <track_tara>0</track_tara> 
  <active>1</active> 
  <pick_zone_profile>Паллетная зона</pick_zone_profile> 
  <pick_fefo_window>0</pick_fefo_window> 
  <pick_fifo_window>0</pick_fifo_window> 
  <put_fefo_window>0</put_fefo_window> 
  <put_fifo_window>0</put_fifo_window> 
  <price>226.4</price> 
  <skip_scan>0</skip_scan> 
  <weight_product>0</weight_product> 
  <uom_lot_controlled>0</uom_lot_controlled> 
- <sku_groups>
- <sku_group>
  <code>Жилет</code> 
  <name>Жилет</name> 
  </sku_group>
- <sku_group>
  <code>Аест подтверждения ввода на наборе</code> 
  <name>Аест подтверждения ввода на наборе</name> 
  </sku_group>
- <sku_group>
  <code>Группа МГХ 3</code> 
  <name>Группа МГХ 3</name> 
  </sku_group>
- <sku_group>
  <code>Паллетка Сотрудник</code> 
  <name>Паллетка Сотрудник</name> 
  </sku_group>
- <sku_group>
  <code>ЧЗ</code> 
  <name>ЧЗ</name> 
  </sku_group>
  </sku_groups>
  <serial_control>PO_SO_DETAIL</serial_control> 
  <reference1>20022XXXL</reference1> 
  <reference4>20022XXXL</reference4> 
  <reference10>ТОП АВТО</reference10> 
- <barcodes>
- <barcode>
  <name>ARTBAR</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>4670238021632</value> 
  <scanned>0</scanned> 
  </barcode>
- <barcode>
  <name>ARTBAR</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>0</user_collected> 
  <value>20022</value> 
  </barcode>
- <barcode>
  <name>EAN13</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>4620752787835</value> 
  <scanned>0</scanned> 
  </barcode>
- <barcode>
  <name>KODTOV</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>0</user_collected> 
  <value>824289</value> 
  <scanned>0</scanned> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7212120</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7212132</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7218105</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7218133VR7218133</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7572038</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7572042</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7751439</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7751457</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7751458</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7878088</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7883182</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7887761</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7897004</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7931690</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR7988440</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8018291</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8025874</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8034976</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8053577</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8062751</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8068157</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074551</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074558</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074571</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8074575</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8090133</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8100768</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8110426</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128202</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128203</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128204</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8128205</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8135776</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8145675</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8145676</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8182525</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8224272</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8224276</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8232865</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8232874</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284246</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284340</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284399</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8284452</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8289355</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8306164</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321300</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321529VR8321529</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321530VR8321530</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321531VR8321531</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321532VR8321532</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321532VR8321532</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321533VR8321533</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321534</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8321995</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8322091</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8339421</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8341818</value> 
  </barcode>
- <barcode>
  <name>TEMP</name> 
  <enabled>1</enabled> 
  <use_for_rf>1</use_for_rf> 
  <user_collected>1</user_collected> 
  <value>VR8341826</value> 
  </barcode>
  </barcodes>
- <attributes>
- <attribute>
  <name>marked</name> 
  <value>0</value> 
  </attribute>
- <attribute>
  <name>warmStorage</name> 
  <value>Любой</value> 
  </attribute>
  </attributes>
- <uoms>
- <uom>
  <name>шт</name> 
  <rf_name>шт</rf_name> 
  <gui_name>шт</gui_name> 
  <description>шт</description> 
  <conversion_factor>1.0</conversion_factor> 
  <pick_uom>1</pick_uom> 
  <default_uom>1</default_uom> 
  <used_for_receiving>1</used_for_receiving> 
  <used_for_picking>1</used_for_picking> 
  <used_for_inv_ctrl>1</used_for_inv_ctrl> 
  <used_for_mfg>1</used_for_mfg> 
  <show_in_rf>1</show_in_rf> 
  <show_in_fv>1</show_in_fv> 
- <physical_chars type="gross">
  <weight>0.1</weight> 
  <width>24.0</width> 
  <height>1.0</height> 
  <length>26.0</length> 
  </physical_chars>
  </uom>
  </uoms>
  <subject_to_fgis>1</subject_to_fgis> 
  </item>
  </line>
  </lines>
  </document>
  </documents>
  </instock>









  <?xml version="1.0" encoding="UTF-8"?>
<instock>
	<id>ID30805918</id>
	<date>2025-05-21 16:44:32</date>
	<owner>01</owner>
	<whse>04</whse>
	<documents>
		<document type="SO">
			<header>
				<doc_number>0204907292</doc_number>
				<status>PACKED</status>
				<type>00560</type>
				<method>SO</method>
				<created_date>2025-05-17 00:00:00</created_date>
				<processed_date>2025-05-18 08:47:23</processed_date>
				<source_system>LF</source_system>
				<reference3/>
				<reference4>АВТОСПЕЙС ООО(М)(бывш.Галс-Трейд)</reference4>
				<reference5>0204875451</reference5>
				<reference6>№8_Северо-Восток</reference6>
				<reference7>17. Доставка перемещений плановых</reference7>
				<reference10>В7546</reference10>
				<receiverId>В7546</receiverId>
				<loading>0</loading>
			</header>
			<lines>
				<line>
					<sku>824289</sku>
					<line_no>824289</line_no>
					<ordered_quantity>11.00000</ordered_quantity>
					<ordered_orig_quantity>11.00000</ordered_orig_quantity>
					<lot_string>0040188241</lot_string>
					<processed_quantity>9.00000</processed_quantity>
					<reserved_quantity>9.00000</reserved_quantity>
					<picked_quantity>9.00000</picked_quantity>
					<checked_quantity>9.00000</checked_quantity>
					<ready_quantity>9.00000</ready_quantity>
					<staged_quantity>0.00000</staged_quantity>
					<loaded_quantity>0.00000</loaded_quantity>
					<shipped_quantity>9.00000</shipped_quantity>
					<intransit_quantity>9.00000</intransit_quantity>
					<delivered_quantity>0.00000</delivered_quantity>
					<built_quantity>0</built_quantity>
					<pallet>26W006196995</pallet>
					<pallet_id>19752902</pallet_id>
					<pallet_width>80.0</pallet_width>
					<pallet_height>60.0</pallet_height>
					<pallet_length>120.0</pallet_length>
					<pallet_weight>13.0</pallet_weight>
					<lp_info>
						<lp>26W006196995</lp>
						<nest_level>2</nest_level>
						<width>80.0</width>
						<height>60.0</height>
						<length>120.0</length>
						<weight>3.7</weight>
					</lp_info>
					<transport_id>М433ТУ797_250518_5</transport_id>
					<attributes>
						<attribute>
							<name>accountedFGIS</name>
							<value>0</value>
						</attribute>
						<attribute>
							<name>PO</name>
							<value>0202450325</value>
						</attribute>
					</attributes>
					<serials>
						<serial>0104670238021632215&amp;dmTIiFsKhOd91EE1092dQ9JS9edHfu9oMGhlhCp6+wnNbrmC2CB7+5Fu07Ng1E=</serial>
						<serial>0104670238021632215!cLT?fnH!UCg91EE1092Wtjm0EJu+unqTGCGmyjU5HiRvAus1xrdlmzoU9biBBw=</serial>
						<serial>0104670238021632215!HWaB-u)fITc91EE1092CrhwMqBUo3ob9mvqPmy1IvAQPhc/IDSwOaCmEHBZUxU=</serial>
						<serial>0104670238021632215&amp;cWd3;rKMKb/91EE1092PwhF22v57/8zl9LNAICvSXxf97NWXXB9uGyuhr4iwXQ=</serial>
						<serial>0104670238021632215&amp;DKp5gJcK1&gt;a91EE1092Wa42C8vhqiDgh2if8zjvMaxyngV7tdAe4vpG6SxdX4o=</serial>
						<serial>0104670238021632215!9O3!ynqFTRj91EE1092FDpMF1UDYvbBfOQPFiNY2RhY2qSza6vmq/jI3Jz1yKo=</serial>
						<serial>0104670238021632215!akG_5mh-pI:91EE1092UTgHYFMtClwaGUWaQIB547R087IjSkR6Dy+zbg0neRU=</serial>
						<serial>0104670238021632215!nkhW_q!or9w91EE10926VC3fCQUV3G3TcuIXgeDZ7B/4qWiPxMEbiJPQESz/B4=</serial>
						<serial>0104670238021632215!dmIitRTZ?HJ91EE1092lFkxBvnge41twJddqDR0vMghS4rRhBJy2GiIIzlGqTY=</serial>
					</serials>
					<lp_tara_code>492380</lp_tara_code>
					<uom>шт</uom>
					<item>
						<owner>01</owner>
						<whse>04</whse>
						<sku>824289</sku>
						<description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</description>
						<short_description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</short_description>
						<rf_screen_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_screen_description>
						<rf_list_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_list_description>
						<lot_track_lot>0</lot_track_lot>
						<lot_track_po>1</lot_track_po>
						<lot_track_exp_date>0</lot_track_exp_date>
						<lot_track_mfg_date>0</lot_track_mfg_date>
						<lot_track>0</lot_track>
						<track_tara>0</track_tara>
						<active>1</active>
						<pick_zone_profile>Паллетная зона</pick_zone_profile>
						<pick_fefo_window>0</pick_fefo_window>
						<pick_fifo_window>0</pick_fifo_window>
						<put_fefo_window>0</put_fefo_window>
						<put_fifo_window>0</put_fifo_window>
						<price>226.4</price>
						<skip_scan>0</skip_scan>
						<weight_product>0</weight_product>
						<uom_lot_controlled>0</uom_lot_controlled>
						<sku_groups>
							<sku_group>
								<code>Жилет</code>
								<name>Жилет</name>
							</sku_group>
							<sku_group>
								<code>Аест подтверждения ввода на наборе</code>
								<name>Аест подтверждения ввода на наборе</name>
							</sku_group>
							<sku_group>
								<code>Группа МГХ 3</code>
								<name>Группа МГХ 3</name>
							</sku_group>
							<sku_group>
								<code>Паллетка Сотрудник</code>
								<name>Паллетка Сотрудник</name>
							</sku_group>
							<sku_group>
								<code>ЧЗ</code>
								<name>ЧЗ</name>
							</sku_group>
						</sku_groups>
						<serial_control>PO_SO_DETAIL</serial_control>
						<reference1>20022XXXL</reference1>
						<reference4>20022XXXL</reference4>
						<reference10>ТОП АВТО</reference10>
						<barcodes>
							<barcode>
								<name>ARTBAR</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>4670238021632</value>
								<scanned>0</scanned>
							</barcode>
							<barcode>
								<name>ARTBAR</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>0</user_collected>
								<value>20022</value>
							</barcode>
							<barcode>
								<name>EAN13</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>4620752787835</value>
								<scanned>0</scanned>
							</barcode>
							<barcode>
								<name>KODTOV</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>0</user_collected>
								<value>824289</value>
								<scanned>0</scanned>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7212120</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7212132</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7218105</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7218133VR7218133</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7572038</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7572042</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7751439</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7751457</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7751458</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7878088</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7883182</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7887761</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7897004</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7931690</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7988440</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8018291</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8025874</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8034976</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8053577</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8062751</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8068157</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074551</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074558</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074571</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074575</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8090133</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8100768</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8110426</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128202</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128203</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128204</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128205</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8135776</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8145675</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8145676</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8182525</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8224272</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8224276</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8232865</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8232874</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284246</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284340</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284399</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284452</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8289355</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8306164</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321300</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321529VR8321529</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321530VR8321530</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321531VR8321531</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321532VR8321532</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321532VR8321532</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321533VR8321533</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321534</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321995</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8322091</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8339421</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8341818</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8341826</value>
							</barcode>
						</barcodes>
						<attributes>
							<attribute>
								<name>marked</name>
								<value>0</value>
							</attribute>
							<attribute>
								<name>warmStorage</name>
								<value>Любой</value>
							</attribute>
						</attributes>
						<uoms>
							<uom>
								<name>шт</name>
								<rf_name>шт</rf_name>
								<gui_name>шт</gui_name>
								<description>шт</description>
								<conversion_factor>1.0</conversion_factor>
								<pick_uom>1</pick_uom>
								<default_uom>1</default_uom>
								<used_for_receiving>1</used_for_receiving>
								<used_for_picking>1</used_for_picking>
								<used_for_inv_ctrl>1</used_for_inv_ctrl>
								<used_for_mfg>1</used_for_mfg>
								<show_in_rf>1</show_in_rf>
								<show_in_fv>1</show_in_fv>
								<physical_chars type="gross">
									<weight>0.1</weight>
									<width>24.0</width>
									<height>1.0</height>
									<length>26.0</length>
								</physical_chars>
							</uom>
						</uoms>
						<subject_to_fgis>1</subject_to_fgis>
					</item>
				</line>
				<line>
					<sku>824289</sku>
					<line_no>824289</line_no>
					<ordered_quantity>11.00000</ordered_quantity>
					<ordered_orig_quantity>11.00000</ordered_orig_quantity>
					<lot_string>0040188241</lot_string>
					<processed_quantity>2.00000</processed_quantity>
					<reserved_quantity>2.00000</reserved_quantity>
					<picked_quantity>2.00000</picked_quantity>
					<checked_quantity>2.00000</checked_quantity>
					<ready_quantity>2.00000</ready_quantity>
					<staged_quantity>0.00000</staged_quantity>
					<loaded_quantity>0.00000</loaded_quantity>
					<shipped_quantity>2.00000</shipped_quantity>
					<intransit_quantity>2.00000</intransit_quantity>
					<delivered_quantity>0.00000</delivered_quantity>
					<built_quantity>0</built_quantity>
					<pallet>26W006196994</pallet>
					<pallet_id>19752994</pallet_id>
					<pallet_width>80.0</pallet_width>
					<pallet_height>60.0</pallet_height>
					<pallet_length>120.0</pallet_length>
					<pallet_weight>1.0</pallet_weight>
					<lp_info>
						<lp>26W006196994</lp>
						<nest_level>2</nest_level>
						<width>80.0</width>
						<height>60.0</height>
						<length>120.0</length>
						<weight>3.7</weight>
					</lp_info>
					<transport_id>М433ТУ797_250518_5</transport_id>
					<attributes>
						<attribute>
							<name>accountedFGIS</name>
							<value>0</value>
						</attribute>
						<attribute>
							<name>PO</name>
							<value>0202450325</value>
						</attribute>
					</attributes>
					<serials>
						<serial>0104670238021632215!RaeILiFe%li91EE1092FLnr0xs5cSe4YLculS9NlXz76GVEOPvY2oUuaQ9d8ug=</serial>
						<serial>0104670238021632215-!Km83!hvB:N91EE1092H0d5wZVR9ETKc6k+LoqSn/j5VNurawu20Dw2M8y5NPE=</serial>
					</serials>
					<lp_tara_code>492380</lp_tara_code>
					<uom>шт</uom>
					<item>
						<owner>01</owner>
						<whse>04</whse>
						<sku>824289</sku>
						<description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</description>
						<short_description>Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</short_description>
						<rf_screen_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_screen_description>
						<rf_list_description>824289 - 20022XXXL - Жилет сигнальный (размер XXXL) светоотражающий салатовый ТОП АВТО</rf_list_description>
						<lot_track_lot>0</lot_track_lot>
						<lot_track_po>1</lot_track_po>
						<lot_track_exp_date>0</lot_track_exp_date>
						<lot_track_mfg_date>0</lot_track_mfg_date>
						<lot_track>0</lot_track>
						<track_tara>0</track_tara>
						<active>1</active>
						<pick_zone_profile>Паллетная зона</pick_zone_profile>
						<pick_fefo_window>0</pick_fefo_window>
						<pick_fifo_window>0</pick_fifo_window>
						<put_fefo_window>0</put_fefo_window>
						<put_fifo_window>0</put_fifo_window>
						<price>226.4</price>
						<skip_scan>0</skip_scan>
						<weight_product>0</weight_product>
						<uom_lot_controlled>0</uom_lot_controlled>
						<sku_groups>
							<sku_group>
								<code>Жилет</code>
								<name>Жилет</name>
							</sku_group>
							<sku_group>
								<code>Аест подтверждения ввода на наборе</code>
								<name>Аест подтверждения ввода на наборе</name>
							</sku_group>
							<sku_group>
								<code>Группа МГХ 3</code>
								<name>Группа МГХ 3</name>
							</sku_group>
							<sku_group>
								<code>Паллетка Сотрудник</code>
								<name>Паллетка Сотрудник</name>
							</sku_group>
							<sku_group>
								<code>ЧЗ</code>
								<name>ЧЗ</name>
							</sku_group>
						</sku_groups>
						<serial_control>PO_SO_DETAIL</serial_control>
						<reference1>20022XXXL</reference1>
						<reference4>20022XXXL</reference4>
						<reference10>ТОП АВТО</reference10>
						<barcodes>
							<barcode>
								<name>ARTBAR</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>4670238021632</value>
								<scanned>0</scanned>
							</barcode>
							<barcode>
								<name>ARTBAR</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>0</user_collected>
								<value>20022</value>
							</barcode>
							<barcode>
								<name>EAN13</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>4620752787835</value>
								<scanned>0</scanned>
							</barcode>
							<barcode>
								<name>KODTOV</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>0</user_collected>
								<value>824289</value>
								<scanned>0</scanned>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7212120</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7212132</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7218105</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7218133VR7218133</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7572038</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7572042</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7751439</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7751457</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7751458</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7878088</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7883182</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7887761</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7897004</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7931690</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR7988440</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8018291</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8025874</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8034976</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8053577</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8062751</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8068157</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074551</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074558</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074571</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8074575</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8090133</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8100768</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8110426</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128202</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128203</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128204</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8128205</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8135776</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8145675</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8145676</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8182525</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8224272</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8224276</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8232865</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8232874</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284246</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284340</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284399</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8284452</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8289355</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8306164</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321300</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321529VR8321529</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321530VR8321530</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321531VR8321531</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321532VR8321532</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321532VR8321532</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321533VR8321533</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321534</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8321995</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8322091</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8339421</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8341818</value>
							</barcode>
							<barcode>
								<name>TEMP</name>
								<enabled>1</enabled>
								<use_for_rf>1</use_for_rf>
								<user_collected>1</user_collected>
								<value>VR8341826</value>
							</barcode>
						</barcodes>
						<attributes>
							<attribute>
								<name>marked</name>
								<value>0</value>
							</attribute>
							<attribute>
								<name>warmStorage</name>
								<value>Любой</value>
							</attribute>
						</attributes>
						<uoms>
							<uom>
								<name>шт</name>
								<rf_name>шт</rf_name>
								<gui_name>шт</gui_name>
								<description>шт</description>
								<conversion_factor>1.0</conversion_factor>
								<pick_uom>1</pick_uom>
								<default_uom>1</default_uom>
								<used_for_receiving>1</used_for_receiving>
								<used_for_picking>1</used_for_picking>
								<used_for_inv_ctrl>1</used_for_inv_ctrl>
								<used_for_mfg>1</used_for_mfg>
								<show_in_rf>1</show_in_rf>
								<show_in_fv>1</show_in_fv>
								<physical_chars type="gross">
									<weight>0.1</weight>
									<width>24.0</width>
									<height>1.0</height>
									<length>26.0</length>
								</physical_chars>
							</uom>
						</uoms>
						<subject_to_fgis>1</subject_to_fgis>
					</item>
				</line>
			</lines>
		</document>
	</documents>
</instock>


coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains("SO") &&
!hiLog.soH.xdockPOs.size() == 1 &&
(
    hiLog.soH.getType().startsWith("DELIVE") ||
    hiLog.soH.getType().startsWith("DELID") ||
    hiLog.soH.getType().startsWith("PICK") ||
    hiLog.soH.getType().startsWith("LOCKER") ||
    hiLog.soH.getType().startsWith("STO") ||
    hiLog.soH.getType().startsWith("VENDO") ||
    hiLog.soH.getType().startsWith("MSK")
) &&
!(
    hiLog.soH.getReference7() != null && (
        hiLog.soH.getReference7().equals("05. Самовывоз на дату (с упаковкой)") ||
        hiLog.soH.getReference7().equals("07. Самовывоз на дату (без упаковки)")
    )
)




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.getType().startsWith('DELIVE')||
hiLog.soH.getType().startsWith('DELID')||
hiLog.soH.getType().startsWith('PICK')||
hiLog.soH.getType().startsWith('LOCKER')||
hiLog.soH.getType().startsWith('STO')||
hiLog.soH.getType().startsWith('VENDO')||
hiLog.soH.getType().startsWith('MSK'))
&&
!(
    hiLog.soH.reference7 == '05. Самовывоз на дату (с упаковкой)' ||
    hiLog.soH.reference7 == '07. Самовывоз на дату (без упаковки)'
)




coordinator.messageHandler.hasErrors() == false &&
hiLog.channelName.contains('SO')&&
!hiLog.soH.xdockPOs.size()==1&&
(hiLog.soH.getType().startsWith('DELIVE')||
hiLog.soH.getType().startsWith('DELID')||
hiLog.soH.getType().startsWith('PICK')||
hiLog.soH.getType().startsWith('LOCKER')||
hiLog.soH.getType().startsWith('STO')||
hiLog.soH.getType().startsWith('VENDO')||
hiLog.soH.getType().startsWith('MSK'))
&&
!(
    hiLog.soH.reference7 == '05. Самовывоз на дату (с упаковкой)' ||
    hiLog.soH.reference7 == '07. Самовывоз на дату (без упаковки)'
)

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
      hiLog.soH.reference10=='Ж4338'||
      hiLog.soH.reference10=='С1246'||
      hiLog.soH.reference10=='Р3793'||
      hiLog.soH.reference10=='С6320'||
      hiLog.soH.reference10=='О6040'||
      hiLog.soH.reference10=='У2083'||
      hiLog.soH.reference10=='Ф7090'||
      hiLog.soH.reference10=='Ф3499'||
      hiLog.soH.reference10=='Т1756')