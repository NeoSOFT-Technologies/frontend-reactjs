import React, { useState } from "react";
import axios from "axios";

export default function FileUploader() {
  const UPLOAD_ENDPOINT = "http://localhost:8899/api/neostore/upload";
  const [fileSelected, setFileSelected] = useState<File>(); // also tried <string | Blob>

  const handleOnChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFileSelected(fileList[0]);
  };

  const uploadFile = async function () {
    if (fileSelected) {
      const formData = new FormData();
      formData.append("image", fileSelected, fileSelected.name);
      return axios.post(UPLOAD_ENDPOINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (fileSelected) {
      const numb = fileSelected?.size / 1024 / 1024;

      if (numb > 2) {
        alert("to big, maximum is 2MiB. You file size is: " + numb + " MiB");
      } else {
        const res = await uploadFile();
        console.log(res);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>React File Upload</h1>
      <input
        type="file"
        name="file"
        accept=".png,.jpg,.jpeg,.txt,.pdf"
        onChange={handleOnChange}
      />

      <button type="submit">Upload File</button>
    </form>
  );
}
