FROM node:14-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN  npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html

ARG REACT_APP_API_HOST
RUN echo "REACT_APP_API_HOST: $REACT_APP_API_HOST"
ENV REACT_APP_API_HOST=$REACT_APP_API_HOST

ARG REACT_APP_API_BASE_PATH
RUN echo "REACT_APP_API_BASE_PATH=$REACT_APP_API_BASE_PATH"
ENV REACT_APP_API_BASE_PATH=$REACT_APP_API_BASE_PATH

ARG PORT
ENV PORT=$PORT

ARG EXTERNAL_PORT
ENV EXTERNAL_PORT=$EXTERNAL_PORT

EXPOSE $EXTERNAL_PORT
EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]