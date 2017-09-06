# DOCKER-VERSION 1.12.3

#set base image
FROM node

MAINTAINER clx<superbear24@163.com>

RUN mkdir /src

#Bundle app source
COPY package.json /src

#set npm config
RUN ["npm", "config", "set","registry=https://registry.npm.taobao.org/"]
# Install app dependencies
RUN cd /src; npm install 

COPY . /src

EXPOSE 2017

CMD npm run dev