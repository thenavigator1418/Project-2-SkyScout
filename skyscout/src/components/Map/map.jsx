import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const map = () => {

    const apiKey = 'AIzaSyBckPV6MTuYZXhkJGIVFo1up1j3a4zsfdw';

    const mapContainerStyle = {
        width: '100%',
        height: '200px',
    };

    const center = {
        lat: 52.638570,
        lng: 1.292220,
    };

    return (
        <div>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>

                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
            <div>
                <p>Your footer content goes here.</p>
            </div>
        </div>
    );
};

export default map;
