FROM node:lts-alpine3.19

USER root

WORKDIR /home/backend

COPY . ./

RUN yarn install && \
    yarn compile

CMD ["yarn", "start"]

EXPOSE 5000
