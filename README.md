# Fullstack/Docker practice project 2021

## What is this?
This is a practice project I made before I started looking for a job. My objective was to practice docker skills and also refresh my web-programming skills.

## How it works?
KUVA
This program has input-page made with React, that a user can send a string with. Then there is output-page made with Angular that user can use to see his sent strings. After inputting a string, it goes to mongodb through api made with node and express. Then there is a worker made with dotnet that transfers strings between mongodb and redis-server. Finally output-page reads those strings in redis through an api, also made with node and express.

## How to use?
This program requires docker and docker-composer to be installed. Clone this git repository and use start it with docker-composer using:

    docker-composer up

## Notes

#### todo:
    angular-output make a refresh button (services, subscriptions)
    
## Docker images
#### Images: 
    - inputti:    node:16-alpine
    - mongoapi:   node:16-alpine
    - redisapi:   node:16-alpine
    - dotnet:     mcr.microsoft.com/dotnet/runtime-deps:5.0
    - outputti:   nginx:1.21.0-alpine
    - redis:      redis:6.2.4-alpine
    - mongodb:    mongo:5.0.0-rc1-focal 
