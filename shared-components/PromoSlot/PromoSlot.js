import React from "react"

export default ({ text, url } = {}) => (
  <section className="bg--primary unpad cta cta-2">
      <a href={url}>
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <h2>{text}</h2>
                  </div>
              </div>
          </div>
      </a>
  </section>
)
