const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Multy Staging is Alive!'));

app.listen(port, () => console.log(`Multy Staging is listening to http://localhost:${port}`));