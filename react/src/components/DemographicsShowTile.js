import React from 'react';

const DemographicsShowTile= (props) => {
  return (
    <div className="demographicsShowTile">
      <p>First Name: {props.firstName}</p>
      <p>Middle Name: {props.middleName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Age: {props.age}</p>
      <p>Sex: {props.sex}</p>
      <p>Race: {props.race}</p>
      <p>Insurance: {props.insurance}</p>
      <p>Home Address: {props.homeAddress}</p>
    </div>
  )
}

export default DemographicsShowTile;
