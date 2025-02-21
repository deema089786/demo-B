import React, { useEffect, useRef } from 'react';
import { GoogleMap } from '@capacitor/google-maps';

export const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLElement>();
  const mapRef = useRef<GoogleMap | null>(null);
  const isMapLoading = useRef<boolean>(false);
  useEffect(() => {
    console.log('1');
    if (!mapContainerRef.current) return;
    console.log('2');

    if (mapRef.current) return;
    console.log('3');

    if (isMapLoading.current) return;
    console.log('Starting map...');
    const exec = async () => {
      if (!mapContainerRef.current) return;
      isMapLoading.current = true;
      mapRef.current = await GoogleMap.create({
        id: 'my-cool-map',
        element: mapContainerRef.current,
        // apiKey: process.env.REACT_APP_YOUR_API_KEY_HERE,
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
        config: {
          center: {
            lat: 33.6,
            lng: -117.9,
          },
          zoom: 8,
        },
      });
      isMapLoading.current = false;
    };
    exec().catch(console.error);
  }, []);

  return (
    <capacitor-google-map
      ref={mapContainerRef}
      style={{
        display: 'inline-block',
        width: '100%',
        height: 300,
        borderRadius: '16px',
      }}
    ></capacitor-google-map>
  );
};
