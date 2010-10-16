#! /bin/bash

if [ ! -f /usr/bin/aspell ]
then
	echo "you need to install aspell: sudo apt-get install aspell aspell-pt-br"
	exit 42
else 
	$(aspell dump dicts | grep pt_BR > /dev/null)
	if [ $? -ne 0 ]
	then
		echo "you need install pt_BR dict for aspell: sudo apt-get install aspell-pt-br"
		exit 42
	fi
fi

for i in *.html
do 
	aspell -d pt_BR -H check $i
done
