import React, { Component } from 'react';
import {PieChart} from 'react-easy-chart';
import ReactTooltip from 'simple-react-tooltip';
import ToolTip from './ToolTip'

class DiagnosesChartTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedData: [],
      allPatientCount: 0,
      subsetPatientCount: 0,
      allData:[],
      fiftyData:[],
      tenData:[],
      fiveData:[],
      showToolTip: false,
      top: null,
      left: null,
      value: null,
      key: null
    }
    this.mouseOverHandler=this.mouseOverHandler.bind(this)
    this.mouseOutHandler=this.mouseOutHandler.bind(this)
    this.createTooltip=this.createTooltip.bind(this)
    this.setChartParamsAll=this.setChartParamsAll.bind(this)
    this.setChartParams50=this.setChartParams50.bind(this)
    this.setChartParams10=this.setChartParams10.bind(this)
    this.setChartParams5=this.setChartParams5.bind(this)
  }

  setChartParamsAll(){
    this.setState({ subsetPatientCount: this.state.allPatientCount })
    this.setState({ selectedData: this.state.allData })
  }

  setChartParams50(){
    this.setState({ subsetPatientCount: this.state.allPatientCount/2 })
    this.setState({ selectedData: this.state.fiftyData })
  }

  setChartParams10(){
    this.setState({ subsetPatientCount: this.state.allPatientCount/10 })
    this.setState({ selectedData: this.state.tenData })
  }

  setChartParams5(){
    this.setState({ subsetPatientCount: this.state.allPatientCount/20 })
    this.setState({ selectedData: this.state.fiveData })
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
          selectedData: body.all,
          allData: body.all,
          fiftyData: body.fifty_percent,
          tenData: body.ten_percent,
          fiveData: body.five_percent,
          allPatientCount: body.patient_count,
          subsetPatientCount: body.patient_count})
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
      let allPatientValue
      this.state.allData.forEach ((diagnosis)=> {
        if (diagnosis.key == this.state.key) {
          allPatientValue = diagnosis.value
        }
      })
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}
          allPatientCount={this.state.allPatientCount}
          subsetPatientCount={this.state.subsetPatientCount}
          disease={this.state.key}
          value={this.state.value}
          allPatientValue={allPatientValue}
        />

      );
    }
    return false;
  }

  render() {
    return (
      <div>
        <div className="chartToggle">
          <a data-dropdown="drop3" aria-controls="drop3" aria-expanded="false">Select Cost Subset</a>
          <div id="drop3" data-dropdown-content className="f-dropdown content" aria-hidden="true" tabIndex="-1">
          <p onClick={this.setChartParamsAll}>All Patients</p>
          <p onClick={this.setChartParams50}>Top 50% of Patients</p>
          <p onClick={this.setChartParams10}>Top 10% of Patients</p>
          <p onClick={this.setChartParams5}>Top 5% of Patients</p>
          </div>
        </div>
        <PieChart
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}
          createTooltip={this.createTooltip}
          innerHoleSize={100}
          data={this.state.selectedData.slice(0, 10)}
        />
        {this.createTooltip()}
      </div>
    )
  }
}

export default DiagnosesChartTile;
