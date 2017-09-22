import React from 'react';
import { Link } from 'react-router';

const AdmissionShowTile= (props) => {

  return (
    <div className="admissionShowTile">
      <Link to={`/admissions/${props.id}`}>
        <p>Admission Date: {props.admissionDate}</p>
      </Link>
    </div>
  )
}

export default AdmissionShowTile;
