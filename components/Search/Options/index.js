import { Component }, react from 'react'
import { connect } from 'react-redux'
import Options from './Options'

@connect(state => ({

}), dispatch => ({

}))

export default class OptionsContainer extends Component {
  constructor() {
    this.state = {
      step: 0
    }
  }

  _generateProps = () => ({
    ...this.state,
    ...this.props
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
