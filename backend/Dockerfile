# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY backend/ .

# Production stage
FROM node:18-alpine

# Install production packages only
RUN apk add --no-cache tini

WORKDIR /app

# Copy built files from builder
COPY --from=builder /app ./

# Use tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "backend"] 