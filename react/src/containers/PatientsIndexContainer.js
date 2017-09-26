import React, { Component } from 'react';
import PatientIndexTile from '../components/PatientIndexTile';
import TableRow from '../components/TableRow';
import CostCurveTile from '../components/CostCurveTile';
import DiagnosesChartTile from '../components/DiagnosesChartTile'

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
        <table className="unstriped">
          <thead>
            <tr>
              <th className="admissionHeader" rowSpan={2} colSpan={2}></th>
              <th className="admissionHeader" colSpan={8}> Admissions </th>
            </tr>
            <tr>
              <th className="admissionHeader" width= "100">0</th>
              <th className="admissionHeader" width= "100">1</th>
              <th className="admissionHeader" width= "100">2</th>
              <th className="admissionHeader" width= "100">3</th>
              <th className="admissionHeader" width= "100">4</th>
              <th className="admissionHeader" width= "100">5+</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="edHeader" rowSpan={8}>E.D. Visits</th>
            </tr>
            {rows}
          </tbody>
        </table>

        <div className="PatientIndex">
          <div className="row">
            <div className="large-3 columns">Last Name</div>
            <div className="large-3 columns">First Name</div>
            <div className="large-3 columns">Age</div>
            <div className="large-3 columns">Sex</div>
          </div>
          {patients}
        </div>

        <div className="row costCurve">
          <div className="row curveData">
            <div className="large-1 column xAxis">Percentage of Cost</div>
            <div className="large-11 columns"><CostCurveTile/></div>
          </div>
          <div className="row yAxis">
            <div className="large-12 columns">Percentage of Patients</div>
          </div>
        </div>
        <div className="row diseaseStateTile">
          <DiagnosesChartTile/>
        </div>
      </div>
    );
  }
}

export default PatientsIndexContainer;
