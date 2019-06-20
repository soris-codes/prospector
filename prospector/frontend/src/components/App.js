import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import Header from './layout/Header'

class App extends Component {
  render() {
    return (
      <Header />
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))

