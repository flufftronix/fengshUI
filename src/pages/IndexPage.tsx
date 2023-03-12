import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { useHistory } from 'react-router-dom';

const IndexPage = () => {
  const history = useHistory();
  const handleClick = () => history.push('/process');
    return(
        <>
        <br />
<img src="https://raw.githubusercontent.com/flufftronix/fengshUI/main/public/fengshui.png"   />{/* height="200vw" width="200vh"*/}
<p style={{margin: "auto"}}>Feng Shui automates furnishing and decorating homes to give 
          users and their guests peace and comfort. Furnishing an empty home can be an expensive and time consuming 
          process so let Feng Shui do it for you!</p>
<br />
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Button style={{ 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          onClick={handleClick}
          variant="outlined"><strong>Try It</strong></Button>
        </Box>
      </div>
      </>
      
    );
};

export default IndexPage;