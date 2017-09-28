import React, { Component } from 'react';
import {PieChart} from 'react-easy-chart';
import ReactTooltip from 'simple-react-tooltip';
import ToolTip from './ToolTip'

class DiagnosesChartTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      patientCount: 0,
      patientDiagnosesCount: 0,
      data:[],
      showToolTip: false,
      top: null,
      left: null,
      value: null,
      key: null
    }
    this.mouseOverHandler=this.mouseOverHandler.bind(this)
    this.mouseOutHandler=this.mouseOutHandler.bind(this)
    this.createTooltip=this.createTooltip.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/diagnoses_chart`)
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
        this.setState({
          data: body.diagnoses_data,
          patientCount: body.patient_count,
          patientDiagnosesCount: body.patient_diagnoses_count })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      value: d.value,
      key: d.data.key})
  }


  mouseOutHandler() {
    this.setState({showToolTip: false});
  }

  createTooltip() {
    if (this.state.showToolTip) {
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}
          patientCount={this.state.patientCount}
          patientDiagnosesCount={this.state.patientDiagnosesCount}
          disease={this.state.key}
          count={this.state.value}
        />

      );
    }
    return false;
  }

  render() {

    return (
      <div>
        <PieChart
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}
          createTooltip={this.createTooltip}
          innerHoleSize={100}
          data={this.state.data.slice(0, 10)}
        />
        {this.createTooltip()}
      </div>
    )
  }
}

export default DiagnosesChartTile;
