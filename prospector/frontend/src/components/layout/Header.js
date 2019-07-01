import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              Prospector 
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

