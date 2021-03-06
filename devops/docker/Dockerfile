#Stage 1 - build process

FROM node:12.18.4-alpine3.11 AS build-deps
WORKDIR /usr/src/app

ARG PHRASE_ACCESS_TOKEN
ARG PHRASE_PROJECT_ID

COPY package.json plopfile.js styleguide.config.js codegen.yml tsconfig.json types.d.ts ./

COPY public ./public
COPY src ./src
COPY scripts ./scripts
COPY plop-templates ./plop-templates

RUN npm install

RUN node ./scripts/get_translations.js --accessToken=$PHRASE_ACCESS_TOKEN --projectID=$PHRASE_PROJECT_ID

COPY .env.prod .env

RUN npm run translations

RUN npm run build

#Stage 2 - production image
FROM nginx:1.17.0-alpine

RUN apk update && apk add bash
COPY ./devops/docker/entrypoint.sh /usr/local/bin/
RUN chmod 755 /usr/local/bin/entrypoint.sh

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY devops/docker/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
ENTRYPOINT ["/bin/bash", "/usr/local/bin/entrypoint.sh"]
