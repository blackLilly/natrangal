import { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {


    componentDidMount() {
        debugger;
        console.log(this.props)
    }

    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                {/* <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow> */}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDBBj7J-SYa1rgiW88t7MCSR6Dxa9xDHt8')
})(MapContainer)