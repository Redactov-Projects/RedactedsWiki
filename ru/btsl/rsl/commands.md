# Команды Server Library

Это список команд для Redacted's Server Library.

### spawnactor (кол-во) (actor)

Спавнит актор на месте, где вы стоите.

::: details Список акторов


| Actor                | Class                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ammobox              | BlueprintGeneratedClass'/Game/BrickRigs/Items/AmmoBox/BP_AmmoBox.BP_AmmoBox_C'                                            |
| ammobox_heavy        | BlueprintGeneratedClass'/Game/BrickRigs/Items/AmmoBox/BP_AmmoBox_Heavy.BP_AmmoBox_Heavy_C'                                |
| ammobox_missile      | BlueprintGeneratedClass'/Game/BrickRigs/Items/AmmoBox/BP_AmmoBox_Missile.BP_AmmoBox_Missile_C'                            |
| mk18                 | BlueprintGeneratedClass'/Game/BrickRigs/Items/MK18/BP_MK18.BP_MK18_C'                                                     |
| sniper               | BlueprintGeneratedClass'/Game/BrickRigs/Items/Sniper/BP_Sniper.BP_Sniper_C'                                               |
| deagle               | BlueprintGeneratedClass'/Game/BrickRigs/Items/Deagle/BP_Deagle.BP_Deagle_C'                                               |
| launcher             | BlueprintGeneratedClass'/Game/BrickRigs/Items/Launcher/BP_Launcher.BP_Launcher_C'                                         |
| holosight            | BlueprintGeneratedClass'/Game/BrickRigs/Items/HoloSight/BP_HoloSight.BP_HoloSight_C'                                      |
| sniperscope          | BlueprintGeneratedClass'/Game/BrickRigs/Items/SniperScope/BP_SniperScope.BP_SniperScope_C'                                |
| suppressor           | BlueprintGeneratedClass'/Game/BrickRigs/Items/Suppressor/BP_Suppressor.BP_Suppressor_C'                                   |
| loadoutcontainer     | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/LoadoutContainer/BP_LoadoutContainer.BP_LoadoutContainer_C'      |
| dumpster             | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/Dumpster/BP_Dumpster.BP_Dumpster_C'                              |
| camper               | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/Camper/BP_Camper.BP_Camper_C'                                    |
| floodlight           | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/Floodlight/BP_Floodlight.BP_Floodlight_C'                        |
| fueltank             | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/FuelTank/BP_FuelTank.BP_FuelTank_C'                              |
| sacktruck            | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/SackTruck/BP_SackTruck.BP_SackTruck_C'                           |
| shippingcontainer    | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/ShippingContainer/BP_ShippingContainer.BP_ShippingContainer_C'   |
| shredder             | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/Shredder/BP_Shredder.BP_Shredder_C'                              |
| truckwreck           | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/TruckWreck/BP_TruckWreck.BP_TruckWreck_C'                        |
| windmill             | BlueprintGeneratedClass'/Game/BrickRigs/Blueprints/Props/Windmill/BP_Windmill.BP_Windmill_C'                              |
| castle               | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/Castle/BP_Castle.BP_Castle_C'                                           |
| cityhall             | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/CityHall/BP_CityHall.BP_CityHall_C'                                     |
| editor_small         | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/Editors/BP_Editor_Small.BP_Editor_Small_C'                              |
| editor_medium        | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/Editors/BP_Editor_Medium.BP_Editor_Medium_C'                            |
| editor_hangar        | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/Editors/BP_Editor_Hangar.BP_Editor_Hangar_C'                            |
| farmhouse            | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/Farmhouse/BP_Farmhouse.BP_Farmhouse_C'                                  |
| firestation          | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/FireStation/BP_FireStation.BP_FireStation_C'                            |
| garage_01            | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/Garage_01/BP_Garage_01.BP_Garage_01_C'                                  |
| gasstation           | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/GasStation/BP_GasStation.BP_GasStation_C'                               |
| genericcommercial    | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/GenericCommercial/BP_GenericCommercial.BP_GenericCommercial_C'          |
| genericcommercial_02 | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/GenericCommercial_02/BP_GenericCommercial_02.BP_GenericCommercial_02_C' |
| house_09             | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/House_09/BP_House_09.BP_House_09_C'                                     |
| house_10             | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/House_10/BP_House_10.BP_House_10_C'                                     |
| house_11             | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/House_11/BP_House_11.BP_House_11_C'                                     |
| officebuilding       | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/OfficeBuilding/BP_OfficeBuilding.BP_OfficeBuilding_C'                   |
| pizzapalace          | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/PizzaPalace/BP_PizzaPalace.BP_PizzaPalace_C'                            |
| powerplant           | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/PowerPlant/BP_PowerPlant.BP_PowerPlant_C'                               |
| rowbuilding_01       | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/RowBuilding_01/BP_RowBuilding_01.BP_RowBuilding_01_C'                   |
| skyscraper_small     | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/SkyScrapers/BP_SkyScraper_Small.BP_SkyScraper_Small_C'                  |
| skyscraper_medium    | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/SkyScrapers/BP_SkyScraper_Medium.BP_SkyScraper_Medium_C'                |
| skyscraper_large     | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/SkyScrapers/BP_SkyScraper_Large.BP_SkyScraper_Large_C'                  |
| trainstation         | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/TrainStation/BP_TrainStation.BP_TrainStation_C'                         |
| warehouse_large      | BlueprintGeneratedClass'/Game/BrickRigs/Buildings/Warehouses/BP_Warehouse_Large.BP_Warehouse_Large_C'                     |

