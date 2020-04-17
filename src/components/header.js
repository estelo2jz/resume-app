import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1>Header</h1>
        <div className="header-flex-container">
          <div className="header-title">
            <h1>Estelo Abellanosa</h1>
          </div>

          <div className="header-links">
            <p>linkedin.com/in/estelo-abellanosa-83a335186</p>
          </div>
          <div className="header-links">
            <p>https://estelo-bottega-portfolio.herokuapp.com</p>
          </div>
          <div className="header-links">
            <p>https://github.com/estelo2jz</p>
          </div>
        </div>
      </div>
    )
  }
}