import React from 'react';

const TableCell= (props) => {
  let handleClick=() => {
    props.toggleSelectedCell(props.rowIndex, props.cellIndex)
  }

  return(
    <td className="dataCell" onClick={handleClick}>
      {props.cell.length}
    </td>
  )
}




export default TableCell;
