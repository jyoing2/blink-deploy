import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const AdrSearchContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -28%);
  background-color: white;
  padding: 45px 20px 20px 20px;
  border: 2px solid black;
  border-radius: 10px;
  width:310px;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function AddressSearch({ onUpdateAddress, showAdrSearch, setShowAdrSearch }) {
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
    setShowAdrSearch(false); // Close the AdrSearch window after address selection
  };

  const handleClose = () => {
    setShowAdrSearch(false); // Close the AdrSearch window
  };

  return (
    <AdrSearchContainer show={showAdrSearch}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <DaumPostcode onComplete={handleComplete} />
    </AdrSearchContainer>
  );
}
