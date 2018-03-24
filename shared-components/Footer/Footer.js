import React from "react"

export default ({ text, url } = {}) => (
  <footer className="text-center-xs space--xs bg--dark ">
  <div className="container">
    <div className="row">
      <div className="col-md-7">
        <ul className="list-inline">
          <li>
            <a href="#">
              <span className="h6 type--uppercase">About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="h6 type--uppercase">Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-5 text-right text-center-xs">
        <ul className="social-list list-inline list--hover">
          <li>
            <a href="#">
              <i className="socicon socicon-google icon icon--xs"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="socicon socicon-twitter icon icon--xs"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="socicon socicon-facebook icon icon--xs"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="socicon socicon-instagram icon icon--xs"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7">
        <span className="type--fine-print">©
          <span className="update-year"></span> Contractex.</span>
      </div>
      <div className="col-md-5 text-right text-center-xs">
        <a className="type--fine-print" href="#">support@contractex.co.uk</a>
      </div>
    </div>
  </div>
</footer>
)
