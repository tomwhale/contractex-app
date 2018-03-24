import React from 'react'

export default ({ children }) => (
  <section className="text-center space--xs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{children}</h2>
        </div>
      </div>
    </div>
  </section>
)
