import React, { Component } from "react"
import { hot } from "react-hot-loader"

import { Table } from './table/Table.jsx'

class App extends Component {
  render() {
    return <Table />
  }
}

export default hot(module)(App)