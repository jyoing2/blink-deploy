//글 업로드 페이지 - 왼쪽 상단 지역명, 도로명 주소를 입력하십시오.

import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import { StyledSearchResult, SearchResultInputs } from './SearchResult';


const AdrSearchContainer = styled.div`
  position: fixed;
  top: 50%; /* Center vertically */
  transform: translate(-50%, -50%);
  z-index: 1000; /* Higher z-index to ensure it's above other elements */
  background-color: white; /* Set the background color */
  padding: 20px; /* Add padding for spacing */
  border: 2px solid black; /* Add a border */
  border-radius: 10px; /* Rounded corners */
`;

export default function AddressSearch({ onUpdateAddress, showAdrSearch }) {
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
  };

  return (
    <AdrSearchContainer>
      <DaumPostcode onComplete={handleComplete} />
      
      {showAdrSearch && (
        <StyledSearchResult>
          <SearchResultInputs
            {...addressInfo}
            handleDetailAddressChange={(e) => 
              setAddressInfo({ ...addressInfo, detailAddress: e.target.value })
            }
          />
        </StyledSearchResult>
      )}
    </AdrSearchContainer>
  );
}