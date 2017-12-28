FROM node:carbon

WORKDIR /app

COPY .babelrc .eslintrc.js .flowconfig ./

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
COPY package.json yarn.lock ./

# --pure-lockfile: Don’t overwrite a yarn.lock lockfile
RUN yarn --pure-lockfile

COPY src src

VOLUME /app/data

CMD ["yarn", "start"]
