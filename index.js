const express = require('express');
const cors = require('cors');
const app = express();
const port = 8001;

app.use(cors());

app.get('/', (req, res) => {
  res.json("Welcome to the API");
})
app.get('/getjson', (req, res) => {
  
})


app.listen(port, () => {
  console.log(`Server is listening on Port ${port}!`);
})