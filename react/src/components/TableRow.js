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
  let rowSpan
  if (props.rowIndex == 1) {
    rowSpan= "ED"
  } else if(props.rowIndex == 2){
    rowSpan= "Visits"
  }
  return(
    <tr>
    <th id="EdVisitHeader" height="20">
      {rowSpan}
    </th>
    <th id="row">{rowIndex}</th>
      {cells}
    </tr>
  )
}




export default TableRow;
