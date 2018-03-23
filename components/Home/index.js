import { connect } from 'react-redux'
import Home from './Home'

export default connect(state => ({
  breakpoint: getBreakpoint(state)
}))(AppHeader)
