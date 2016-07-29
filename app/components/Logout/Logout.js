import React, {PropTypes} from 'react'
import { text } from './styles.css'

export default function Logout (props) {
  return (
    <div className={text}>
      {'you are now logged out'}
    </div>
  )
}