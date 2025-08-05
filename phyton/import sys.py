from telegram.ext import Updater, CallbackContext
from datetime import datetime, timedelta, time as dtime, date
import pytz
import time  # Добавил модуль time

# Ваш токен от BotFather
TOKEN = "7954484580:AAHXjGb04hawuPcWXSDQkTkxunQlucFLnRs"

# ID группы
GROUP_CHAT_ID = -1001921016660

# Список ответственных пользователей
responsibles = ["@dmitriilh", "@bamboleo01", "@fantik4880"]

def get_responsible():
    """
    Определяет ответственного на основе номера недели (ISO-нумерация).
    Каждую неделю выбирается новый человек по циклу.
    """
    week_number = date.today().isocalendar()[1]  # Получаем номер недели в году
    return responsibles[(week_number - 1) % len(responsibles)]

def calculate_delay(now, target_weekday, target_hour, target_minute, tz):
    """
    Вычисляет задержку (в секундах) до следующего запуска по заданному дню недели и времени.
    target_weekday: 0 (понедельник) ... 6 (воскресенье)
    """
    current_weekday = now.weekday()
    days_ahead = (target_weekday - current_weekday) % 7
    next_date = now.date() + timedelta(days=days_ahead)
    next_run = tz.localize(datetime.combine(next_date, dtime(hour=target_hour, minute=target_minute)))
    if next_run <= now:
        next_run += timedelta(days=7)
    return (next_run - now).total_seconds()

def send_reminder_fri11(context: CallbackContext):
    responsible = get_responsible()
    text = (
        f"{responsible}, напиши задачу на обновление Машково:\n\n"
        "Тема:\n"
        "Регулярные обновления - Машково xx.xx.20xx\n\n"
        "Описание:\n"
        "Просьба сегодня ближе к 14:00 обновить Машково прод - на билд прод Марусино – «текущий билд прод Марусино»"
    )
    context.bot.send_message(chat_id=GROUP_CHAT_ID, text=text)

def send_reminder_wed11(context: CallbackContext):
    responsible = get_responsible()
    text = (
        f"{responsible}, напиши задачу на обновление Марусино:\n\n"
        "Тема:\n"
        "Завершение текущего цикла регулярных обновлений - обновление JTC. И начало нового - обновление на свежий билд Марусино прод xx.xx.20xx\n\n"
        "Описание:\n"
        "Коллеги, просьба обновить тест Машково и предоставить общий список задач (наши + клиентские) за период билд от «(текущий билд прод Машково)» – "
        "билд до (текущий – обновлённый сегодня билд тест Машково).\n"
        "Далее, после проверки списка, обновляем сегодня после 20:00 Марусино прод, на свежий билд из теста Машково, а JTC прод на текущий билд прод Машково "
        "«текущий билд прод Машково» — тоже сегодня после 20:00.\n\n"
        "Короткая версия:\n"
        "Сегодня, после 20:00:\n"
        "Машково ПРОД -> JTC ПРОД\n"
        "Машково ТЕСТ -> Марусино ПРОД"
    )
    context.bot.send_message(chat_id=GROUP_CHAT_ID, text=text)

def main():
    updater = Updater(token=TOKEN, use_context=True)
    job_queue = updater.job_queue
    tz = pytz.timezone("Europe/Moscow")
    now = datetime.now(tz)

    # 1. Напоминание каждую пятницу в 11:00 (ответственный выбирается на неделю)
    delay_mon11 = calculate_delay(now, target_weekday=4, target_hour=11, target_minute=00, tz=tz)
    job_queue.run_repeating(send_reminder_fri11, interval=7*24*3600, first=delay_mon11)

    # 2. Напоминание каждую среду в 11:00 (тот же ответственный)
    delay_wed11 = calculate_delay(now, target_weekday=2, target_hour=11, target_minute=0, tz=tz)
    job_queue.run_repeating(send_reminder_wed11, interval=7*24*3600, first=delay_wed11)

    print("Бот запущен. Напоминания запланированы:")
    print(f" - Понедельник 11:00 через {delay_mon11/60:.2f} минут")
    print(f" - Среда 11:00 через {delay_wed11/60:.2f} минут")

    updater.start_polling()

    # Добавлено ожидание 12 часов (43200 секунд), чтобы бот не завершался раньше времени
    print("Бот работает и ждёт напоминаний...")
    time.sleep(600)  # 10 минут

    updater.idle()

if __name__ == '__main__':
    main()


