# Node Server

Node.js implementation of the Anythink Market backend running on Express.js.

> **Important**: Server runs on port `8001`

## Prerequisites

- Node.js 16+
- npm or yarn

## Quick Start

1. **Install dependencies**
```bash
npm install
# or
yarn install
```

2. **Start the server**
```bash
npm start
# or
yarn start
```

The server will be running on port 8001.

## Docker Support

Build and run with Docker:

```bash
# Build
docker build -t anythink-node-server .

# Run
docker run -p 8001:8001 anythink-node-server
```

## Technical Details

- Built with Express.js
- Requires Node.js 16 or higher
- Uses native async/await for request handling

## Note on Python Migration

This codebase is a Node.js rewrite of the original Python backend, moving from Flask to Express.js while maintaining the same functionality. The migration focused on leveraging Node.js's asynchronous capabilities for improved request handling.

## License

MIT License
