import React, { PropTypes } from 'react'
import { centeredContainer, largeHeader, errorMsg } from 'sharedStyles/styles.css'
import { FacebookAuthButton  } from 'components'

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}

export default function Authenticate ({onAuth, isFetching, err}) {
  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>{'Authenticate'}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {err ? <p className={errorMsg}>{err}</p> : null}
    </div>
  )
}
