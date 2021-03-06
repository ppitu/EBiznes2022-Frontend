FROM ubuntu:21.10

RUN apt-get update -y

RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get -y install tzdata

RUN apt-get install build-essential -y
RUN apt-get install wget -y
RUN apt-get install vim -y
RUN apt-get install curl -y
RUN apt-get install sudo -y

RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

RUN apt-get install nodejs -y

#RUN apt-get update -y

#RUN apt-get install npm -y


RUN useradd -ms /bin/bash ppitu
RUN adduser ppitu sudo

COPY ./ /home/ppitu/Project

WORKDIR /home/ppitu/Project

RUN rm -rf node_modules
#RUN rm -rf package-lock.json

RUN npm install react-scripts

RUN npm install

CMD npm start
