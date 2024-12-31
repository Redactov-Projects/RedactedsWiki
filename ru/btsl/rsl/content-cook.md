# Создание аддона

- Для этого перейдите во вкладку `File` (слева сверху) и нажмите `Cook content for Windows`.
- После этого перейдите в папку с вашим проектом и создайте ярлык с файлом `RedactovAddon-AutomaticPak.bat` в той же папке (или в любой другой, где вам удобно).

- В свойствах ярлыка в поле `Target` добавьте 2 аргумента:
    1. Путь к UnrealPak
    ```
    C:\Program Files\Epic Games\UE_4.27\Engine\Binaries\Win64
    ```
    2. Название вашего аддона

- Запустите `RedactovAddon-AutomaticPak.bat`, а после его закрытия перейдите в папку `Compiled`, где увидите ваш файл.