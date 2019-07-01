import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'

import Header from './layout/Header'
import Dashboard from './prospects/Dashboard'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
        <Dashboard />
        </div>
      </Fragment>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))


