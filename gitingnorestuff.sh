#!/bin/bash
cat .gitignore | while read line; do
  if [[ ${line:0:1} != "#" ]] && [[ -n $line ]];  then
	  echo $line >> patterns;
  fi
done

#find . | grep -f patterns | while read file; do
#	git rm --cached --ignore-unmatch ${file//[\*\*]/*} >> removed
#done

#cat removed

#rm patterns
#rm removed

