FROM node:14-slim




WORKDIR /reactcode/src/app

COPY package*.json ./

RUN npm install

COPY . .



EXPOSE 8080



CMD ["npm","start"]