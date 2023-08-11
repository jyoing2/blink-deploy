import * as React from 'react';
import styled from "styled-components";
import AdrSearch from './AdrSearch'; 
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

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

const Search2 = styled(Search)`
  width: 295px;
  margin-left: 30px;
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

const Label2 = styled(Label)`
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


export default function Post() {
  const [showAdrSearch, setShowAdrSearch] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    postcode: '',
    address: '',
    // ... other fields
  });

  const toggleAdrSearch = () => {
    setShowAdrSearch(!showAdrSearch);
  };

  return (
    <>
      <PostContainer>
        <TopRow>
          <div onClick={toggleAdrSearch}>
            Click here to show AdrSearch
          </div>
          <Search2>This is the second search field</Search2>
        </TopRow>
        <AdrSearchContainer show={showAdrSearch}>
          <AdrSearch onUpdateAddress={setAddressInfo} /> {/* Pass the prop */}
        </AdrSearchContainer>



        <Lsquare>
          <SquareBox>
            <Display>
            <FormRow>
              <TitleInput type="text" placeholder='Enter a title'/>
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
              <TextArea rows="10" placeholder='내용을 입력하세요' />
            </FormRow>

          </SquareBox>
        </Lsquare>
        <SquareBox2>Omg</SquareBox2>
      </PostContainer>
    </>
  );
}
