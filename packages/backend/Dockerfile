FROM node:18
 
WORKDIR /usr/src/app
 
COPY /packages/backend/package*.json ./
 
COPY /packages/backend ./
 
COPY /packages/db ./db
 
COPY /packages/shared ./shared
 
RUN npm install
 
RUN npm install -g tsx typescript ts-node dotenv
 
EXPOSE 8081
 
CMD [ "npm", "run", "dev" ]