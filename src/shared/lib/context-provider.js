import { Component } from 'react'
import { contextTypes } from 'mobx-connect'

export default class ContextProvider extends Component {

  // Here we are using default context types
  // See Example 1 for using custom contexts
  static childContextTypes = contextTypes;

  getChildContext() {
    return this.props.context;
  }
  render() {
    return this.props.children;
  }
}
