import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const IndexPage = () => {
    return(
        <>
        <br />
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/415/682/datas/original.png" alt=""  />
<p style={{margin: "auto"}}>Feng Shui automates Furnishing and decorating a new place to help people create living environments for themselves that give 
          them and their guests peace. Furnishing an empty living room can be an expensive and time consuming 
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
          variant="outlined"><strong>Try It</strong></Button>
        </Box>
      </div>
      </>
      
    );
};

export default IndexPage;