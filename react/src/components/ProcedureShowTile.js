import React from 'react';

const ProcedureShowTile= (props) => {

  return (
    <div className="row">
      <div className="large-4 columns procedureList">
        <p>Procedure: </p>
        <p>{props.name}</p>

      </div>
      <div className="large-4 columns costList">
        <p>Cost: $</p>
        <p>{props.cost}</p>
      </div>
    </div>
  )
}

export default ProcedureShowTile;
