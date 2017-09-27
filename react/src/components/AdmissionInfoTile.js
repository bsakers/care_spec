import React, { Component } from 'react';
import ProcedureShowTile from './ProcedureShowTile'

class AdmissionInfoTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      admission: {},
      procedures: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/admissions/${this.props.params.id}`)
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
        this.setState({ admission: body.admission})
        this.setState({ procedures: body.procedures})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let procedures = this.state.procedures.map(procedure => {
      return(
        <ProcedureShowTile
          key= {procedure.id}
          id= {procedure.id}
          name= {procedure.name}
          cost= {procedure.cost}
        />
      )
    })

    let totalCost= 0
    this.state.procedures.forEach((procedure)=> {
      totalCost = totalCost + procedure.cost
    })





    return (
      <div className="row">
        <div className="large-5 columns admissionInfoTile">
          <h4>Admission Information: </h4>
          <div className="admissionInfo">
            <p>Hospital: {this.state.admission.hospital}</p>
            <p>Admission Date: {this.state.admission.admission_date}</p>
            <p>Reason for Admission:</p>
            <p>Length of stay: {this.state.admission.length_of_stay}</p>
            <p>Total Admission Cost: ${totalCost}</p>
          </div>
        </div>
        <div className="large-5 columns proceduresInfoTile">
          <h4>Procedures: </h4>
          <div className="row">
            <div className="large-5 columns procedureHead">
              <p>Procedure </p>
            </div>
            <div className="large-5 columns costHead">
              <p>Cost ($) </p>
            </div>
          </div>
          {procedures}
        </div>
      </div>
    )
  }
}

export default AdmissionInfoTile;
