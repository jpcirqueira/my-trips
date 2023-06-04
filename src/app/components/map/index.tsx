'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export type Place = {
    slug: string;
    id: string;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    }
}

export type MapProps = {
    places?: Place[]
}

const Map = ({ places }: MapProps) => {

    return (
      <MapContainer center={[0,0]} zoom={3} style={{ width: '100%', height: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            places?.map(({id, name, location}) => {
                const {latitude, longitude} = location
                return(
                    <Marker position={[latitude, longitude]} key={`place-${id}`} title={name} />
                )
            })
        }
        
      </MapContainer>
    )
}

export default Map