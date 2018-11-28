import React from 'react'
import status from './status'
import { VIEW_STATUS } from "react-view-status";

const MyComponent = props => {
  if(props.status === VIEW_STATUS.finite) {
    return <div>Success!</div>
  }

  return <div>Hello World!</div>
}

export default status(MyComponent)
