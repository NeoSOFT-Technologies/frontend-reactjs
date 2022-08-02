import React, { useState } from "react";

import "./FileUpload.css";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES =
  process.env.REACT_APP_MAX_FILE_SIZE_IN_BYTES || 500_000;
const DEFAULT_ALLOWED_EXTENSONS = ["jpg", "png", "jpeg", "pdf", "txt"];
const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  allowedExtensions = DEFAULT_ALLOWED_EXTENSONS,
}: any) => {
  const [fileSelected, setFileSelected] = useState<File>();

  const addNewFile = async (newFile: File) => {
    const filetype = newFile.type.split("/")[1];

    if (
      newFile.size < maxFileSizeInBytes &&
      allowedExtensions.includes(filetype)
    ) {
      setFileSelected(() => {
        updateFilesCb(newFile);
        return newFile;
      });
    }
  };

  const handleOnChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const newFile = e.target.files;
    if (!newFile) return;
    addNewFile(newFile[0]);
  };

  return (
    <>
      <div className="p-2 ">
        <div className="heading wrapperstyle">{label}</div>

        <input
          type="file"
          className="inputstyle"
          onChange={handleOnChange}
          data-testid="file-input"
          title=""
          value=""
        />
      </div>

      <div>
        {fileSelected && (
          <>
            <span>{fileSelected.name}</span>

            <div>{convertBytesToKB(fileSelected.size)} kb</div>
          </>
        )}
      </div>
    </>
  );
};
export default FileUpload;
