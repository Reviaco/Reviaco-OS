#!/bin/bash
if [ "$2" = "Linux" ]
then
while true
do
	timeout 0.1s devilspie2 --folder=/var/www/html/Echo-Store/Apps/Linux/$1/Scripts/Maximize
done
elif [ "$2" = "AndroidTV" ]
then
while true
do
	timeout 0.1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Maximize/AndroidTV
done
elif [ "$2" = "AndroidPhone" ]
then
while true
do
	timeout 0.1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Maximize/AndroidPhone
done
elif [ "$2" = "AndroidWear" ]
then
while true
do
	timeout 0.1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Maximize/AndroidWear
done
elif [ "$2" = "Tizen" ]
then
while true
do
	timeout 0.1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Maximize/Tizen
done
elif [ "$2" = "MacOS" ]
then
while true
do
	timeout 0.1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Maximize/MacOS
done
fi