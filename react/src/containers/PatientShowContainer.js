import React, { Component } from 'react';
import AdmissionShowTile from '../components/AdmissionShowTile'
import EdVisitShowTile from '../components/EdVisitShowTile'

class PatientShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      patient: {},
      admissions: [],
      edVisits: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/patients/${this.props.params.id}`)
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
        this.setState({ patient: body.patient})
        this.setState({ admissions: body.admissions })
        this.setState({ edVisits: body.ed_visits})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    console.log(this.state)
    let admissions;
    admissions= this.state.admissions.map(admission => {
      return(
        <AdmissionShowTile
          key={admission.id}
          id={admission.id}
          hospital={admission.hospital}
          lengthOfStay={admission.length_of_stay}
          admissionDate={admission.admission_date}
        />
      )
    })

    let edVisits;
    edVisits= this.state.edVisits.map(visit =>{
      return(
        <EdVisitShowTile
          key={visit.id}
          id={visit.id}
          hospital={visit.hospital}
          visitDate={visit.ed_visit_date}
        />
      )
    })

    return (
      <div>
        <h3> First Name: {this.state.patient.first_name} </h3>
        <h3> Middle Name: {this.state.patient.middle_name} </h3>
        <h3> Last Name: {this.state.patient.last_name} </h3>
        {admissions}
        {edVisits}
      </div>
    );
  }
}

export default PatientShowContainer;
