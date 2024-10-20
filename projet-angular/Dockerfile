# Installation des dépendances et du projet avec node
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Mise en place du serveur sur localhost:80
FROM nginx:alpine
COPY --from=build /app/dist/projet-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
