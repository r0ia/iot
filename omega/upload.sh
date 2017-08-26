#!/bin/bash
src=$1
trg="root@192.168.1.177:/tmp/run/mountd/mmcblk0p1/omega"
if [[ -n "$src" ]]; then
	scp $src $trg
else
	echo "need src"
fi
