const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '605a2c1e2635b22e054dff6f';
    axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
    .then(({ data }) => res.status(200).send(data))
    .catch(console.error)
    ;
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})