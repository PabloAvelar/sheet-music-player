FROM node:latest

# Este es el directorio de trabajo
WORKDIR /app/sheet-music-player

# Se copia el archivo de dependencia y el código fuente al contenedor
COPY package.json package-lock.json /app/sheet-music-player/
COPY . /app/sheet-music-player/

# Se instalan las dependencias
RUN npm install

RUN npm run build

# Puerto
EXPOSE 3000


CMD [ "npm", "start" ]