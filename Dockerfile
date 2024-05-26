# Build stage
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist /app
EXPOSE 5173
CMD ["serve", "-s", ".", "-l", "5173"]