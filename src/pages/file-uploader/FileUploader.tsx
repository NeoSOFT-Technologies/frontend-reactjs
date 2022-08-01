import React, { useState } from "react";
import FileUpload from "../../components/file-upload/FileUpload";
import FileUploaderHttpClient from "../../services/file-uploader/file-uploader";
import "./FileUploader.css";
const FileUploader = () => {
  const [newUserInfo, setNewUserInfo] = useState<{ [T: number]: File }[]>([]);

  const convertNestedObjectToArray = (nestedObj: { [T: number]: File }[]) =>
    nestedObj.map((fileObj) => Object.values(fileObj)[0]);

  const updateUploadedFiles = (selectedFiles: { [T: number]: File }[]) => {
    setNewUserInfo(selectedFiles);
  };
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const filesAsArray = convertNestedObjectToArray(newUserInfo);
    const response = await FileUploaderHttpClient.FileUploader(filesAsArray);
    console.log(response);
  };

  return (
    <div>
      <form className="file" onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg,.txt,.pdf"
          label="File-Uploader"
          data-testid="file-input"
          multiple
          updateFilesCb={updateUploadedFiles}
          onSubmit={handleSubmit}
          className="fileUploader"
        />
      </form>
    </div>
  );
};

export default FileUploader;
