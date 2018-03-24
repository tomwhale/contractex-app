import React from "react"
import { Link } from 'react-router-dom';

export default ({ text, url, size } = {}) => (
  <Link className={`btn btn--${size} btn--primary type--uppercase`} to={url}>
    <span className="btn__text">{text}</span>
  </Link>
)
