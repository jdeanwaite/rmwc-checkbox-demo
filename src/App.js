import React, { Component } from 'react';
import logo from './logo.svg';
import { Checkbox, Button} from 'rmwc'
import './App.css';
import '../node_modules/material-components-web/dist/material-components-web.min.css'

class App extends Component {
    state = {
        checked1: true,
        checked2: true,
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <div>
              <Checkbox
                  checked={this.state.checked1}
                  onChange={e => {
                      console.log('change', e.target.checked)
                      this.setState({ checked1: e.target.checked })
                  }}
              >
                  Test 1
              </Checkbox>
              <Checkbox
                  checked={this.state.checked2}
                  onChange={e => {
                      console.log('change', e.target.checked)
                      this.setState({ checked2: e.target.checked })
                  }}
              >
                  Test 2
              </Checkbox>
              <Button onClick={() => this.setState({ checked1: true })}>Change</Button>
          </div>
      </div>
    );
  }
}

export default App;
