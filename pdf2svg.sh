#!/bin/bash
cd assets/images
for file in $(ls */*.pdf)
do
  echo ${file}
  /opt/homebrew/Cellar/pdf2svg/0.2.3_6/bin/pdf2svg "${file}" "${file%.*}.svg"
  rm ${file}
done
