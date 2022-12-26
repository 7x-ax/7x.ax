#!/usr/bin/env sh

npm run build
git add .
git commit -m "Update website"
git pull origin master --rebase && git push origin master