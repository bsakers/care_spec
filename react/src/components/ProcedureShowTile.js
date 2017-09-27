import React from 'react';

const ProcedureShowTile= (props) => {

  return (
    <div className="row">
      <div className="large-5 columns procedureList">
        <p>{props.name}</p>

      </div>
      <div className="large-5 columns costList">
        <p>{props.cost}</p>
      </div>
    </div>
  )
}

export default ProcedureShowTile;
