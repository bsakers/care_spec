import React from 'react';

const PatientShowTile= (props) => {
  return (
    <div className="PatientShowTile">
      <p>Hospital: {props.hospital}</p>
      <p>Admission Date: {props.admissionDate}</p>
      <p>Length of Stay: {props.lengthOfStay}</p>
    </div>
  )
}

export default PatientShowTile;
