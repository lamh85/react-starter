// What to render:
// content formatted, tooltips, heading, action buttons at right

export const columnSequence = ['name', 'email', 'income']

export const data = [
  {
    name: 'john',
    email: 'something@something.com',
    income: 55000
  },
  {
    name: 'jane',
    email: 'another@another.com',
    income: 45000
  },
]

const capitalize = value => value.toUpperCase()
const currency = value => Number(value).toFixed(2)

export const formatters = {
  name: capitalize,
  income: currency
}

export const tooltips = {
  name: 'some tip about name',
  income: 'some tip about income'
}

export const columnHeaders = {
  name: 'Name',
  email: 'Email',
  income: 'Income'
}

export const columnWidths = {
  name: 2, email: 2, income: 1
}