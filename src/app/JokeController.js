import { jokes } from '../mock/jokes'

let counter = 0
let actual = 0

class JokeController {
  index(req, res) {
    if (counter > jokes.length - 1) {
      actual = 0
      counter = actual + 1
      return res.send(jokes[actual])
    } else {
      actual = counter
      counter += 1
      return res.send(jokes[actual])
    }
  }
}

export default new JokeController()