import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';

function Header() {
  return (
    <header>
      <h1>
        <EditNoteIcon style={{"paddingTop":"1%"}} fontSize="large"/>
        NoteMate
      </h1>
    </header>
  );
}

export default Header;
