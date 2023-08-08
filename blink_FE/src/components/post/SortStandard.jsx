import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import styled from "styled-components";

const ButtonGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row; /* 가로 방향으로 정렬 */
  justify-content: center;
  background-color: gray;
`;

export default function SortStandard() {
  return (
    <FormControl>
      <ButtonGroup defaultValue="outlined" name="radio-buttons-group">
        <Radio value="recent" label="최신순" variant="plain" />
        <Radio value="oldest" label="오래된 순" variant="plain" />
      </ButtonGroup>
    </FormControl>
  );
}
