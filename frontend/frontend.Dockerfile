FROM node:lts-alpine3.19

USER root

WORKDIR /home/frontend

COPY . ./

RUN yarn install

CMD ["yarn", "dev"]

EXPOSE 8000
