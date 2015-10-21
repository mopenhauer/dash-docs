#!/bin/bash
mkdir -p tmp

grep \<loc\> ../builds/dev/sitemap.xml | sed 's/.*<loc>//' | sed 's|</loc>||' > tmp/pages.txt
sed 's|https://dash\.harvard\.edu||g' tmp/pages.txt > tmp/relative.txt
sed -E 's/(.*)/<rule>|    <from>^\1<\/from>|    <to>\1index.html<\/to>|<\/rule>/g' tmp/relative.txt | tr '|' '\n' > tmp/to-from.txt
sed 's|/</from>|/?$</from>|g' tmp/to-from.txt > ../builds/rules.txt

rm -r tmp
echo "File builds/rules.txt created."
