FROM node:12-alpine as build

#set the working directory
WORKDIR /app

#copy the frontend app to the container
COPY . /app/

#prepare the container to build the ng app
RUN npm install
RUN npm run build

#prepare nginx server
FROM nginx:1.16.0-alpine

COPY --from=build /app/dist/frontend /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf

#launch nginx server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]