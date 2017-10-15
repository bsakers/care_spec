import PatientsIndexContainer from '../../src/containers/PatientsIndexContainer';
import PatientIndexTile from '../../src/components/PatientIndexTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import CostCurveTile from '../../src/components/CostCurveTile';
import DiagnosesChartTile from '../../src/components/DiagnosesChartTile';
import GoogleMap from '../../src/components/GoogleMap';


describe('PatientsIndexContainer', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper= mount(
      <PatientsIndexContainer/>
    )
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({patients: null, selectedCell: null})
  });

  it('should render a table', () => {
    expect(wrapper.find('table')).toBePresent()
  });

  it('should not render a PatientIndexTile component without selecting a cell', () =>{
    expect(wrapper.find(PatientIndexTile)).not.toBePresent();
  })

  it('should render the PatientIndexTile component after selecting a cell', () => {
    wrapper.setState({
      patients:
        [
          [
            [
              {
                id: 1873,
                first_name: "Earlene",
                middle_name: "Joy",
                last_name: "Tremblay",
                age: 59,
                sex: "Female",
                created_at: "2017-09-29T13:23:14.686Z",
                updated_at: "2017-09-29T13:27:30.411Z",
                race: "Hispanic/Latino",
                insurance: "Kaiser",
                home_address: "682, Philadelphia, PA",
                address_lat: 40.6226629,
                address_lng: -79.1531163,
                cost: 0
              }
            ]
          ]
        ],
      selectedCell: [0, 0]
    })
    expect(wrapper.find(PatientIndexTile)).toBePresent();
  })

  it('should render the CostCurveTile', () => {
    expect(wrapper.find(CostCurveTile)).toBePresent();
  })

  it('should render the DiagnosesTile', () => {
    expect(wrapper.find(DiagnosesChartTile)).toBePresent();
  })

  it('should render the GoogleMap', () => {
    expect(wrapper.find(GoogleMap)).toBePresent();
  })

});
