import React from 'react'
import { SmallColumn } from '../Column'
import { CreditCardIcon } from '../Icon'

export default ({ text, icon, onSelect }) => (
  <SmallColumn>
    <a href="#" className="block" onClick={onSelect(text)}>
      <div className="feature boxed boxed--border border--round text-center">
        <CreditCardIcon />
        <span className="h5 color--primary">{text}</span>
      </div>
    </a>
  </SmallColumn>
)
