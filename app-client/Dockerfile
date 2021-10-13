# BUILD STAGE
FROM node:lts-alpine3.14 as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
RUN yarn install --silent
COPY . /usr/src/app
RUN yarn run build

# PROD ENV STAGE
FROM nginx:1.13.12-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/out .
CMD ["nginx", "-g", "daemon off;"]