FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json /app

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8001

# Command to run the application
CMD ["yarn", "start"]