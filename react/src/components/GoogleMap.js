import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

class GoogleMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allCoordinates: [],
      selectedCoordinates: [],
    }
    this.setMapParamsAll=this.setMapParamsAll.bind(this)
    this.setMapParams50=this.setMapParams50.bind(this)
    this.setMapParams10=this.setMapParams10.bind(this)
    this.setMapParams5=this.setMapParams5.bind(this)
  }
  setMapParamsAll(){

    this.setState({ selectedCoordinates: this.state.allCoordinates })
  }

  setMapParams50(){
    this.setState({ selectedCoordinates: this.state.allCoordinates.slice(0, 50) })
  }

  setMapParams10(){
    this.setState({ selectedCoordinates: this.state.allCoordinates.slice(0, 10) })
  }

  setMapParams5(){
    this.setState({ selectedCoordinates: this.state.allCoordinates.slice(0, 5) })
  }

  componentDidMount() {
    fetch(`/api/v1/map`)
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
        this.setState({ allCoordinates: body })
        this.setState({ selectedCoordinates: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    const coords = {
      lat: 39.9494894,
      lng: -75.1677764
    };
    const params = {v: '3.exp', key: 'AIzaSyCurjt-cN715NnmWczzEaR80om60qg7XjM'};


    let selectedCoordinates
    selectedCoordinates= this.state.selectedCoordinates.map((coordinate, index)=>{
      return(
        <Marker
          key={index}
          lat={coordinate.lat}
          lng={coordinate.lng} />
      )
    })

    return (
      <div>
        <div className="mapToggle">
          <a data-dropdown="drop4" aria-controls="drop4" aria-expanded="false">Select Cost Subset</a>
          <div id="drop4" data-dropdown-content className="f-dropdown content" aria-hidden="true" tabIndex="-1">
          <p onClick={this.setMapParamsAll}>All Patients</p>
          <p onClick={this.setMapParams50}>Top 50% of Patients</p>
          <p onClick={this.setMapParams10}>Top 10% of Patients</p>
          <p onClick={this.setMapParams5}>Top 5% of Patients</p>
          </div>
        </div>
        <Gmaps className="map"
          width={'1000px'}
          height={'400px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={13}
          loadingMessage={'Loading'}
          params={params}
          onMapCreated={this.onMapCreated}>
          {selectedCoordinates}
        </Gmaps>
      </div>
    )
  }
}

export default GoogleMap;
