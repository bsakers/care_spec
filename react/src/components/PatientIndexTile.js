import React from 'react';
import { Link } from 'react-router';

const PatientIndexTile= (props) => {
  return (
    <div className="PatientIndexTile">
      <Link to={`/patients/${props.id}`}>
        <h5>{props.firstName}
        {props.middleName}
        {props.lastName}
        {props.age}
        {props.sex}</h5>
      </Link>
    </div>
  )
}

export default PatientIndexTile;
