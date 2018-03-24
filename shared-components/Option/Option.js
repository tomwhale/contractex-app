import React from 'react'

export default ({ text, icon }) => (
  <div className="col-md-3">
    <a href="#" className="block">
      <div className="feature boxed boxed--border border--round text-center">
        <i className="icon--lg icon-Credit-Card2"></i>
        <span className="h5 color--primary">{text}</span>
      </div>
    </a>
  </div>
)
