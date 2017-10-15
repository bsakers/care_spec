import PatientShowContainer from '../../src/containers/PatientShowContainer'
import { mount } from 'enzyme';

import React from 'react';
import AdmissionShowTile from '../../src/components/AdmissionShowTile';
import EdVisitShowTile from '../../src/components/EdVisitShowTile';
import DiagnosisShowTile from '../../src/components/DiagnosisShowTile';
import DemographicsShowTile from '../../src/components/DemographicsShowTile';

describe('PatientShowContainer', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper= mount(
      <PatientShowContainer
        params={1}
      />
    )
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      patient: {},
      diagnoses: [],
      admissions: [],
      edVisits: [] })
  });


  it('should render the AdmissionShowTile with specified props after setting the state', () => {
    wrapper.setState({
      admissions: [
        {
          id: 1148,
          patient_id: 1862,
          hospital: "Virtua",
          length_of_stay: 4,
          admission_date: "2016-12-05",
          created_at: "2017-09-29T13:24:45.874Z",
          updated_at: "2017-09-29T13:24:45.874Z"
        }
      ] })
    expect(wrapper.find(AdmissionShowTile)).toBePresent();
  })

  it('should render the EdVisitShowTile with specified props after setting the state', () => {
    wrapper.setState({
      edVisits: [
        {
          id: 1158,
          patient_id: 1862,
          hospital: "Virtua",
          ed_visit_date: "2017-03-29",
          created_at: "2017-09-29T13:24:46.612Z",
          updated_at: "2017-09-29T13:24:46.612Z"
        }
      ] })
    expect(wrapper.find(EdVisitShowTile)).toBePresent();
  })

  it('should render the DiagnosisShowTile with specified props after setting the state', () => {
    wrapper.setState({
      diagnoses: [
        {
          id: 315,
          name: "Acute bronchitis",
          created_at: "2017-09-29T13:24:46.909Z",
          updated_at: "2017-09-29T13:24:46.909Z"
        }
      ] })
    expect(wrapper.find(DiagnosisShowTile)).toBePresent();
  })

  it('should render the DemographicsShowTile with specified props after setting the state', () => {
    wrapper.setState({
      patient: [
        {
          id: 1,
          first_name: "Lonnie",
          middle_name: "Richie",
          last_name: "Erdman",
          age: 62,
          sex: "Female",
          created_at: "2017-09-29T13:23:14.657Z",
          updated_at: "2017-09-29T13:27:30.291Z",
          race: "Hispanic/Latino",
          insurance: "Medicaid",
          home_address: "1675, Philadelphia, PA",
          address_lat: 39.9532657,
          address_lng: -75.168282,
          cost: 3660
        }
      ] })
    expect(wrapper.find(DemographicsShowTile)).toBePresent();
  })
});
