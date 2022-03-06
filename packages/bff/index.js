const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/configs', (req, res) => {
  res.json({
    keycloak: 'https://www.keycloak.org/',
  });
});

app.listen(3020, () => console.info('Runnning at 3020'));
