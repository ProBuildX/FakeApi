// Import required packages
const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Your database file
const middlewares = jsonServer.defaults();

// Enable CORS for all routes
server.use(cors());

// Use default middlewares (like logger, static, and CORS)
server.use(middlewares);

// Optional: Add custom routes or middleware if needed
// server.get('/some-route', (req, res) => {
//   res.jsonp({ message: "Hello, world!" });
// });


// Use JSON Server router with db.json
server.use(router);

// Start the server on port 3000
server.listen(3000, () => {
    console.log('JSON Server is running on http://localhost:3000');
});