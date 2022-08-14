#!/bin/sh
# echo "First two args are: $1"
git add .
git commit -m "$1"
git push origin master