# Диаграмма последовательности: Запрос по компании

```mermaid
sequenceDiagram
    participant Пользователь
    participant АРС
    participant BE

    Пользователь->>АРС: Запрос по компании
    activate Пользователь
    activate АРС

    alt успех
        АРС->>BE: Get - Запрос
    end

    deactivate АРС
    deactivate Пользователь
```
