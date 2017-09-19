import React from 'react';

const DiagnosisShowTile= (props) => {
  return (
    <div className="DiagnosisShowTile">
      <p>Diagnosis: {props.name}</p>
    </div>
  )
}

export default DiagnosisShowTile;
