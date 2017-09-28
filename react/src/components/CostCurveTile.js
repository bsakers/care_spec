import React, { Component } from 'react';
import {AreaChart} from 'react-easy-chart';

class CostCurveTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      xParams: 100,
      yParams: 100,
    }
    this.setCurveParamsAll=this.setCurveParamsAll.bind(this)
    this.setCurveParams50=this.setCurveParams50.bind(this)
    this.setCurveParams10=this.setCurveParams10.bind(this)
    this.setCurveParams5=this.setCurveParams5.bind(this)
  }
  setCurveParamsAll(){
    this.setState({ xParams: 100 })
    this.setState({ yParams: 100 })
  }

  setCurveParams50(){
    this.setState({ xParams: 50 })
    this.setState({ yParams: 85 })
  }

  setCurveParams10(){
    this.setState({ xParams: 10 })
    this.setState({ yParams: 30 })
  }

  setCurveParams5(){
    this.setState({ xParams: 5 })
    this.setState({ yParams: 20 })
  }

  componentDidMount() {
    fetch(`/api/v1/cost_curve`)
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
        this.setState({ data: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div>
        <div className="curveToggle">
          <a data-dropdown="drop2" aria-controls="drop2" aria-expanded="false">Select Cost Subset</a>
          <div id="drop2" data-dropdown-content className="f-dropdown content" aria-hidden="true" tabIndex="-1">
          <p onClick={this.setCurveParamsAll}>All Patients</p>
          <p onClick={this.setCurveParams50}>Top 50% of Patients</p>
          <p onClick={this.setCurveParams10}>Top 10% of Patients</p>
          <p onClick={this.setCurveParams5}>Top 5% of Patients</p>
          </div>
        </div>

        <AreaChart
          axes
          grid
          verticalGrid
          xDomainRange={[0, this.state.xParams]}
          yDomainRange={[0, this.state.yParams]}
          margin={{top: 30, right: 30, bottom: 30, left: 30}}
          areaColors={['#FFB629']}
          width={800}
          height={400}
          data={[
            this.state.data
          ]}
        />
      </div>
    )
  }
}

export default CostCurveTile;
