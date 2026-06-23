#!/bin/bash

# execute example
# - ./push.sh "Initital commit"


echo "[*] Preparing the .mjs files"

mv next.config.mjs next.config.mjs-dev

echo "[*] Did the dev file get renamed?"
ls next.config.mjs-dev

mv next.config.mjs-prod next.config.mjs

echo "[*] Did the prod file get renamed?"
ls next.config.mjs

echo "[*] Preparing git commit"

git add .
git commit -m "$1"

echo "[*] Preparing .mjs files"
mv next.config.mjs next.config.mjs-prod
mv next.config.mjs-dev next.config.mjs


echo "[*] Preparing git push"
git push origin master


