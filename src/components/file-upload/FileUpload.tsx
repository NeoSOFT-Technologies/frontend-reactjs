import React, { useRef, useState } from "react";
import FileUploaderHttpClient from "../../services/file-uploader/file-uploader";
import { removeicon } from "../../resources/constants";
import "./FileUpload.css";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES =
  process.env.REACT_APP_MAX_FILE_SIZE_IN_BYTES || 500_000;

const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  onSubmit,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}: any) => {
  const fileInputField = useRef();
  const [files, setFiles] = useState<{ fileId: number; file: File }[]>([]);
  const [fileId, setFileId] = useState(0);

  const convertNestedObjectToArray = (
    nestedObj: { fileId: number; file: File }[]
  ) => nestedObj.map((fileObj) => fileObj.file);

  const callUpdateFilesCb = (
    selectedFiles: { fileId: number; file: File }[]
  ) => {
    const filesAsArray = convertNestedObjectToArray(selectedFiles);
    updateFilesCb(filesAsArray);
  };

  const adduploadedFile = async (uploadedFile: File) => {
    let selectedFiles: { fileId: number; file: File }[] = [];
    if (uploadedFile.size < maxFileSizeInBytes) {
      if (!otherProps.multiple) {
        selectedFiles = [{ fileId, file: uploadedFile }];
      } else {
        const uploadedFileData = { fileId, file: uploadedFile };
        selectedFiles = [...files, uploadedFileData];
        setFileId(fileId + 1);
      }
      setFiles(() => {
        callUpdateFilesCb(selectedFiles);
        return selectedFiles;
      });
    }
  };

  const handleuploadedFileUpload = async (e: { target: { files: File[] } }) => {
    const uploadedFile = e.target.files;

    // eslint-disable-next-line unicorn/explicit-length-check
    if (uploadedFile.length) {
      await adduploadedFile(uploadedFile[0]);
    }
  };

  const removeFile = (id: number) => {
    setFiles((prevState) => prevState.filter((file) => file.fileId !== id));
  };
  const handleSubmit = async () => {
    const selectedFiles = convertNestedObjectToArray(files);
    const response = await FileUploaderHttpClient.FileUploader(selectedFiles);
    // eslint-disable-next-line no-console
    console.log(response);
  };
  const imageUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  return (
    <>
      <div className="p-2 ">
        <div className="heading">{label}</div>

        <h4> Upload {otherProps.multiple ? "files" : "a file"}</h4>

        <input
          type="file"
          ref={fileInputField}
          onChange={handleuploadedFileUpload}
          data-testid="file-input"
          title=""
          value=""
          {...otherProps}
        />
        <button
          type="submit"
          onClick={onSubmit || handleSubmit}
          data-testid="submit-btn"
        >
          Submit
        </button>
      </div>
      <div>
        <span>To Upload</span>
        <div>
          <div>
            {files.map((fileObj) => {
              const id = fileObj.fileId;
              const file = fileObj.file;
              const isImageFile = file.type.split("/")[0] === "image";

              return (
                <div key={id} className="img-row">
                  <div>
                    {isImageFile &&
                      (file.type === "image/jpeg" ||
                        file.type === "image/png" ||
                        file.type === "image/jpeg") && (
                        <img
                          src={imageUrl(file)}
                          alt={`file preview ${file.name}`}
                          height={150}
                          width={150}
                        />
                      )}
                    {(file.type === "text/plain" ||
                      file.type === "application/pdf") && (
                      <i className="bi bi-file-earmark-text type"></i>
                    )}
                    <div>
                      <span>{file.name}</span>
                      <aside>
                        <span>{convertBytesToKB(file.size)} kb</span>
                        <img
                          src={removeicon}
                          alt="logo"
                          height={20}
                          width={20}
                          onClick={() => removeFile(id)}
                        />
                      </aside>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
