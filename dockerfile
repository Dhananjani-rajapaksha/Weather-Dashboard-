# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Expose the port your app runs on
EXPOSE 3000

# Step 6: Define the command to run your app
CMD ["npm", "start"]