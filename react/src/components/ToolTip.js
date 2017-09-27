import React from 'react';

const ToolTip = (props) => {

  let divStyle={
    border: 'solid silver 1px',
    position: 'fixed',
    color: '#5D7697',
    top: `${props.top}px`,
    left: `${props.left}px`,
    backgroundColor: 'white',
    borderRadius: '4px',
    padding: '10px'
  }

  let patientPercentage= props.count/props.patientCount* 100
  let diagnosisPercetange= props.count/props.patientDiagnosesCount

  return(
    <div className="tooltip-container" style={divStyle}>
      <span><h4>{props.disease}</h4>
      Percetage of all Patients: {Math.round(patientPercentage*100)/100}%<br/>
      Percentage of all Diagnoses: {Math.round(diagnosisPercetange*100)/100}%</span>
    </div>
  )
};

export default ToolTip;
