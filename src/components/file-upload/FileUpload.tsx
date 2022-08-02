import React from "react";
import "./FileUpload.css";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES =
  process.env.REACT_APP_MAX_FILE_SIZE_IN_BYTES || 500_000;
const DEFAULT_ALLOWED_EXTENSONS = ["jpg", "png", "jpeg", "pdf", "txt"];

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  allowedExtensions = DEFAULT_ALLOWED_EXTENSONS,
  WrapperClassName,
}: any) => {
  const addNewFile = async (newFile: File) => {
    const filetype = newFile.type.split("/")[1];

    if (
      newFile.size < maxFileSizeInBytes &&
      allowedExtensions.includes(filetype)
    ) {
      updateFilesCb(newFile);
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
        <div className="heading ">{label}</div>

        <input
          type="file"
          className={`"inputfield", ${WrapperClassName}`}
          onChange={handleOnChange}
          data-testid="file-input"
          title=""
          value=""
        />
      </div>
    </>
  );
};
export default FileUpload;
