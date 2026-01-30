# ============================================
# V4 Ferraz Piai Internal Data Hub
# Docker Configuration
# ============================================

# Use official Node.js LTS image (Alpine for smaller size)
FROM node:18-alpine

# Set metadata
LABEL maintainer="ferramenta.ferraz@v4company.com"
LABEL description="V4 Ferraz Piai Internal Data Hub - Google Ads API Integration"
LABEL version="1.0.0"

# Set working directory
WORKDIR /app

# Copy dependency files first (for better caching)
COPY package*.json ./

# Install production dependencies only
RUN npm install --production --silent

# Copy application source code
COPY . .

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership of the application files
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port 3000
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["npm", "start"]
