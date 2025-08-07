#!/bin/bash
# This script is used to prepare the Next.js application for deployment in a Docker container

# init
rm -rf images/nodejs-lambda-container/out
mkdir -p images/nodejs-lambda-container/out
mkdir -p .next/standalone/_next/static
mkdir -p .next/standalone/static

# Copy the built Next.js standalone output and static assets
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next

# for cloudfront
cp -r .next/static .next/standalone/_next
cp -r public/static/. .next/standalone/static/

# Copy the built Next.js standalone output to the docker image output directory
cp -r .next/standalone/. images/nodejs-lambda-container/out/
