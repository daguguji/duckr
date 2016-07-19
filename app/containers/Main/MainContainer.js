import React from 'react'
import { Navigation } from 'components'
import { container, inlineContainer } from './style.css'

const MainContainer = React.createClass({
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false} />
        <div className={inlineContainer}>
          {this.props.children}
        </div>
      </div>
    )
  },
})

export default MainContainer
