import React from "react"

export default ({ title, children }) => (
  <div className="col-md-4">
    <div className="feature">
      <i className="icon icon-Code-Window color--primary"></i>
      <h4>{title}</h4>
      {children}
    </div>
  </div>
)
