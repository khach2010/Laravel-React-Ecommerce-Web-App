import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class App extends Component {
  render() {
    return (
      <div>
        App
        <Button variant="warning">Warning</Button>
        <Button variant="success">
          <i className="fa-solid fa-house-user"></i>
        </Button>
      </div>
    )
  }
}

export default App
