FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install -g serve
COPY . .
EXPOSE 3000
RUN npm run build
RUN npm run export
CMD [ "serve","out","-p","3000" ]
