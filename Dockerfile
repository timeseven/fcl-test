# Base image
FROM node:18.17.1-alpine

# Create app directory
WORKDIR /web

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

COPY migrate-and-start.sh ./

# COPY
COPY . .

# Install app dependencies
RUN npm install

# Generate Prisma client.
RUN npx prisma generate

# Creates a "dist" folder with the production build
# RUN npm run build

#Expose Port
EXPOSE 3000

# Start the server
CMD ["./migrate-and-start.sh"]