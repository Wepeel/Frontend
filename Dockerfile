FROM node:16.8-alpine3.14 AS build-env
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-env /usr/src/app/dist/frontend /usr/share/nginx/html