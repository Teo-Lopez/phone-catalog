# base image
FROM node:12.13.1

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /app/
RUN npm install 
#RUN npm install react-scripts@3.0.1 -g 
COPY . /app
# start app
EXPOSE 5000
CMD ["npm", "start"]