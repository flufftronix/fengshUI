import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ChangeEvent, useRef, useState } from 'react';

const PreviewPage = () => {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);

    // 🚩 do the file upload here normally...
  };
    return(
        <>
        <br />
        <br />
        <br />
<p style={{margin: "auto"}}>Preview</p>
          
      </>
      
    );
};

export default PreviewPage;