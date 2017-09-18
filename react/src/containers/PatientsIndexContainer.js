import React, { Component } from 'react';
import PatientIndexTile from '../components/PatientIndexTile';

class PatientsIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      patients: []
    }
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

  render() {
    console.log(this.state)

    let patients = this.state.patients.map(patient => {
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

    return (
      <div>
        <h1> Patient Index Page </h1>
        {patients}
      </div>
    );
  }
}

export default PatientsIndexContainer;
