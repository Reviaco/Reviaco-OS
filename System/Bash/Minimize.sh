#!/bin/bash
if [ "$2" = "Linux" ]
then
while true
do
	timeout 1s devilspie2 -d --folder=/var/www/html/Reviaco-OS/Users/geeekyboy/Apps/Linux/$1/Scripts/Minimize
done
elif [ "$2" = "AndroidTV" ]
then
while true
do
	timeout 1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Minimize/AndroidTV
done
elif [ "$2" = "AndroidPhone" ]
then
while true
do
	timeout 1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Minimize/AndroidPhone
done
elif [ "$2" = "AndroidWear" ]
then
while true
do
	timeout 1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Minimize/AndroidWear
done
elif [ "$2" = "Tizen" ]
then
while true
do
	timeout 1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Minimize/Tizen
done
elif [ "$2" = "MacOS" ]
then
while true
do
	timeout 1s devilspie2 --folder=/var/www/html/Reviaco-OS/System/Lua/Minimize/MacOS
done
fi
