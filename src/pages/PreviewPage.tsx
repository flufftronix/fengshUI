import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';
import { ChangeEvent, useRef, useState } from 'react';

const PreviewPage = () => {
  const history = useHistory();
  const handleClick = () => history.push('/list');
    return(
        <>
        <br />
        <br />
        <br />

<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/417/254/datas/original.png"/>
<br />
<Button style={{ 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          onClick={handleClick}
          variant="outlined"><strong>Shopping list</strong></Button>
          
      </>
      
    );
};

export default PreviewPage;