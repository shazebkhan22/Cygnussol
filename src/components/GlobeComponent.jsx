import Globe from 'react-globe.gl';
import { useEffect, useRef } from 'react';

const GlobeComponent = () => {
  const globeEl = useRef();

  const markers = [
    { lat: 19.1162, lng: 72.9083, name: 'Mumbai Office' },
    { lat: 28.584953, lng: 77.315888, name: 'NCR Office' },
    { lat: 18.5362, lng: 73.8997, name: 'Pune Office' },
    { lat: 30.3165, lng: 78.0322, name: 'Dehradun Office' },
  ];

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2 }, 2000);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Blue Half */}
      <div style={{ width: '20%', backgroundColor: 'blue' }}>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          pointsData={markers}
          pointAltitude={() => 0.05}
          pointColor={() => 'red'}
          pointLabel={(marker) => `<b>${marker.name}</b>`}
          backgroundColor="#0d1252"
        />
      </div>
      
      {/* White Half */}
      <div style={{ width: '50%', backgroundColor: 'white' }}>
        {/* Add content for the white section here */}
      </div>
    </div>
  );
};

export default GlobeComponent;
