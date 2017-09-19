import React from 'react';

const AdmissionShowTile= (props) => {
  return (
    <div className="AdmissionShowTile">
      <p>Hospital: {props.hospital}</p>
      <p>Admission Date: {props.admissionDate}</p>
      <p>Length of Stay: {props.lengthOfStay}</p>
    </div>
  )
}

export default AdmissionShowTile;
