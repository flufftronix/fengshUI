import React, { Children } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { ChildCare } from "@mui/icons-material";

const Layout = (properties: any) => {
  const {children} = properties;
  return(
    <>
    <header style={{ width: "100vw",backgroundColor: "#383838", display: "flow-root", boxShadow: "5px 1px 5px 5px #888888" }}>
        <span style={{
          fontSize: "34px", float: "left",
          margin: "25px 0px 0px 25px",
          color: "white"
        }}><strong style={{color: "black"}}>Feng</strong> Shui</span>

        <Chip style={{
          float: "right",
          margin: "25px 25px 25px 0px"
        }} avatar={<Avatar>U</Avatar>} />

      </header>
      {children}
    </>
  );
}

export default Layout;