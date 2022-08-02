import React, { useState } from "react";
import FileUpload from "../../components/file-upload/FileUpload";
import FileUploaderHttpClient from "../../services/file-uploader/file-uploader";
import "./FileUploader.css";
const KILO_BYTES_PER_BYTE = 1000;
const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);
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
      <div>
        {newUserInfo && (
          <>
            <span>{newUserInfo.name}</span>

            <div>{convertBytesToKB(newUserInfo.size)} kb</div>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
