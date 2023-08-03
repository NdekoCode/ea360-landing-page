FROM node:16-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./1
RUN pnpm i
COPY . .
RUN pnpm build

CMD [ "pnpm start -o" ]
