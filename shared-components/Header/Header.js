import React from 'react'

export default () => (
  <div className="nav-container ">
      <div className="bar bar--sm visible-xs">
          <div className="container">
              <div className="row">
                  <div className="col-3 col-md-2">
                      <a href="index.html">
                          <img className="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                          <img className="logo logo-light" alt="logo" src="img/logo-light.png" />
                      </a>
                  </div>
                  <div className="col-9 col-md-10 text-right">
                      <a href="#" className="hamburger-toggle" data-toggle-class="#menu2;hidden-xs hidden-sm">
                          <i className="icon icon--sm stack-interface stack-menu"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <nav id="menu2" className="bar bar-2 hidden-xs " data-scroll-class='100vh:pos-fixed'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
                      <div className="bar__module">
                      </div>
                  </div>
                  <div className="col-lg-5 order-lg-1">
                      <div className="bar__module">
                          <ul className="menu-horizontal text-left">
                              <li>
                                  <a href="#"><span>Home</span></a>
                              </li>
                              <li>
                                  <a href="#"><span>About Us</span></a>
                              </li>
                              <li>
                                  <a href="#"><span>How It Works</span></a>
                              </li>
                              <li>
                                  <a href="#"><span>Contact Us</span></a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-5 text-right text-left-xs text-left-sm order-lg-3">
                      <div className="bar__module">
                          <a className="btn btn--sm btn--primary type--uppercase" href="#">
                              <span className="btn__text">
                                  Get Started For Free
                              </span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  </div>

)
