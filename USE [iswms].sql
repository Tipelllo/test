USE [iswms]
GO
/****** Object:  StoredProcedure [dbo].[so_h_alter_transport_tula_prodazh]    Script Date: 14.04.2025 15:36:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Хомич Дмитрий
-- Create date: 12.05.2022
-- Description:	Создание транспорта и добавление расходу (По условиям)
-- =============================================
ALTER PROCEDURE [dbo].[so_h_alter_transport_tula_prodazh] @param0 VARCHAR(255)

                ,@param1 VARCHAR(255)
                ,@param2 VARCHAR(255)
                ,@param3 VARCHAR(255)
                ,@param4 VARCHAR(255)
                ,@param5 VARCHAR(255)
                ,@param6 VARCHAR(255)
                ,@param7 VARCHAR(255)
                ,@param8 VARCHAR(255)
                ,@param9 VARCHAR(255)
AS

DECLARE @StartOfEveryDayNightMidday TIME = '00:00:00'
DECLARE @EndOfEveryDayNightMidday TIME = '11:59:59'
DECLARE @StartOfEveryDayMiddayNight TIME = '12:00:00'
DECLARE @EndOfEveryDayMiddayNight TIME = '23:59:59'
DECLARE @TransportTime DATETIME = '14:00:00'  
DECLARE @Today DATE = GETDATE()
DECLARE @Tomorrow DATE = DATEADD(DAY, 1, @Today)
DECLARE @soHid BIGINT = @param0 -- передаем через параметр @param0 id Расхода в сист событии.
DECLARE @tR VARCHAR(50)-- для первичного ключа транспорта1
DECLARE @transport1 VARCHAR(50) SET @transport1 = (SELECT TOP (1) id FROM transport WITH(xlock, rowlock) WHERE reference9 = 'Тула прод'  AND expected_date = @TransportTime + @Today AND (status='PLANED'OR status='ON_TERRITORY_BEFORE')ORDER BY id DESC)
DECLARE @transport2 VARCHAR(50) SET @transport2 = (SELECT TOP (1) id FROM transport WITH(xlock, rowlock) WHERE reference9 = 'Тула прод'  AND expected_date = @TransportTime + @Tomorrow AND (status='PLANED'OR status='ON_TERRITORY_BEFORE')ORDER BY id DESC)

--1 условие

BEGIN TRANSACTION IF EXISTS  
        (
SELECT 1
FROM so_h 
WHERE 
        (
		DATEDIFF(DAY, import_date, @Today) = 0
		AND cast(import_date AS TIME) BETWEEN @StartOfEveryDayNightMidday
		AND @EndOfEveryDayNightMidday 
		)
    AND
       (
	    type ='00101'OR
		type ='00558'
       )
    AND 
	    reference10 ='Л6330'
	AND    
		
	    transport_id IS NULL   
    AND id =  @soHid
	   )
	    
    
		
BEGIN
IF (@transport1 IS NOT NULL)

BEGIN
UPDATE so_h
SET transport_id = @transport1, _v = _v + 1

       
WHERE 
        (
		DATEDIFF(DAY, import_date, @Today) = 0
		AND cast(import_date AS TIME) BETWEEN @StartOfEveryDayNightMidday
		AND @EndOfEveryDayNightMidday 
		)
    AND
       (
	    type ='00101'OR
		type ='00558'
       )
    AND 
	    reference10 ='Л6330'
	AND    
		
	    transport_id IS NULL   
    AND id =  @soHid
	  

END

ELSE
BEGIN

INSERT INTO [dbo].[transport] ( [_v], [transport_number], [transport_type], [model], [number],                                                     [trailer_number], [fio], [driver_passport], [driver_license], [enter_date], [exit_date], [expected_date],                [seal_number], [volume], [status], [stage_id], [whse_id], [owner_id], [pass_id], [door_id], [loading], [consolidation], [reference1], [reference2], [reference3], [reference4], [plan_start_dock_date], [plan_stop_dock_date], [plan_dock_duration], [ui_transport_description], [parking_space_id], [parking_zone_id], [fact_start_dock_date], [fact_stop_dock_date], [archived], [multi_owner], [arrive_date], [pickPriority], [vehicle_id], [driver_id], [exit_allowed], [weighing_date], [driver_phone], [driver_invited], [seal_untouched], [allowed_in], [allowed_unload], [reference5], [reference6], [reference7], [reference8], [reference9],       [reference10], [weighing_date_in], [weighing_date_out], [weight_in], [weight_out], [problem] )
VALUES                        ( 0,    null,               null,             null,    'ТулаПР '+cast ((@TransportTime + @Today) as varchar), null,             null,  null,              null,             null,         null,        (@TransportTime + @Today), null,          null,     'PLANED', null,       4,         1,          null,      null,      0,         0,               null,         null,         null,         null,         (GETDATE()),            null,                  null,                 null,                       null,               null,              null,                   null,                  0,          0,             null,          null,           null,         null,        0,              null,            null,           0,                1,                1,            1,                null,         null,         null,         null,         'Тула прод', null,          null,               null,                0,           0,            0         )
SET @tR = SCOPE_IDENTITY()
IF @tR IS NOT NULL
UPDATE transport SET transport_number = id WHERE id=SCOPE_IDENTITY()
UPDATE so_h 
SET transport_id=SCOPE_IDENTITY(), _v = _v + 1

WHERE 
        (
		DATEDIFF(DAY, import_date, @Today) = 0
		AND cast(import_date AS TIME) BETWEEN @StartOfEveryDayNightMidday
		AND @EndOfEveryDayNightMidday 
		)
    AND
       (
	    type ='00101'OR
		type ='00558'
       )
    AND 
	    reference10 ='Л6330'
	AND    
		
	    transport_id IS NULL   
    AND id =  @soHid
	  

END
   END
 
---2 условие

ELSE IF  EXISTS 
        (
SELECT 1
FROM so_h 
WHERE 
        (
		DATEDIFF(DAY, import_date, @Today) = 0
		AND cast(import_date AS TIME) BETWEEN @StartOfEveryDayMiddayNight
		AND @EndOfEveryDayMiddayNight
		)
	AND
       (
	    type ='00101'OR
		type ='00558'
       )
    AND 
	    reference10 ='Л6330'
	AND    
		
	    transport_id IS NULL   
    AND id =  @soHid
	  )

BEGIN
IF (@transport2 IS NOT NULL)

BEGIN
UPDATE so_h
SET transport_id = @transport2, _v = _v + 1

WHERE 
        (
		DATEDIFF(DAY, import_date, @Today) = 0
		AND cast(import_date AS TIME) BETWEEN @StartOfEveryDayMiddayNight
		AND @EndOfEveryDayMiddayNight
		)
	AND
       (
	    type ='00101'OR
		type ='00558'
       )
    AND 
	    reference10 ='Л6330'
	AND    
		
	    transport_id IS NULL   
    AND id =  @soHid
	

END

ELSE
BEGIN

INSERT INTO [dbo].[transport] ( [_v], [transport_number], [transport_type], [model], [number],                                                     [trailer_number], [fio], [driver_passport], [driver_license], [enter_date], [exit_date], [expected_date],                [seal_number], [volume], [status], [stage_id], [whse_id], [owner_id], [pass_id], [door_id], [loading], [consolidation], [reference1], [reference2], [reference3], [reference4], [plan_start_dock_date], [plan_stop_dock_date], [plan_dock_duration], [ui_transport_description], [parking_space_id], [parking_zone_id], [fact_start_dock_date], [fact_stop_dock_date], [archived], [multi_owner], [arrive_date], [pickPriority], [vehicle_id], [driver_id], [exit_allowed], [weighing_date], [driver_phone], [driver_invited], [seal_untouched], [allowed_in], [allowed_unload], [reference5], [reference6], [reference7], [reference8], [reference9],       [reference10], [weighing_date_in], [weighing_date_out], [weight_in], [weight_out], [problem] )
VALUES                        ( 0,    null,               null,             null,    'ТулаПР '+cast ((@TransportTime + @Tomorrow) as varchar), null,             null,  null,              null,             null,         null,        (@TransportTime + @Tomorrow), null,          null,     'PLANED', null,       4,         1,          null,      null,      0,         0,               null,         null,         null,         null,         (GETDATE()),            null,                  null,                 null,                       null,               null,              null,                   null,                  0,          0,             null,          null,           null,         null,        0,              null,            null,           0,                1,                1,            1,                null,         null,         null,         null,         'Тула прод', null,          null,               null,                0,           0,            0         )
SET @tR = SCOPE_IDENTITY()
IF @tR IS NOT NULL
UPDATE transport SET transport_number = id WHERE id=SCOPE_IDENTITY()
UPDATE so_h 
SET transport_id=SCOPE_IDENTITY(), _v = _v + 1


WHERE 
        (
		DATEDIFF(DAY, import_date, @Today) = 0
		AND cast(import_date AS TIME) BETWEEN @StartOfEveryDayMiddayNight
		AND @EndOfEveryDayMiddayNight
		)
	AND
       (
	    type ='00101'OR
		type ='00558'
       )
    AND 
	    reference10 ='Л6330'
	AND    
		
	    transport_id IS NULL  -- просто добавлю коммент добавил
    AND id =  @soHid

END
   END
     COMMIT;
