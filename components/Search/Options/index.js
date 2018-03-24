import * as R from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Options from './Options'

@connect(state => ({

}), dispatch => ({

}))

export default class OptionsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0
    }
  }

  _generateProps = () => ({
    onSelect: this._onSelect,
    ...this.state,
    ...this.props
  })

  _onSelect = R.curry((step, value, e) => {
    console.log(step, value, e)

  })

  _increaseStep = () => {
    this.setState({
      step: ++this.state.step
    })
  }

  render () {
    const props = this._generateProps()
    return (
      <Options {...props} />
    )
  }
}
