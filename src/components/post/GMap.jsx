import React from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import CustomGMap from "./CustomGMap";

export default function GMap() {
  return (
    <Wrapper>
      {/* apiKey={"AIzaSyCjXg90oMZF6DW0GoDdlFmOwtRFGGYY6DI"}
      libraries={"places"} */}
      <CustomGMap />
    </Wrapper>
  );
}
