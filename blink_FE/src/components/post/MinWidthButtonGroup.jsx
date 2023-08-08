import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Typography from "@mui/joy/Typography";

export default function MinWidthButtonGroup() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "50%",
        overflow: "auto",
      }}
    >
      <CardContent sx={{ textAlign: "center", alignItems: "center" }}>
        <ButtonGroup
          variant="soft"
          aria-label="outlined primary button group"
          buttonFlex="0 1 200px"
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <Button>전체 목록</Button>
          <Button>글 등록하기</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
