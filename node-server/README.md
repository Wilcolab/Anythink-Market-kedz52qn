# Node Server

This is the Node.js implementation of the Anythink Market backend. The server runs on Express.js and listens on port `8001`.

## Technical Stack

- **Runtime**: Node.js 16+
- **Framework**: Express.js

## Getting Started

To get started with this project, follow these steps:

1. **Prerequisites**:
   - Node.js 16 or higher
   - npm or yarn package manager

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the server**:
   ```bash
   npm start
   # or
   yarn start
   ```
   The node server will be running on port `8001`.

## Docker Support

Run the server in a containerized environment:

1. **Build the image**:
   ```bash
   docker build -t anythink-node-server .
   ```

2. **Run the container**:
   ```bash
   docker run -p 8001:8001 anythink-node-server
   ```

## Migration from Python Server

This Node.js implementation represents a complete rewrite of the original Python backend. Key differences include:

- **Framework Change**: Moved from Flask to Express.js
- **Performance**: Native async/await support in Node.js for better handling of concurrent requests
- **Development Experience**: Hot-reloading support for faster development cycles

## License

This project is licensed under the MIT License.
