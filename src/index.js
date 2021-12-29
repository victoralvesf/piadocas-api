import express from "express"

import JokeController from "./app/JokeController"

const app = express()
const port = 3333

app.get('/joke', JokeController.index)

app.get('*', (req, res) => res.sendStatus(404))

app.listen(port, () => {
  console.log('listening on port: ' + port)
})