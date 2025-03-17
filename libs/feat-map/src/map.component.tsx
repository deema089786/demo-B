import React, { useRef } from 'react';

import { useMap } from './use-map.hook';

export const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLElement>();
  const { map, isLoading } = useMap({ ref: mapContainerRef });
  console.log({ isLoading, map });

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
