FROM node:14

LABEL maintainer "José Wictor da Silva Gomes<wictortec@gmail.com>"

RUN mkdir -p /usr/src/shared/http/server
WORKDIR /usr/src/shared/http/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3535

CMD ["npm", "start"]
