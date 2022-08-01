import React, { useState } from "react";
import FileUpload from "../../components/file-upload/FileUpload";
import FileUploaderHttpClient from "../../services/file-uploader/file-uploader";
import "./FileUploader.css";
const DEFAULT_ALLOWED_EXTENSONS = ".jpg,.png,.jpeg,.txt,.pdf";
const FileUploader = () => {
  const [newUserInfo, setNewUserInfo] = useState<
    { fileId: number; file: File }[]
  >([]);

  const convertNestedObjectToArray = (
    nestedObj: { fileId: number; file: File }[]
  ) => nestedObj.map((fileObj) => fileObj.file);

  const updateUploadedFiles = (
    selectedFiles: { fileId: number; file: File }[]
  ) => {
    setNewUserInfo(selectedFiles);
  };
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const filesAsArray = convertNestedObjectToArray(newUserInfo);
    const response = await FileUploaderHttpClient.FileUploader(filesAsArray);
    // eslint-disable-next-line no-console
    console.log(response);
  };

  return (
    <div>
      <form className="file" onSubmit={handleSubmit}>
        <FileUpload
          accept={DEFAULT_ALLOWED_EXTENSONS}
          label="file-uploader"
          data-testid="file-input"
          multiple
          updateFilesCb={updateUploadedFiles}
          onSubmit={handleSubmit}
          className="fileuploader"
        />
      </form>
    </div>
  );
};

export default FileUploader;
