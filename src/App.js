import React from 'react';
import './App.css';
import { Map, TileLayer } from 'react-leaflet';
import Search from "react-leaflet-search";


class App extends React.Component {
  israel = {
    telAviv: {
      lat: 32.0853,
      lng: 34.7818,
    },
    zoom: 13
  }

  render(){
    const positionTelAviv = [this.israel.telAviv.lat, this.israel.telAviv.lng];
    return (
      <Map className="map" center={positionTelAviv} zoom={this.israel.zoom}>
        <Search     provider="OpenStreetMap"
                    position="topleft"
                    zoom={14}
                    inputPlaceholder="חפש מיקום"/>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

export default App;