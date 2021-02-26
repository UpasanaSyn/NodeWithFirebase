const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', courseRoutes.routes);


// const port = process.env.PORT || 3100;
app.listen(config.port, () => console.log(`Listening on port ${config.port}` ));



