FROM node:18-alpine as build-step

RUN mkdir -p /app

# CREAMOS LA CARPETA DENTRO DEL CONTENEDOR DONDE SE TRABAJARÁ
WORKDIR /app

# COPIAMOS EL PROYECTO A LA CARPETA
COPY package.json /app

# INSTALAMOS LAS DEPENDENCIAS
RUN npm install
RUN npm i

COPY . /app

# CONSTRUIMOS EL PROYECTO
RUN npm run build --prod

# ------------------------------------------------------

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/app-enterprise /usr/share/nginx/html