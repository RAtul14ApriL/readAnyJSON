const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 8001;

app.use(cors());

app.get('/', (req, res) => {
  res.json("Welcome to the API");
})
app.get('/getjson', (req, res) => {
  fetch('https://drive.google.com/file/d/1zjqTToheDlWGVRZRWSVdxFCd91HM6oRv')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    res.send("No data found");
  })
  res.end();
})


app.listen(port, () => {
  console.log(`Server is listening on Port ${port}!`);
})