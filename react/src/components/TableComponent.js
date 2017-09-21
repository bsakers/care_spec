import React from 'react';

const TableComponent= (props) => {


  

  let handleClick=() => {
    console.log("gotcha")
  }

  if (props.patientsArray){
    return (
      <div className="TableBody">
      <table>
        <thead>
          <tr>
            <th>ED Visits \ Admissions </th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th>0</th>
            <td>{props.patientsArray[0][0].length}<div id="firstcell"></div></td>
            <td onClick={handleClick}>{props.patientsArray[0][1].length}</td>
            <td>{props.patientsArray[0][2].length}</td>
            <td>{props.patientsArray[0][3].length}</td>
            <td>{props.patientsArray[0][4].length}</td>
            <td>{props.patientsArray[0][5].length}</td>
          </tr>
          <tr>
          <th>1</th>
            <td>{props.patientsArray[1][0].length}</td>
            <td>{props.patientsArray[1][1].length}</td>
            <td>{props.patientsArray[1][2].length}</td>
            <td>{props.patientsArray[1][3].length}</td>
            <td>{props.patientsArray[1][4].length}</td>
            <td>{props.patientsArray[1][5].length}</td>
          </tr>
          <tr>
          <th>2</th>
            <td>{props.patientsArray[2][0].length}</td>
            <td>{props.patientsArray[2][1].length}</td>
            <td>{props.patientsArray[2][2].length}</td>
            <td>{props.patientsArray[2][3].length}</td>
            <td>{props.patientsArray[2][4].length}</td>
            <td>{props.patientsArray[2][5].length}</td>
          </tr>
          <tr>
          <th>3</th>
            <td>{props.patientsArray[3][0].length}</td>
            <td>{props.patientsArray[3][1].length}</td>
            <td>{props.patientsArray[3][2].length}</td>
            <td>{props.patientsArray[3][3].length}</td>
            <td>{props.patientsArray[3][4].length}</td>
            <td>{props.patientsArray[3][5].length}</td>
          </tr>
          <tr>
          <th>4</th>
            <td>{props.patientsArray[4][0].length}</td>
            <td>{props.patientsArray[4][1].length}</td>
            <td>{props.patientsArray[4][2].length}</td>
            <td>{props.patientsArray[4][3].length}</td>
            <td>{props.patientsArray[4][4].length}</td>
            <td>{props.patientsArray[4][5].length}</td>
          </tr>
          <tr>
          <th>5+</th>
            <td>{props.patientsArray[5][0].length}</td>
            <td>{props.patientsArray[5][1].length}</td>
            <td>{props.patientsArray[5][2].length}</td>
            <td>{props.patientsArray[5][3].length}</td>
            <td>{props.patientsArray[5][4].length}</td>
            <td>{props.patientsArray[5][5].length}</td>
          </tr>

        </tbody>
      </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Thissssss </h1>
      </div>
    )
  }

}

export default TableComponent;
