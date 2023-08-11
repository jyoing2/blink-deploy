// #1 메인 - 글쓰기 페이지 총괄

import React, { useState } from 'react';
import styled from 'styled-components';
import AdrSearch from './AdrSearch';
import { StyledSearchResult, SearchResultInputs } from './SearchResult';
import DatePickerComponent from './DatePicker'; // Import the DatePicker component
import DatePicker from './DatePicker'; // Import the DatePicker component

const AdrSearchContainer = styled.div`
  position: absolute;
  top: 480px; /* Position right below the text */
  left: 30%; /* Center horizontally */
  transform: translateX(-50%);
  z-index: 1000; /* Higher z-index to ensure it's above other elements */
  background-color: white; /* Set the background color */
  padding: 20px; /* Add padding for spacing */
  border: 2px solid black; /* Add a border */
  border-radius: 10px; /* Rounded corners */
  display: ${props => (props.show ? 'block' : 'none')}; /* Conditionally show or hide */
`;


const PostContainer = styled.div`
  width: 1030px;
  height: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
`;

const TopRow = styled.div`
  display: flex;
  width: 958px;
  justify-content: space-between;
`;

const Search = styled.div`
  height: 56px;
  width: 660px;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lsquare = styled.div`
  margin-bottom: 30px;
`;

const SquareBox = styled.div`
  width: 958px;
  height: 371px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
`;

const Display = styled.div `
  display: flex;
`;

const SquareBox2 = styled(SquareBox)`
  height: 250px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Label = styled.label`
  background-color: black;
`;

const Select = styled.select`
  width: 151px; /* Adjusted width */
  height: 40px; /* Adjusted height */
  padding: 5px;
`;

const TitleInput = styled.input`
  width: 600px; /* Adjusted width */
  height: 50px; /* Adjusted height */
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  resize: none;
`;

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 10;
`;

const Search2 = styled(Search)`
width: 295px;
margin-left: 30px;
cursor: pointer; /* Add cursor style to indicate it's clickable */
`;

export default function Post() {
  const [showAdrSearch, setShowAdrSearch] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    postcode: '',
    address: '',
    // ... other fields
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const toggleAdrSearch = () => {
    setShowAdrSearch(!showAdrSearch);
  };

  const toggleDatePicker = () => {
    console.log('Toggling date picker'); // Add this line
    setShowDatePicker(!showDatePicker);
  };

  const handleDateSelect = (date) => {
    console.log('Selected date:', date); // Add this line
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  

  return (
    <>
      <PostContainer>
        <TopRow>
          <div onClick={toggleAdrSearch}>Click here to show AdrSearch</div>
          <Search2 onClick={toggleDatePicker}>
            {selectedDate ? selectedDate : 'Select a date'}
          </Search2>
        </TopRow>
        {showDatePicker && (
          <DatePickerWrapper>
            <DatePickerComponent onSelect={handleDateSelect} /> {/* Use the DatePicker component */}
          </DatePickerWrapper>
        )}

        <AdrSearchContainer show={showAdrSearch}>
          <AdrSearch onUpdateAddress={setAddressInfo} showAdrSearch={showAdrSearch} />
        </AdrSearchContainer>
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
        <Lsquare>
          <SquareBox>
            <Display>
              <FormRow>
                <TitleInput type="text" placeholder='Enter a title' />
              </FormRow>
              <FormRow>
                <Select>
                  <option value="Traffic Accident">Traffic Accident</option>
                  <option value="Theft">Theft</option>
                  <option value="Report Missing">Report Missing</option>
                  <option value="Other">Other</option>
                </Select>
              </FormRow>
            </Display>
            <FormRow>
              <TextArea rows="10" placeholder='Enter your content' />
            </FormRow>
          </SquareBox>
        </Lsquare>
        {showDatePicker && (
          <DatePickerWrapper>
            <DatePicker onSelect={handleDateSelect} />
          </DatePickerWrapper>
        )}
        <SquareBox2>Omg</SquareBox2>
      </PostContainer>
    </>
  );
}