import React from 'react';
import { Link } from 'react-router';

const PatientIndexTile= (props) => {
  return (
    <div className="small-12 small-centered medium-8 medium-centered PatientIndexTile">
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
