import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {


    componentDidMount() {
        debugger;
        console.log(this.props)
    }
    containerStyle = {
        position: 'relative',
        width: '100%',
        height: '45vh'
    }

    onMarkerClick = () => {

    }

    onInfoWindowClose = () => {

    }

    render() {
        return (
            <Map
                google={this.props.google}
                containerStyle={this.containerStyle}
                zoom={4}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        {/* <h1>{this.state.selectedPlace.name}</h1> */}
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDBBj7J-SYa1rgiW88t7MCSR6Dxa9xDHt8')
})(MapContainer)