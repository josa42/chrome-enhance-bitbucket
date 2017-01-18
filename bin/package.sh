#!/bin/bash

mkdir -p dist
rm -f dist/enhance-butbucket.zip

zip -r dist/enhance-butbucket.zip . -x .git\* docs\* bin\* dist\* .\*
