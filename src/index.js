import React, { Component } from 'react'
import { removeOutsideClickEvent, addOutsideClickEvent } from './actions'

export default class OutClick extends Component {
  componentWillUnmount(){
    removeOutsideClickEvent()
  }

  componentDidMount(){
    addOutsideClickEvent(this.el, this.props.onClickOut)
  }

  render(){
    return(
      <div ref={el => this.el = el}>
        {this.props.children}
      </div>
    )
  }
}
