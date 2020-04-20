import React, { Component } from "react"
import styled from 'styled-components'

import { Cell } from './Cell.jsx'

const getColumnStyle = widths => {
  return widths.map(item => `${item}fr`).join(" ")
}

const Header = styled.div`
  display: grid;
  ${props => `
    grid-template-columns: ${getColumnStyle(props.widths)};
  `}
  grid-template-rows: 1fr;
`

const HeaderCell = styled(Cell)`
  font-weight: bold;
`

class Header extends Component {
  renderCell = name => {
    const {
      columnHeaders,
      tooltips
    } = this.props

    return (
      <HeaderCell tooltip={tooltips[name]}>
        {columnHeaders[name]}
      </HeaderCell>
    )
  }

  render() {
    return (
      <Header>
        {this.props.columnSequence.map(this.renderCell)}
      </Header>
    )
  }
}

export { Header }
