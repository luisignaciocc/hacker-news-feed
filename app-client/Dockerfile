# INSTALL DEPENDENCIES
FROM node:lts-alpine3.14 as deps
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
RUN yarn install

# BUILD APPLICATIO
FROM node:lts-alpine3.14 as builder
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY --from=deps /usr/src/app/node_modules /usr/src/app/node_modules
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN yarn run build

# SERVE STATIC FILES
FROM nginx:1.13.12-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/out .
CMD ["nginx", "-g", "daemon off;"]