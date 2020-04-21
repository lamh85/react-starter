# Tips and Lessons

It's better to pass many flat props into `Table` rather than passing one deep prop.

It's unavoidable to repeat some property names. There are only two choices:
1. Repeat the name of the column names: name, email address, etc.
2. Repeat the name of the DOM's property: style, tooltip, etc.

Option 1:
```javascript
const styles = { name: 'something', email: 'something'}
const columnNames = ['name', 'email']
```

Option 2
```javascript
const name = { style: 'something', columnIndex: 0 }
const email = { style: 'something', columnIndex: 1 }
```