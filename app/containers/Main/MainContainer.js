import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navigation } from 'components'
import { container, inlineContainer } from './style.css'

const MainContainer = React.createClass({
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={inlineContainer}>
          {this.props.children}
        </div>
      </div>
    )
  },
})

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer)
