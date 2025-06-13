USE [iswms]
GO
/****** Object:  StoredProcedure [dbo].[so_h_alter_transport_tula_prodazh]    Script Date: 14.04.2025 15:36:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:              Хомич Дмитрий
-- Create date: 12.05.2022
-- Description: Создание транспорта и добавление расходу (По условиям)
-- =============================================
-- Refactored: optimized logic to create or reuse transport and update so_h once
ALTER PROCEDURE [dbo].[so_h_alter_transport_tula_prodazh]
    @param0 VARCHAR(255),
    @param1 VARCHAR(255),
    @param2 VARCHAR(255),
    @param3 VARCHAR(255),
    @param4 VARCHAR(255),
    @param5 VARCHAR(255),
    @param6 VARCHAR(255),
    @param7 VARCHAR(255),
    @param8 VARCHAR(255),
    @param9 VARCHAR(255)
AS

SET NOCOUNT ON;

DECLARE @StartMorning TIME  = '00:00:00';
DECLARE @EndMorning   TIME  = '11:59:59';
DECLARE @TransportTime TIME = '14:00:00';
DECLARE @Today        DATE  = CAST(GETDATE() AS DATE);
DECLARE @ImportDate   DATETIME;
DECLARE @ExpectedDate DATETIME;
DECLARE @TransportId  BIGINT;

SELECT @ImportDate = import_date
FROM so_h WITH (ROWLOCK, XLOCK)
WHERE id = @param0
  AND transport_id IS NULL
  AND (type = '00101' OR type = '00558')
  AND reference10 = 'Л6330'
  AND DATEDIFF(DAY, import_date, @Today) = 0;

IF @ImportDate IS NULL
    RETURN;

SET @ExpectedDate =
    CASE
        WHEN CAST(@ImportDate AS TIME) BETWEEN @StartMorning AND @EndMorning
            THEN CAST(@Today AS DATETIME) + @TransportTime
        ELSE DATEADD(DAY, 1, CAST(@Today AS DATETIME)) + @TransportTime
    END;

SELECT TOP(1) @TransportId = id
FROM transport WITH (XLOCK, ROWLOCK)
WHERE reference9 = 'Тула прод'
  AND expected_date = @ExpectedDate
  AND (status = 'PLANED' OR status = 'ON_TERRITORY_BEFORE')
ORDER BY id DESC;

BEGIN TRANSACTION;

IF @TransportId IS NULL
BEGIN
    INSERT INTO [dbo].[transport] (
        [_v], [transport_number], [transport_type], [model], [number],
        [trailer_number], [fio], [driver_passport], [driver_license],
        [enter_date], [exit_date], [expected_date], [seal_number], [volume],
        [status], [stage_id], [whse_id], [owner_id], [pass_id], [door_id],
        [loading], [consolidation], [reference1], [reference2], [reference3],
        [reference4], [plan_start_dock_date], [plan_stop_dock_date],
        [plan_dock_duration], [ui_transport_description], [parking_space_id],
        [parking_zone_id], [fact_start_dock_date], [fact_stop_dock_date],
        [archived], [multi_owner], [arrive_date], [pickPriority], [vehicle_id],
        [driver_id], [exit_allowed], [weighing_date], [driver_phone],
        [driver_invited], [seal_untouched], [allowed_in], [allowed_unload],
        [reference5], [reference6], [reference7], [reference8], [reference9],
        [reference10], [weighing_date_in], [weighing_date_out], [weight_in],
        [weight_out], [problem]
    )
    VALUES (
        0, NULL, NULL, NULL, 'ТулаПР ' + CAST(@ExpectedDate AS VARCHAR), NULL,
        NULL, NULL, NULL, NULL, NULL, @ExpectedDate, NULL, NULL, 'PLANED', NULL,
        4, 1, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, GETDATE(), NULL, NULL,
        NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, 0, NULL,
        NULL, 0, 1, 1, 1, NULL, NULL, NULL, NULL, 'Тула прод', NULL, NULL, NULL,
        0, 0, 0
    );

    SET @TransportId = SCOPE_IDENTITY();
    IF @TransportId IS NOT NULL
        UPDATE transport SET transport_number = id WHERE id = @TransportId;
END

UPDATE so_h
SET transport_id = @TransportId, _v = _v + 1
WHERE id = @param0;

COMMIT;
