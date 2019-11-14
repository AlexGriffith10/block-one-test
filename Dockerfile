# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install axios
RUN yarn add --dev react-test-renderer
RUN npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
RUN npm install react-bootstrap bootstrap

# start app
CMD ["npm", "start"]