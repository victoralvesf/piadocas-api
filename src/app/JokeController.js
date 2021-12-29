import _ from 'lodash'

import { jokes } from '../mock/jokes'

class JokeController {
  index(req, res) {
    const randomJoke = _.sample(jokes)

    return res.send(randomJoke)
  }
}

export default new JokeController()