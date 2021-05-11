FROM node:15.13-alpine
USER root
WORKDIR /frontend
COPY package*.json /frontend/
RUN npm install
COPY ./ /frontend/
RUN npm run build
