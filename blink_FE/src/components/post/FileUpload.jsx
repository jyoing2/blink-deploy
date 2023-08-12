// FileUpload.jsx
import React, { useState } from "react";
import styled from "styled-components";

const FileUploadContainer = styled.div`
  margin-top: 20px;
`;

export default function FileUpload({ onFileUpload, maxFiles }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const updatedFiles = Array.from(files).slice(0, maxFiles); // Limit the number of selected files
    setSelectedFiles(updatedFiles);
    onFileUpload(updatedFiles);
  };

  return (
    <FileUploadContainer>
      <input type="file" accept=".png, .jpg, .jpeg, .pdf" multiple onChange={handleFileChange} />
    </FileUploadContainer>
  );
}
