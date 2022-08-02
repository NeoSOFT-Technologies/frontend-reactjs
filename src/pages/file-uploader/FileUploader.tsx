import React, { useState } from "react";
import FileUpload from "../../components/file-upload/FileUpload";
import FileUploaderHttpClient from "../../services/file-uploader/file-uploader";
import "./FileUploader.css";

const FileUploader = () => {
  const [newUserInfo, setNewUserInfo] = useState<File>();
  const updateUploadedFiles = (selectedFiles: File) => {
    setNewUserInfo(selectedFiles);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (newUserInfo) {
      const response = await FileUploaderHttpClient.FileUploader(newUserInfo);
      // eslint-disable-next-line no-console
      console.log(response);
    }
  };

  return (
    <div>
      <form className="file" onSubmit={handleSubmit}>
        <FileUpload label="file-uploader" updateFilesCb={updateUploadedFiles} />
      </form>
    </div>
  );
};

export default FileUploader;
