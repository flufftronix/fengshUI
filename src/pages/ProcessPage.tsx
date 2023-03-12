import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';
import { ChangeEvent, useRef, useState } from 'react';

const ProcessPage = () => {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const history = useHistory();
  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
    setTimeout(() => {
      history.push('/preview');
    }, 5000);
  
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
<p style={{margin: "auto"}}>Take a pic or upload an image of a Room</p>
<br />
<Button style={{ height: 200, 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          onClick={handleUploadClick}
          variant="outlined">Upload Photo</Button>
          <br></br>
          <Button style={{ height: 200, 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          variant="outlined">Scan</Button>
          <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
          
      </>
      
    );
};

export default ProcessPage;