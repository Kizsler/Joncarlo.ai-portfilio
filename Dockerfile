# Build stage for inner site (Rip Portfolio)
FROM node:18-alpine AS inner-site-builder
WORKDIR /inner-site
COPY inner-site-src/package*.json ./
RUN npm ci
COPY inner-site-src/ ./
RUN npm run build

# Build stage for main site (Real Portfolio)
FROM node:18-alpine AS main-site-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
# Remove inner-site-src to avoid confusion (we use the built version)
RUN rm -rf inner-site-src
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Copy built main site
COPY --from=main-site-builder /app/public ./public
COPY --from=main-site-builder /app/server ./server
COPY --from=main-site-builder /app/package*.json ./

# Copy built inner site into public/inner-site
COPY --from=inner-site-builder /inner-site/build ./public/inner-site

# Install only production dependencies
RUN npm ci --only=production

EXPOSE 8080

CMD ["node", "server/index.ts"]
