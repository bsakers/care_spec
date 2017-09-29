import React, { Component } from 'react';
import AdmissionShowTile from '../components/AdmissionShowTile'
import EdVisitShowTile from '../components/EdVisitShowTile'
import DiagnosisShowTile from '../components/DiagnosisShowTile'
import DemographicsShowTile from '../components/DemographicsShowTile'

class PatientShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      patient: {},
      diagnoses: [],
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
        this.setState({ diagnoses: body.patient_diagnoses })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {


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

    let diagnoses;
    diagnoses= this.state.diagnoses.map(diagnosis =>{
      return(
        <DiagnosisShowTile
          key={diagnosis.id}
          id={diagnosis.id}
          name={diagnosis.name}
        />
      )
    })

    return (
      <div className="patientShow">
        <div className = "row expanded">
          <div className="large-3 columns patientInfo">Patient Demographics
            <DemographicsShowTile
              key={this.state.patient.id}
              id={this.state.patient.id}
              firstName={this.state.patient.first_name}
              middleName={this.state.patient.middle_name}
              lastName={this.state.patient.last_name}
              age={this.state.patient.age}
              sex={this.state.patient.sex}
              race={this.state.patient.race}
              insurance={this.state.patient.insurance}
              homeAddress={this.state.patient.home_address}
            />
          </div>
          <div className="large-3 columns patientDiagnoses">Diagnoses
            {diagnoses}
          </div>
          <div className="large-3 columns patientVisits">ED Visits
            {edVisits}
          </div>
          <div className="large-3 columns patientAdmissions">Admissions
            {admissions}
          </div>
        </div>

      </div>
    );
  }
}

export default PatientShowContainer;
