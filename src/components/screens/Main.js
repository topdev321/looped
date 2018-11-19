import React, { Component } from 'react';

import LoginRegister from './LoginRegister';
import PageTwo from './Dashboard';
import Compose from './Compose';



export default class Main extends Component {
  static convert() {
    console.log('convert');
  }
  static compose() {
    console.log('compose');
  }
  static pop() {
  }

  render() {
    return (
      <LoginRegister />
    );
  }
}
