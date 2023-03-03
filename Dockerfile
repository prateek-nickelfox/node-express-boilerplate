FROM node:16-alpine
COPY . .
RUN npm i -g nodemon ts-node
RUN npm i
EXPOSE 3000
ENTRYPOINT [ "npm","run", "dev" ]