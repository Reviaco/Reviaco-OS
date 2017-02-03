#!/bin/bash
if [ "$2" = "Linux" ]
then
while true
do
	timeout 0.1s devilspie2 --folder=/var/www/html/Echo-Store/Apps/Linux/$1/Scripts/Maximize
done
elif [ "$2" = "Android" ]
then
while true
do
	echo "Hey GeeekyBoy"
done
fi