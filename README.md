# Simple Pack
A custom mod pack I'm making to play in creative mode. One day I might make it a playable pack.
Uses a lot of assets and consepts from other games.
Also, screw minecrafts art style; I *want* the extra cursed obj models. 

## KubeJs Stuff

Find out more info on the website: https://kubejs.com/

Directory information:

assets - Acts as a resource pack, you can put any client resources in here, like textures, models, etc. Example: assets/kubejs/textures/item/test_item.png
data - Acts as a datapack, you can put any server resources in here, like loot tables, functions, etc. Example: data/kubejs/loot_tables/blocks/test_block.json

startup_scripts - Scripts that get loaded once during game startup - Used for adding items and other things that can only happen while the game is loading (Can be reloaded with /kubejs reload_startup_scripts, but it may not work!)
server_scripts - Scripts that get loaded every time server resources reload - Used for modifying recipes, tags, loot tables, and handling server events (Can be reloaded with /reload)
client_scripts - Scripts that get loaded every time client resources reload - Used for JEI events, tooltips and other client side things (Can be reloaded with F3+T)

config - KubeJS config storage. This is also the only directory that scripts can access other than world directory
exported - Data dumps like texture atlases end up here

You can find type-specific logs in logs/kubejs/ directory

## Setup
Minecraft 1.21.1
NeoForge 21.1.208

amber-neoforge-1.21.1-3.0.0+1.21.1
appleskin-neoforge-mc1.21-3.0.7
appliedenergistics2-19.2.16
applied-experienced-1.21.1-1.2.0
architectury-13.0.8-neoforge
athena-neoforge-1.21-4.0.2
balm-neoforge-1.21.1-21.0.51
breeze_powder-neoforge-1.0.0
cloth-config-15.0.140-neoforge
create_bic_bit-1.0.1
create_blaze_burner_fuels-1.0.0-neoforge-1.21.1
create_factory_logistics-1.21.1-1.4.7
create-1.21.1-6.0.6
createaddition-1.5.3
createliquidfuel-2.1.1-1.21.1
createtreadmill-1.5
CustomMachinery-neoforge-1.21.1-0.10.45
emi-1.1.22+1.21.1+neoforge
exdeorum-3.9
experiencelib-1.21.1-1.1.1
ferritecore-7.0.2-neoforge
ForgeConfigAPIPort-v21.1.4-1.21.1-NeoForge
geckolib-neoforge-1.21.1-4.7.7
goated-1.21-1.4.3-neoforge
guideme-21.1.14
Jade-1.21.1-NeoForge-15.10.3
jei-1.21.1-neoforge-19.24.0.317
kleeslabs-neoforge-1.21.1-21.1.7
kubejs-neoforge-2101.7.1-build.181
LeavesBeGone-v21.1.0-1.21.1-NeoForge
liteminer-neoforge-1.21.1-1.0.0+1.21.1
modernfix-neoforge-5.24.3+mc1.21.1
modular_machinery_reborn-1.21.1-2.5.1
moonlight-1.21-2.23.9-neoforge
oritech-neoforge-0.17.3
owo-lib-neoforge-0.12.15.5-beta.1+1.21
Pehkui-3.8.3+1.21-neoforge
PowerfulJS-2.3.0
ProbeJS-7.5.1
PuzzlesLib-v21.1.38-1.21.1-NeoForge
rhino-2101.2.7-build.77
sodium-extra-neoforge-0.6.0+mc1.21.1
sodium-neoforge-0.6.13+mc1.21.1
sophisticatedbackpacks-1.21.1-3.25.2.1342
sophisticatedbackpackscreateintegration-1.21.1-0.1.3.13
sophisticatedcore-1.21.1-1.3.71.1143
sophisticatedstorage-1.21.1-1.5.3.1275
sophisticatedstoragecreateintegration-1.21.1-0.1.11.37
upsizing-1.0.2