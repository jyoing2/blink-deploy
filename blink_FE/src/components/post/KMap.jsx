import React, { useEffect } from "react";

export default function KMap() {
  const kakaoMapApiKey = import.meta.env.VITE_APP_KAKAO_MAPS_API_KEY;
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapApiKey}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울의 좌표
          level: 8,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "1080px" }}></div>;
}
