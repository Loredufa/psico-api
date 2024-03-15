FROM registry.access.redhat.com/ubi9/nodejs-16

#RUN npm i -g nodemon

#RUN mkdir -p /home/app

#WORKDIR /home/app

USER root

COPY package.json package-lock.json* ./
COPY .env .

RUN npm install

COPY . .

USER 1001

EXPOSE 4000

CMD ["npm", "start"]


#CMD ["nodemon", "index.js"]
