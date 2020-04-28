FROM node:10.18.1

WORKDIR /usr/src/app

COPY . .

RUN npm ci