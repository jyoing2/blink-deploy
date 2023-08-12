//Post.jsx
// #1 메인 - 글쓰기 페이지 총괄
import React, { useState } from "react";
import styled from "styled-components";
import AdrSearch from "./AdrSearch";
import { StyledSearchResult, SearchResultInputs } from "./SearchResult";
import Calendartwo from "./DatePicker";
import FileUpload from "./FileUpload";


const AdrSearchContainer = styled.div`
  position: absolute;
  top: 480px;
  left: 30%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
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

const Display = styled.div`
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
  width: 151px;
  height: 40px;
  padding: 5px;
`;

const TitleInput = styled.input`
  width: 600px;
  height: 50px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  resize: none;
`;

const Search2 = styled(Search)`
  width: 295px;
  margin-left: 30px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  max-width: 300px;
  max-height: 200px;
  object-fit: contain;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Post() {
  const [showAdrSearch, setShowAdrSearch] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    postcode: "",
    address: "",
    // ... other fields
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  
  const toggleAdrSearch = () => {
    setShowAdrSearch(!showAdrSearch);
    setShowDatePicker(false); // Hide the date picker when toggling AdrSearch
  };

  const handleDatePickerSelect = (date) => {
    setSelectedDate(date); // Update the selected date
    setShowDatePicker(false); // Hide the date picker
  };

  const handleComplete = (data) => {
    const updatedAddressInfo = {
      postcode: data.zonecode,
      address: data.roadAddress || data.jibunAddress,
      detailAddress: '',
      extraAddress: data.userSelectedType === 'R' ? data.bname || data.buildingName : '',
    };
    
    setAddressInfo(updatedAddressInfo);
    onUpdateAddress(updatedAddressInfo);
    setSelectedAddress(updatedAddressInfo.address); // Update selected address
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (files) => {
    if (files.length > 2) {
      alert("You can only upload up to 2 files.");
      return;
    }

    setUploadedFiles(files);
  };


  return (
    <>
      <PostContainer>
        <TopRow>
        <Search
            onClick={toggleAdrSearch}
            selectedAddress={addressInfo.address} // Pass the selected address
          >
            {addressInfo.address ? addressInfo.address : "Click here to show AdrSearch"}
          </Search>

          <Search2 onClick={() => setShowDatePicker(!showDatePicker)}>
            {selectedDate ? selectedDate.toLocaleDateString() : "Select a date"}
          </Search2>
        </TopRow>
        <AdrSearchContainer show={showAdrSearch || showDatePicker}>
          {showAdrSearch ? (
            <AdrSearch onUpdateAddress={setAddressInfo} showAdrSearch={showAdrSearch} />
          ) : (
            showDatePicker && <Calendartwo onSelectDate={handleDatePickerSelect} />
          )}
        </AdrSearchContainer>


        {showAdrSearch && (
          <StyledSearchResult>
            <SearchResultInputs
              postcode={addressInfo.postcode}
              address={addressInfo.address}
              detailAddress={addressInfo.detailAddress}
              extraAddress={addressInfo.extraAddress}
              handleDetailAddressChange={(e) =>
                setAddressInfo({
                  ...addressInfo,
                  detailAddress: e.target.value,
                })
              }
            />
          </StyledSearchResult>
        )}
        <Lsquare>
          <SquareBox>
            <Display>
              <FormRow>
                <TitleInput type="text" placeholder="Enter a title" />
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
              <TextArea rows="10" placeholder="Enter your content" />
            </FormRow>
          </SquareBox>
        </Lsquare>
        <SquareBox2>
          <FileUpload onFileUpload={handleFileUpload} maxFiles={2} />
          {/* Display thumbnail previews for uploaded image files */}
          <ThumbnailsContainer>
            {uploadedFiles.map((file, index) => (
              <Thumbnail key={index} src={URL.createObjectURL(file)} alt={`Thumbnail ${index + 1}`} />
            ))}
          </ThumbnailsContainer>
        </SquareBox2>
      </PostContainer>
    </>
  );
}
