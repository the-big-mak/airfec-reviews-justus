FROM node:6.1.0

WORKDIR /client/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server/index.js"]