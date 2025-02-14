FROM node:20-alpine

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]