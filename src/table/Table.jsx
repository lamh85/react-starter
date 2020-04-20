import React, { Component } from "react"

import {
  columnSequence,
  data,
  formatters,
  tooltips,
  columnHeaders,
  columnWidths
} from './data.js'
import { Header } from './Header.jsx'
import { Row } from './Row.jsx'

const COMMON_PROPS = { columnSequence, columnWidths }

class Table extends Component {
  renderHeader = () => {
    const props = { ...COMMON_PROPS, tooltips, columnHeaders }
    return <Header {...props} />
  }

  renderRows = () => {
    return data.map((row, index) => {
      const props = { ...COMMON_PROPS, ...row, formatters, key: index }
      return <Row {...props} />
    })
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.renderRows()}
      </>
    )
  }
}

export { Table }