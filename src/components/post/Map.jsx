import React from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "1930px",
  height: "1080px",
};

const GMapContainer = styled.div`
  width: 1930px;
  height: 1080px;
  border: 1px solid black;
`;

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return <GMap />;
}

function GMap() {
  // 구글 맵 작동하려면 3가지 요소 필요.
  // options 속성을 통해 스타일 적용
  return (
    <GMapContainer>
      <GoogleMap
        zoom={10}
        center={{ lat: 37.55817656177891, lng: 127.0009620086361 }}
        mapContainerStyle={mapContainerStyle} // 수정된 부분
      >
        Map
      </GoogleMap>
    </GMapContainer>
  );
}
