# Etapa 1: Build
FROM node:18-alpine AS build

ENV BUILD_ENV=docker

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Compila TypeScript (opcional si Vite ya lo hace)
RUN npm run build

# Etapa 2: Servir con nginx
FROM nginx:alpine

# Copia los archivos del build
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración personalizada de nginx (si usas rutas con React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 3000

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
