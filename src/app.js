const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
require('dotenv').config();
const PORT = process.env.PORT;

require('./config/mongoDB');
const app = express();
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: '*'
}));
app.use(compression());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => res.send('App is runnign'));

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`)
});

module.exports = {
  app
};
