import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

class GoogleMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      coordinates: []
    }
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
        this.setState({ coordinates: body })
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


    let coordinates
    coordinates= this.state.coordinates.map((coordinate, index)=>{
      return(
        <Marker
          key={index}
          lat={coordinate.lat}
          lng={coordinate.lng} />
      )
    })

    return (
      <Gmaps
        width={'1000px'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={13}
        loadingMessage={'Loading'}
        params={params}
        onMapCreated={this.onMapCreated}>
        {coordinates}
      </Gmaps>
    )
  }
}

export default GoogleMap;
