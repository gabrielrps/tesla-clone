# Simple Docker File
#FROM node as build

#WORKDIR /build

#COPY package*.json ./
#RUN npm install

#COPY . ./

#EXPOSE 3000

#CMD ["npm", "start"]

# MultiStage
FROM node as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]