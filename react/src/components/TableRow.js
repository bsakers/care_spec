import React from 'react';
import TableCell from '../components/TableCell'

const TableRow= (props) => {

  let cells = props.row.map((cell, index) => {
    return(
      <TableCell
        key={index}
        cellIndex={index}
        rowIndex={props.rowIndex}
        cell={cell}
        toggleSelectedCell={props.toggleSelectedCell}
      />
    )
  })

  return(
    <tr>
    <th>{props.rowIndex}</th>
      {cells}
    </tr>
  )
}




export default TableRow;
