import React, { Component } from 'react';
import ProcedureShowTile from './ProcedureShowTile'

class EdVisitInfoTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      visit: {},
      procedures: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/ed_visits/${this.props.params.id}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ visit: body.ed_visit})
        this.setState({ procedures: body.procedures})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let procedures = this.state.procedures.map(procedure => {
      return(
        <ProcedureShowTile
          key= {procedure.id}
          id= {procedure.id}
          name= {procedure.name}
          cost= {procedure.cost}
        />
      )
    })

    let totalCost= 0
    this.state.procedures.forEach((procedure)=> {
      totalCost = totalCost + procedure.cost
    })





    return (
      <div className="row">
        <div className="large-5 columns edVisitInfoTile">
          <h4>Ed Visit Information: </h4>
          <div className="visitInfo">
            <p>Hospital: {this.state.visit.hospital}</p>
            <p>Visit Date: {this.state.visit.ed_visit_date}</p>
            <p>Reason for Visit:</p>
            <p>Total Visit Cost: ${totalCost}</p>
          </div>
        </div>
        <div className="large-5 columns proceduresInfoTile">
          <h4>Procedures: </h4>
          <div className="row">
            <div className="large-5 columns procedureHead">
              <p>Procedure </p>
            </div>
            <div className="large-5 columns costHead">
              <p>Cost ($) </p>
            </div>
          </div>
          {procedures}
        </div>
      </div>
    )
  }
}

export default EdVisitInfoTile;
