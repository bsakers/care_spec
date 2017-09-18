import React, { Component } from 'react';
import PatientShowTile from '../components/PatientShowTile'

class PatientShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      patient: {},
      admissions: []
    }
  }

  componentDidMount() {
    let path = location.pathname
    fetch(`/api/v1/${path}`)
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
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    console.log(this.state)
    let admissions;
    admissions= this.state.admissions.map(admission => {
      return(
        <PatientShowTile
          key={admission.id}
          id={admission.id}
          hospital={admission.hospital}
          lengthOfStay={admission.length_of_stay}
          admissionDate={admission.admission_date}
        />
      )
    })

    return (
      <div>
        <h3> First Name: {this.state.patient.first_name} </h3>
        <h3> Middle Name: {this.state.patient.middle_name} </h3>
        <h3> Last Name: {this.state.patient.last_name} </h3>
        {admissions}
      </div>
    );
  }
}

export default PatientShowContainer;
