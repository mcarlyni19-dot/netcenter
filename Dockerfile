FROM node:20-slim

WORKDIR /app

# Copia package files first para cache de camadas do Docker
COPY package.json package-lock.json ./

RUN npm install --production
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
