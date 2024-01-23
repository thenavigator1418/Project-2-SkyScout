import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

export default function gMap() {
    const position = { lat: 52.63, lng: 1.29 };
    const [open, setOpen] = useState(false);

    return <APIProvider apiKey='AIzaSyBckPV6MTuYZXhkJGIVFo1up1j3a4zsfdw'>
        <div style={{ height: "300px", width: "300px" }}>
            <Map
                zoom={15}
                center={position}
                mapId={'70d05cd5adf81da8'}>
                <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    <Pin /></AdvancedMarker>
                {open && (
                    <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                        <p>SkyScout<br></br>Catherine Wheel Opening<br>Norwich<br>NR3 3BQ</br></br></p>
                    </InfoWindow>
                )}
            </Map>
        </div>
    </APIProvider>
}