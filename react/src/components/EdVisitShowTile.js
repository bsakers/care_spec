import React from 'react';

const EdVisitShowTile= (props) => {
  return (
    <div className="EdVisitShowTile">
      <p>Hospital: {props.hospital}</p>
      <p>Visit Date: {props.visitDate}</p>
    </div>
  )
}

export default EdVisitShowTile;
