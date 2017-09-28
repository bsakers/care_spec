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

  let percentOfAll= props.count/props.allPatientCount* 100
  let percentOfSubset= props.count/props.subsetPatientCount *100

  return(
    <div className="tooltip-container" style={divStyle}>
      <span><h4>{props.disease}</h4>
      Percentage of all patients: {Math.round(percentOfAll*100)/100}%<br/>
      Percentage of this subset: {Math.round(percentOfSubset*100)/100}%</span>
    </div>
  )
};

export default ToolTip;
