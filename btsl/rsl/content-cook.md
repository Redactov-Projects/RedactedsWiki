# Addon creation

- For that go to the `File` (left-top) and choose `Cook content for Windows`.
- After that go to the folder with your project and create link to the `RedactovAddon-AutomaticPak.bat` in your project folder (or any other folder you want).

- In link properties in `Target` add 2 arguments:
    1. Path to UnrealPak
    ```
    C:\Program Files\Epic Games\UE_4.27\Engine\Binaries\Win64
    ```
    2. Name of your addon

- Launch the link of `RedactovAddon-AutomaticPak.bat`, and after that open `Compiled` folder, where you see your addon.