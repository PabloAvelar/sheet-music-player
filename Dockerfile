FROM node:18-alpine

# Este es el directorio de trabajo
WORKDIR /app/sheet-music-player

# Se copia el archivo de dependencia y el código fuente al contenedor
COPY package.json package-lock.json /app/sheet-music-player/
RUN npm install

# Copy the program code
COPY . .

RUN npm run build

# Puerto
EXPOSE 3000

# CMD [ "npm", "start" ]
CMD [ "npm", "start" ]
