import React from 'react'
import Option from '../../../shared-components/Option'
import Title from '../../../shared-components/Title'

export default ({step, onSelect}) => {
  switch (step) {
    case 0:
      return (
        <>
          <Title>Please select which type of contractor you are looking for</Title>
          <section>
            <Row>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect}/>
            </Row>
          </section>
        </>
      )
      case 1:
        return (
          <>
            <Title>Please select which type of contractor you are looking for</Title>
            <section>
              <Row>
                
              </Row>
            </section>
          </>
        )
  }
}