:::

### delete

Удаляет актор, на который вы смотрите.

### notify (стиль) (сообщение)

Выводит всем игрокам уведомление с вашим сообщением.

::: details Стили

- default
- highlight
- positive
- negative
- neutral
- editor_outline
- game_logo
- developer_logo

:::

### bind (Кнопка) (Параметр) (Команда) <Badge type="tip" text="^0.6" />

Это команда добавляет бинд для клавиши, чтобы по нажатию этой клавиши автоматически прописывались ваши команды.

##### Аргумент `Key`:
::: details Доступные клавиши

**Клавиша - Аргумент**
- Num Key 1 - NumKey1
- Num Key 2 - NumKey2
- Num Key 3 - NumKey3
- Num Key 4 - NumKey4
- Num Key 5 - NumKey5
- Num Key 6 - NumKey6
- Num Key 7 - NumKey7
- Num Key 8 - NumKey8
- Num Key 9 - NumKey9

:::

##### Аргумент `Parameter`: 
- add - Добавляет команду к бинду клавиши.
- remove - Удаляет команду из бинда клавиши.
- clear - Стирает все команды из бинда клавиши. Вам не нужно ничего указывать в `Команда` для этого.

##### Аргумент `Command`:
Любая ваша команда для бинда.

### spawnmodel (модель) <Badge type="tip" text="^0.6" />

Спавнит кастомную модель там, где вы стоите.

##### Аргумент `Model`:
Название вашей модели. Например: `BP_Dumpster`.

### anim (анимация) <Badge type="tip" text="^0.6" />

Проигрывает кастомную анимацию на Бобе.

##### Аргумент `Animation`:
Название вашей анимации. Например: `Character_Brick_Carry`.

### sound (звук) <Badge type="tip" text="^0.6" />

Проигрывает кастомный звук.

##### Аргумент `Sound`:
Название вашего звука. Например: `metalpipe`.

### blacklist (steam id) <Badge type="tip" text="^0.6" />

Добавляет игрока в чёрный список по Steam ID. Игрок из чёрного списка потеряет доступ к основному функционалу библиотеки.

##### Аргумент `Steam ID`:
Steam ID игрока.