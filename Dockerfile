FROM node:16
WORKDIR /usr/app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8080
CMD npm start