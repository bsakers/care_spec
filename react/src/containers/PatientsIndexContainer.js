import React, { Component } from 'react';
import PatientIndexTile from '../components/PatientIndexTile';
import TableComponent from '../components/TableComponent'
import TableRow from '../components/TableRow'

class PatientsIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      patients: null,
      selectedCell: null
    }
    this.toggleSelectedCell=this.toggleSelectedCell.bind(this)
  }

  componentDidMount() {
    fetch('api/v1/patients/')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ patients: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  toggleSelectedCell(rowIndex, cellIndex) {


    this.setState({ selectedCell: [rowIndex, cellIndex] })

    // if (cell === this.state.selectedCell) {
    //   this.setState({ selectedCell: null})
    // } else {
    //   this.setState({ selectedCell: cell })
    // }
  }

  render() {
    let patients
    if (this.state.selectedCell){
      patients = this.state.patients[this.state.selectedCell[0]][this.state.selectedCell[1]].map(patient => {
        return(
          <PatientIndexTile
            key={patient.id}
            id={patient.id}
            firstName={patient.first_name}
            middleName={patient.middle_name}
            lastName={patient.last_name}
            age={patient.age}
            sex={patient.sex}
          />
        )
      })
    }
    let rows
    if (this.state.patients){
      rows = this.state.patients.map((row, index) => {
        return(
          <TableRow
            key={index}
            rowIndex={index}
            row={row}
            toggleSelectedCell={this.toggleSelectedCell}
          />
        )
      })
    }


    return (
      <div>



        <div className="wrapper">
        <table >
          <thead>
            <tr>
              <th colSpan={8}> Admissions </th>
            </tr>
            <tr id="row">
              <th rowSpan={7}></th>
              <th width= "50"> </th>
              <th width= "100">0</th>
              <th width= "100">1</th>
              <th width= "100">2</th>
              <th width= "100">3</th>
              <th width= "100">4</th>
              <th width= "100">5+</th>
            </tr>


          </thead>
          <tbody>

            {rows}
          </tbody>
        </table>
        </div>
        <div className="PatientIndex">
        {patients}
        </div>
      </div>
    );
  }
}

export default PatientsIndexContainer;
