import React from 'react';

const DemographicsShowTile= (props) => {
  return (
    <div className="demographicsShowTile">
      <p>First Name: {props.firstName}</p>
      <p>Middle Name: {props.middleName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Age: {props.age}</p>
      <p>Sex: {props.sex}</p>
      <p>Ethnicity: </p>
      <p>Insurance: </p>
      <p>Home Address:</p>
    </div>
  )
}

export default DemographicsShowTile;
