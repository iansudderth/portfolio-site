import React, {Component} from 'react'
import withRoot from '../portfolio/src/style/withRoot'
import Portfolio from '../portfolio/src/index.js'


class Index extends Component {

  render () {
    return (
    <Portfolio />
    )
  }
}

export default withRoot(Index)