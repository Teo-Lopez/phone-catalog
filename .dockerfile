# base image
FROM node:12.13.1

# set working directory
WORKDIR .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts@3.0.1 -g 

# start app
CMD ["npm", "start"]