#!/bin/bash
if [ "$1" = "up" ]
then
amixer -D pulse sset Master $2%+
elif [ "$1" = "down" ]
then
amixer -D pulse sset Master $2%-
elif [ "$1" = "set" ]
then
amixer -D pulse sset Master $2%
fi
