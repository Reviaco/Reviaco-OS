#!/bin/bash
export DISPLAY=:1
if [ "$2" = "Linux" ]
then
sudo killall -u $1 devilspie2-controller && sudo killall -u $1 $3 > /dev/null 2>&1 &
elif [ "$2" = "Windows" ]
then
sudo killall -u $1 devilspie2-controller && sudo killall -u $1 $3.exe > /dev/null 2>&1 &
elif [ "$2" = "AndroidWear" ]
then
sudo runuser -u $1 adb -s android-5554 shell am force-stop $3 > /dev/null 2>&1 &
elif [ "$2" = "AndroidPhone" ]
then
sudo runuser -u $1 adb -s android-5556 shell am force-stop $3 > /dev/null 2>&1 &
elif [ "$2" = "AndroidTV" ]
then
sudo runuser -u $1 adb -s android-5558 shell am force-stop $3 > /dev/null 2>&1 &
elif [ "$2" = "Chrome" ]
then
sudo runuser -u $1 google-chrome-unstable --load-and-launch-app=/var/www/html/Reviaco-OS/Users/$1/Apps/Chrome/$3 > /dev/null 2>&1 &
elif [ "$2" = "SNES" ]
then
sudo runuser -u $1 retroarch -L /usr/lib/libretro/snes9x2010_libretro.so /var/www/html/Reviaco-OS/Users/$1/Apps/SNES/$3/launch.sfc > /dev/null 2>&1 &
elif [ "$2" = "Sega" ]
then
sudo runuser -u $1 retroarch -L /usr/lib/i386-linux-gnu/libretro/genesis_plus_gx_libretro.so /var/www/html/Reviaco-OS/Users/$1/Apps/SNES/$3/launch.md > /dev/null 2>&1 &
fi