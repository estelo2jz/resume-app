import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-flex-container">
          <div className="header-title">
            <h1>Estelo Abellanosa</h1>
          </div>

          <div className="links-flex-container">
            <div className="header-links">
              <p>
                <a href="https://www.linkedin.com/in/estelo-abellanosa-83a335186" >linkedin.com/in/estelo-abellanosa-83a335186</a>
              </p>
            </div>
            <div className="header-links">
              <p>
                <a href="https://estelo-bottega-portfolio.herokuapp.com/">https://estelo-bottega-portfolio.herokuapp.com</a>
              </p>
            </div>
            <div className="header-links">
              <p>
                <a href="https://github.com/estelo2jz">https://github.com/estelo2jz</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}