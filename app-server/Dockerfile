FROM node:lts-alpine3.14
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

COPY . .
RUN yarn run build

CMD /wait && yarn run start:prod