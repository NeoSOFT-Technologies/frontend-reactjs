import React, { useRef, useState } from "react";
import FileUploaderHttpClient from "../../services/file-uploader/file-uploader";
import "./FileUploader.css";

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
  const [files, setFiles] = useState<{ [T: number]: File }[]>([]);
  const [keys, setKeys] = useState(0);

  const convertNestedObjectToArray = (nestedObj: { [T: number]: File }[]) =>
    nestedObj.map((fileObj) => Object.values(fileObj)[0]);

  const callUpdateFilesCb = (selectedFiles: { [T: number]: File }[]) => {
    console.log(selectedFiles);
    const filesAsArray = convertNestedObjectToArray(selectedFiles);
    updateFilesCb(filesAsArray);
  };

  const addNewFile = async (newFile: File) => {
    let selectedFiles: { [T: number]: File }[] = [];
    if (newFile.size < maxFileSizeInBytes) {
      if (!otherProps.multiple) {
        selectedFiles = [{ 0: newFile }];
      } else {
        const newFileData = { keys: newFile };
        selectedFiles = [...files, newFileData];
        setKeys(keys + 1);
      }
      setFiles(() => {
        callUpdateFilesCb(selectedFiles);
        return selectedFiles;
      });
    }
  };
  console.log(files);

  const handleNewFileUpload = async (e: { target: { files: any } }) => {
    const { files: newFiles } = e.target;

    if (newFiles.length > 0) {
      await addNewFile(newFiles[0]);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prevState) =>
      prevState.filter((file) => Object.keys(file)[0] !== id)
    );
  };
  const handleSubmit = async () => {
    const selectedFiles = convertNestedObjectToArray(files);
    const response = await FileUploaderHttpClient.FileUploader(selectedFiles);
    console.log(response);
  };

  return (
    <>
      <div className="p-2 ">
        <div className="heading">{label}</div>

        <h4> Upload {otherProps.multiple ? "files" : "a file"}</h4>

        <input
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
        <button type="submit" onClick={onSubmit || handleSubmit}>
          Submit
        </button>
      </div>
      <div>
        <span>To Upload</span>
        <div>
          <div>
            {files.map((fileObj) => {
              const id = Object.keys(fileObj)[0];
              const file = Object.values(fileObj)[0];
              const isImageFile = file.type.split("/")[0] === "image";
              return (
                <div key={id} className="img-row">
                  <div>
                    {isImageFile && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`file preview ${file.name}`}
                        height={150}
                        width={150}
                      />
                    )}
                    <div>
                      <span>{file.name}</span>
                      <aside>
                        <span>{convertBytesToKB(file.size)} kb</span>
                        <i
                          className="bi bi-archive-fill "
                          onClick={() => removeFile(id)}
                        ></i>
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
