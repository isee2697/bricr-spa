FROM node:12.16 AS node
COPY . /app/front
WORKDIR /app/front/
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
EXPOSE 3000
