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


      (!(
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
        so.reference4.indexOf('Б/Н-Люберцы')!=-1)||
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
        so.reference10 == 'Н5497' ||
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
        so.getType() == '00387' ||
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
        so.reference10 == '23695'








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