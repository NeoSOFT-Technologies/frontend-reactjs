import React, { useState } from "react";
import FileUpload from "../../components/file-uploader/FileUploader";
import FileUploaderHttpClient from "../../services/file-uploader/file-uploader";

const Abc = () => {
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
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg,.txt,.pdf"
          label="File-Uploader"
          multiple
          updateFilesCb={updateUploadedFiles}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Abc;
