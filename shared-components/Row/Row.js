import React from "react"
import { Link } from 'react-router-dom';

export default ({ children } = {}) => (
  <div className="container">
    <div className="row">
      {children}
    </div>
  </div>
)
