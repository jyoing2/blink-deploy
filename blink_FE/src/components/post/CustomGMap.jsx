import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GMapContainer = styled.div`
  width: 1390px;
  height: 1080px;
`;

function CustomGMap() {
  const googleMapApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
  const [map, setMap] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 37.569227,
    lng: 126.9777256,
  };

  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  const loadGoogleMapsScript = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
  };

  const initMap = () => {
    const mapOptions = {
      center: center,
      zoom: 16,
    };

    setMap(
      new window.google.maps.Map(document.getElementById("map"), mapOptions)
    );
  };

  const mapLocation = [
    { lat: 37.569227, lng: 126.9777256 }, // Example marker location
    { lat: 37.569224, lng: 126.9777257 },
    { lat: 37.56922, lng: 126.977725 },
    // Add more marker locations as needed
  ];

  const mapviewMarkerClickHandler = (e) => {
    // Handle marker click event
  };

  return (
    <GMapContainer id="map">
      {map && (
        <LoadScript googleMapsApiKey={googleMapApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            {mapLocation.map((location, index) => (
              <Marker
                position={location}
                key={index}
                onClick={(e) => mapviewMarkerClickHandler(e)}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      )}
    </GMapContainer>
  );
}

export default CustomGMap;
