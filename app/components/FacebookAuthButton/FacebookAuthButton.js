import React, { PropTypes } from 'react'
import { button } from './style.css'

FacebookAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default function FacebookAuthButton ({onAuth, isFetching}) {
  return (
    <button onClick={onAuth} className={button}>
      {
        isFetching === true
        ? 'Loading'
        : 'login with facebook'
      }
    </button>
  )
}
