const express = require('express')
const cors = require('cors')
const app = express()
const middleWare = cors()
app.use(middleWare)
app.get('/test', (req, res, next)=> {
    console.log('hello world')
})

const port = 4000
app
.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });

