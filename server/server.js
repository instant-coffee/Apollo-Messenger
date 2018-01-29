import express from 'express';

const PORT = 4000;

const server = express();

server.get('/', function (req, res) {
  res.send('Yo sup my dude');
});

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));