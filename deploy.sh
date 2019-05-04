#!/bin/bash

echo "Starting script..."

read -r -p "Enter Commit Message: " CM

# Production build
echo "Building production files..."
ng build --prod --output-path docs --base-href /form-builder/

# Creating 404.html
cd docs
sed -i "s/\(C:\/Program\sFiles\/Git\/form-builder\/\)/\/form-builder\//" index.html
cp index.html 404.html

# Publishing to GitHub
echo 'Publishing to GitHub'
git add --all
git commit -m "$CM"
git push
