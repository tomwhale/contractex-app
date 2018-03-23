export default Header = () => (
  <div class="nav-container ">
      <div class="bar bar--sm visible-xs">
          <div class="container">
              <div class="row">
                  <div class="col-3 col-md-2">
                      <a href="index.html">
                          <img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                          <img class="logo logo-light" alt="logo" src="img/logo-light.png" />
                      </a>
                  </div>
                  <div class="col-9 col-md-10 text-right">
                      <a href="#" class="hamburger-toggle" data-toggle-class="#menu2;hidden-xs hidden-sm">
                          <i class="icon icon--sm stack-interface stack-menu"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <nav id="menu2" class="bar bar-2 hidden-xs " data-scroll-class='100vh:pos-fixed'>
          <div class="container">
              <div class="row">
                  <div class="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
                      <div class="bar__module">
                          <a href="index.html">
                              <img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                              <img class="logo logo-light" alt="logo" src="img/logo-light.png" />
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-5 order-lg-1">
                      <div class="bar__module">
                          <ul class="menu-horizontal text-left">
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
                  <div class="col-lg-5 text-right text-left-xs text-left-sm order-lg-3">
                      <div class="bar__module">
                          <a class="btn btn--sm btn--primary type--uppercase" href="#">
                              <span class="btn__text">
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
