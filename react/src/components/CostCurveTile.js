import React, { Component } from 'react';
import {AreaChart} from 'react-easy-chart';

class CostCurveTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
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
      <AreaChart
        axes
        grid
        verticalGrid
        margin={{top: 30, right: 30, bottom: 30, left: 30}}
        areaColors={['#FFB629']}
        width={800}
        height={400}
        data={[
          this.state.data
        ]}
      />

    )
  }
}

export default CostCurveTile;
