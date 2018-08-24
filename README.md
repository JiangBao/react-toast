# react-toast

## Usage
```js
import React, { Component } from 'react';
import Toast from 'react-simple-toast';

class ShowToast extends Component {
  constructor() {
    super();
    this.showToast = this.showToast.bind(this);
  }

  showToast() {
    Toast('test 4 toast!');
  }

  render() {
    return (
      <div>
        <button onClick={this.showToast}>click to show toast</button>
      </div>
    );
  }
}

export default ShowToast;
```
