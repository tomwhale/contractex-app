import React, { Fragment } from 'react'
import Option from '../../../shared-components/Option'
import Title from '../../../shared-components/Title'
import Row from '../../../shared-components/Row'

export default ({step, onSelect}) => {
  switch (step) {
    case 0:
      return (
        <Fragment>
          <Title>Please select which type of contractor you are looking for</Title>
          <section>
            <Row>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
              <Option text="Payments & Billing" icon="" onSelect={onSelect(step)}/>
            </Row>
          </section>
        </Fragment>
      )
      case 1:
        return (
          <Fragment>
            <Title>Please select which type of contractor you are looking for</Title>
            <section>
              <Row>

              </Row>
            </section>
          </Fragment>
        )
  }
}
