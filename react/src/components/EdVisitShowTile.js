import React from 'react';
import { Link } from 'react-router';

const EdVisitShowTile= (props) => {
  return (
    <div className="edVisitShowTile">
      <Link to={`/ed_visits/${props.id}`}>
        <p>Visit Date: {props.visitDate}</p>
      </Link>
    </div>
  )
}

export default EdVisitShowTile;
