FROM node:18
 
WORKDIR /
 
COPY /packages/frontend/package*.json ./
 
RUN npm install
 
COPY packages/frontend ./
 
EXPOSE 3000
 
CMD [ "npm", "run", "dev" ]