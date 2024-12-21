const express = require('express');
const bodyParser = require('body-parser');

const PostController = require('./interface/controllers/PostController');
const healthController = require('./interface/controllers/HealthController');
const errorHandler = require('./interface/middleware/errorHandler');
const requestLogger = require('./interface/middleware/requestLogger');
const auth = require('./interface/middleware/auth');
const config = require('./config');

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(requestLogger);
app.use(auth);

const postController = new PostController();

app.post('/posts', (req, res) => postController.create(req, res));
app.get('/posts', (req, res) => postController.findAll(req, res));

app.use('/', healthController);
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
});