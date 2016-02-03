#!/usr/bin/env bash

pushd $(dirname "$0")/.. > /dev/null

# Create build folders
mkdir client/dist 2> /dev/null
mkdir client/dist/assets 2> /dev/null
mkdir client/dist/assets/js 2> /dev/null
mkdir client/dist/assets/css 2> /dev/null

# Browserify scripts
browserify client/app/app.js -o client/dist/assets/js/app.js

popd > /dev/null
