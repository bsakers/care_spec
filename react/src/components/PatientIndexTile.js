import React from 'react';
import { Link } from 'react-router';

const PatientIndexTile= (props) => {
  return (
    <div>
      <Link to={`/patients/${props.id}`}>
        <div className="row"> 
          <div className="large-3 columns">{props.firstName}</div>
          <div className="large-3 columns">{props.lastName}</div>
          <div className="large-3 columns">{props.age}</div>
          <div className="large-3 columns">{props.sex}</div>
        </div>
      </Link>
    </div>
  )
}

export default PatientIndexTile;
