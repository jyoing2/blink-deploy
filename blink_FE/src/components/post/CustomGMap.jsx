import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const GMapContainer = styled.div`
  position: relative;
  width: 1390px;
  height: 1080px;
`;

const Input = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 700px;
  height: 100px;
  border: 3px dotted red;
  z-index: 5;
`;

function CustomGMap() {
  const googleMapApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [predictions, setPredictions] = useState([]); // 예측 결과 배열 추가

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
    initAutocomplete();
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
      // map에서 fullscreen 버튼 지우기
      fullscreenControl: false,
    };

    setMap(
      new window.google.maps.Map(document.getElementById("map"), mapOptions)
    );
  };

  const initAutocomplete = () => {
    if (window.google && window.google.maps) {
      setAutocomplete(new window.google.maps.places.AutocompleteService());
    }
  };

  const handlePlacePredictions = (predictions) => {
    setPredictions(predictions); // 예측 결과 저장
  };

  const handleInputChange = (e) => {
    if (autocomplete) {
      autocomplete.getPlacePredictions(
        {
          input: e.target.value,
        },
        handlePlacePredictions
      );
    }
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
    <>
      <Autocomplete>
        <Input
          type="text"
          placeholder="address"
          onChange={handleInputChange} // 입력 값이 변경될 때마다 호출
        />
      </Autocomplete>
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
    </>
  );
}

export default CustomGMap;
