//DatePicker.jsx


import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  gap: 20px;
  background-color: black;
`;
const DotBox = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CalendarDot = styled.div`
  margin-top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f87171;
`;

export default function Calendartwo({ user, onSelectDate }) {
  const [value, onChange] = useState(new Date());
  const dateArr = ["2023. 08. 15.", "2023. 08. 17."];

  const handleDateSelect = (date) => {
    onChange(date);
    onSelectDate(date); // Call the onSelectDate prop with the selected date
  };

  return (
    <Container>
      <Calendar
        onChange={handleDateSelect} // Use the custom handler
        value={value}
        formatDay={(locale, date) =>
          //xx일 -> xx 으로 format 변경
          new Date(date).toLocaleDateString("en-us", {
            day: "2-digit",
          })
        }
        tileContent={({ date, view }) => {
          //
          const exist = dateArr.find(
            (oneDate) =>
              oneDate ===
              String(
                new Date(date).toLocaleDateString("ko", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              )
          );
          return (
            <>
              <DotBox>{exist && <CalendarDot />}</DotBox>
            </>
          );
        }}
      />
      <h1>
        {new Date(value).toLocaleDateString("ko", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </h1>
    </Container>
  );
}