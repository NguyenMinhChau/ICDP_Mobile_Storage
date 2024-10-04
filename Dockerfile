# Specify base image
FROM node:18-alpine

# Specify working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm -f install

# Copy source code
COPY . .

# Expose port 8000
EXPOSE 9229

# Run the app
CMD ["npm", "start"]