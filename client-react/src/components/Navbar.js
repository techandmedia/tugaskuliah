import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="margin-all navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://www.kemitraan.or.id/">
            <img src="images/kemitraan.png" alt="Kemitraan"  />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="http://www.kemitraan.or.id/">
              Home
              </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                Docs
                </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/documentation/overview/start/">
                  Overview
                  </a>
                <a className="navbar-item" href="http://www.kemitraan.or.id/">
                  Modifiers
                  </a>
                <a className="navbar-item" href="http://www.kemitraan.or.id/">
                  Columns
                   </a>
                <a className="navbar-item" href="http://www.kemitraan.or.id/">
                  Layout
                  </a>
                <a className="navbar-item" href="http://www.kemitraan.or.id/">
                  Form
                  </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="http://www.kemitraan.or.id/">
                  Elements
                    </a>
                <a className="navbar-item is-active" href="http://www.kemitraan.or.id/">
                  Components
                     </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                {/* <p className="control">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p> */}
                <p className="control">
                  <a className="button is-primary" href="http://www.kemitraan.or.id/">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
} 