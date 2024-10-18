"use client"

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl as any;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export default function LocationSection() {
  const position: [number, number] = [46.1944642, 6.1077371]

  return (
    <section className="flex flex-col items-center mt-40 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Ou nous <span className='text-secondary'>trouver</span> ?</h2>
      <div className="w-full max-w-3xl h-96">
        <MapContainer center={position} zoom={15} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              CFPT Informatique <br /> Route du Pont-Butin 43, 1213 Petit-Lancy
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
}