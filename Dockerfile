FROM node:20-slim AS build

WORKDIR /app

ADD package*.json ./

RUN npm ci

COPY . .

FROM node:20-slim

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "run", "start"]
