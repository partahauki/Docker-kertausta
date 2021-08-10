# Docker practice project 2021

## What is this?
This is a practice project I made for learning Docker. My objectives were to learn Docker, refresh some basics of all these web-technologies and also take a quick look into how angular works, as I hadn't used it before.

## How it works?
This program has input-page made with React, that a user can send a string with. Then there is output-page made with Angular that user can use to see his sent strings. In between, there are a couple of databases that these strings go through.

![alt text](https://github.com/partahauki/docker-practice-project-2021/blob/main/diagram.png?raw=true)

After inputting a string, it goes to mongodb through an API made with node and express. Then there is a worker made with dotnet that transfers strings between mongodb and redis-server. Finally, output-page reads those strings in redis through an API, also made with node and express.

## How to use?
This program requires docker and docker-composer to be installed. Clone this git repository and start the program with docker-composer using:

    docker-composer up

Ports that need to be available:
- 3000 Input-page
- 4200 Output-page
- 8080 MongoApi
- 8070 RedisApi

Navigate to http://localhost:3000 and input some strings. At http://localhost:4200 you can see all the strings you submitted. Output-page has to be manually refreshed if you were to input a new string.

## Docker images
#### Base images used:
    inputti: node:16-alpine
    mongoapi: node:16-alpine
    redisapi: node:16-alpine
    dotnet: mcr.microsoft.com/dotnet/runtime-deps:5.0
    outputti: nginx:1.21.0-alpine
    redis: redis:6.2.4-alpine
    mongodb: mongo:5.0.0-rc1-focal
