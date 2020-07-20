FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD npm start