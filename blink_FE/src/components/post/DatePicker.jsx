import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'; // Import the react-datepicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1000; /* Set a higher z-index */
  padding: 10px; /* Add padding for spacing */
  border: 2px solid red; /* Temporary border for visibility */
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

const DatePickerComponent = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null); // Use null as initial state

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onSelect(date);
  };

  return (
    <DatePickerWrapper>
      <StyledDatePicker
        selected={selectedDate} // Pass the selectedDate as a prop
        onChange={handleDateSelect} // Use the onChange event handler
        dateFormat="yyyy-MM-dd" // Specify the date format
      />
    </DatePickerWrapper>
  );
};

export default DatePickerComponent;
