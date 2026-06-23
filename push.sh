#!/bin/bash

echo "[*] Preparing the .mjs files"

mv next.config.mjs next.config.mjs-dev

echo "[*] Did the dev file get renamed?"
ls next.config.mjs-dev

mv next.config.mjs-prod next.config.mjs

echo "[*] Did the prod file get renamed?"
ls next.config.mjs

echo "[*] Preparing git push"

git add .
git commit -m "$1"
git push origin master
