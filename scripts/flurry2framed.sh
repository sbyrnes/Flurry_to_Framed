#!/bin/bash
if [ $# -ne 2 ]
  then
    echo "Usage: run.sh <INPUT_FILE_NAME> <OUTPUT_FILE_NAME>"
    exit 0;
fi

node flurryToFramed.js $1 $2
