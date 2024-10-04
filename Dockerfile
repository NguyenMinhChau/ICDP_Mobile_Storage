# Specify base image
FROM node:18-alpine

# Specify working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm -f install

# Copy source code
COPY . .

# Expose port 8000
EXPOSE 8000

# Run the app
CMD ["npm", "start"]