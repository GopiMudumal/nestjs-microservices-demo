# Development stage
FROM node:23-alpine AS development

WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml first to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install all dependencies (including devDependencies)
RUN pnpm install

# Copy the application source code
COPY . .

# Build the application
RUN pnpm run build

RUN ls -la ./dist

# Production stage
FROM node:23-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to install production dependencies
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install only production dependencies (excluding devDependencies)
RUN pnpm install --prod

# Copy compiled files from the development stage
COPY --from=development /usr/src/app/dist ./dist

# Set the entry point for your NestJS application
CMD ["node", "dist/apps/reservations/main.js"]
