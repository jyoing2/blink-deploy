//FileUpload.jsx

import React, { useState } from "react";
import styled from "styled-components";

const FileUploadContainer = styled.div`
  margin-top: 20px;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function FileUpload({
  onFileUpload,
  maxFiles,
  ThumbnailComponent,
  handleRemoveThumbnail,
  uploadedFiles,
}) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const totalFiles = selectedFiles.length + files.length;

    if (totalFiles > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files.`);
      return;
    }

    const updatedFiles = [...selectedFiles, ...Array.from(files).slice(0, maxFiles - selectedFiles.length)];
    setSelectedFiles(updatedFiles);
    onFileUpload(updatedFiles);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((file, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onFileUpload(updatedFiles);
  };


  return (
    <FileUploadContainer>
      <input type="file" accept=".png, .jpg, .jpeg, .pdf" multiple onChange={handleFileChange} />
      {/* Display the list of selected files */}
      <ThumbnailsContainer>
        {selectedFiles.map((file, index) => (
          <ThumbnailWrapper key={index}>
          <ThumbnailComponent src={URL.createObjectURL(file)} alt={`Thumbnail ${index + 1}`} />
          <button onClick={() => handleRemoveFile(index)}>Remove</button>
          </ThumbnailWrapper>
        ))}
      </ThumbnailsContainer>
    </FileUploadContainer>
  );
}