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
  const [predictions, setPredictions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({ lat: 37.468352, lng: 127.039021 }); // 추가: 중앙 위치 상태

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initMap();
        initAutocomplete();
      };
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: center, // 중앙 위치 설정
      zoom: 16,
      fullscreenControl: false,
    };
    const newMap = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    newMap.addListener("click", (event) => {
      const clickedLatLng = event.latLng.toJSON();
      setClickedLocation(clickedLatLng);

      clearMarkers();
      const marker = new window.google.maps.Marker({
        position: clickedLatLng,
        map: newMap,
        title: "선택한 위치",
      });
      setMarkers([marker]);
    });

    // 중앙 위치가 변경되면 맵의 중앙 위치를 업데이트합니다.
    newMap.addListener("center_changed", () => {
      const newCenter = newMap.getCenter().toJSON();
      setCenter(newCenter);
    });

    setMap(newMap);
  };

  const initAutocomplete = () => {
    if (window.google && window.google.maps) {
      setAutocomplete(new window.google.maps.places.AutocompleteService());
    }
  };

  const handlePlacePredictions = (predictions) => {
    setPredictions(predictions);
  };

  const handleInputChange = (e) => {
    if (autocomplete) {
      autocomplete.getPlacePredictions(
        {
          input: e.target.value,
        },
        handlePlacePredictions
      );

      // Update selectedPlace state with the input value
      setSelectedPlace(e.target.value);
    }
  };

  // handlePlaceSelection 함수를 다음과 같이 수정
  const handlePlaceSelection = async (placeId) => {
    if (!map) return;

    // Fetch place details using placeId
    const service = new window.google.maps.places.PlacesService(map);
    service.getDetails({ placeId }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // Center map on selected place
        map.setCenter(place.geometry.location);

        // Remove existing markers
        clearMarkers();

        // Add marker to selected place
        const marker = new window.google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: place.name,
        });

        // Store the marker reference to clear later
        setMarkers([marker]);

        // Update clickedLocation to the selected place's location
        setClickedLocation(place.geometry.location.toJSON());
      }
    });
  };

  // render 함수 내에서 선택된 장소 정보 출력 부분 수정
  {
    selectedPlace && (
      <div>
        <p>선택한 장소: {selectedPlace}</p>
        <button onClick={() => handlePlaceSelection(selectedPlace)}>
          선택한 장소 보기
        </button>
      </div>
    );
  }

  // Add marker to selected place
  const addMarkerToPlace = (place) => {
    const marker = new window.google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name,
    });

    // Store the marker reference to clear later
    setMarkers([marker]);
  };

  const clearMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
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
      {autocomplete && (
        <Autocomplete>
          <Input
            type="text"
            placeholder="주소"
            onChange={handleInputChange}
            value={selectedPlace ? selectedPlace : ""}
          />
        </Autocomplete>
      )}
      <GMapContainer id="map">
        {map && (
          <LoadScript googleMapsApiKey={googleMapApiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
            >
              {/* 마커 클릭 핸들러 등 다른 내용 */}
            </GoogleMap>
          </LoadScript>
        )}
      </GMapContainer>
      {clickedLocation && (
        <div>
          <p>선택한 위치:</p>
          <p>위도: {clickedLocation.lat.toFixed(6)}</p>
          <p>경도: {clickedLocation.lng.toFixed(6)}</p>
        </div>
      )}
      <div>
        <p>현재 지도 중심 위치:</p>
        <p>위도: {center.lat.toFixed(6)}</p>
        <p>경도: {center.lng.toFixed(6)}</p>
      </div>
    </>
  );
}

export default CustomGMap;
