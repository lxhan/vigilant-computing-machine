FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

RUN npm run pwd

CMD ["node", "dist/main.js"]