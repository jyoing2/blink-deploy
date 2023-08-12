//AdrSearch.jsx
//글 업로드 페이지 - 왼쪽 상단 지역명, 도로명 주소를 입력하십시오.

import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import { StyledSearchResult, SearchResultInputs } from './SearchResult';


const AdrSearchContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -28%);
  background-color: white; /* Set the background color */
  padding: 20px; /* Add padding for spacing */
  border: 2px solid black; /* Add a border */
  border-radius: 10px; /* Rounded corners */
`;

export default function AddressSearch({ onUpdateAddress, showAdrSearch, onSelectAddress }) {
  const [addressInfo, setAddressInfo] = useState({
    postcode: '',
    address: '',
    detailAddress: '',
    extraAddress: '',
  });

  const handleComplete = (data) => {
    const updatedAddressInfo = {
      postcode: data.zonecode,
      address: data.roadAddress || data.jibunAddress,
      detailAddress: '',
      extraAddress: data.userSelectedType === 'R' ? data.bname || data.buildingName : '',
    };
    
    setAddressInfo(updatedAddressInfo);
    onUpdateAddress(updatedAddressInfo);
    onSelectAddress(updatedAddressInfo.address); // Pass the selected address back
  };
  

  return (
    <AdrSearchContainer show={showAdrSearch}>
      <DaumPostcode onComplete={handleComplete} /> 
      {/* This triggers the completion */}
    </AdrSearchContainer>
  );
}