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
  let rowIndex
  if (props.rowIndex == 5){
    rowIndex= "5+"
  } else {
    rowIndex= props.rowIndex
  }

  return(
    <tr>

    <th className="edVisitHeader">{rowIndex}</th>
      {cells}
    </tr>
  )
}




export default TableRow;
