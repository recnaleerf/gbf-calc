#!/usr/bin/env bash

pushd $(dirname "$0")/.. > /dev/null

# Delete build folders
rm -r client/dist 2> /dev/null

popd > /dev/null
