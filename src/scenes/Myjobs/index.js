// import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";

import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "./components/index";
import CornerFooter from "../../components/CornerFooter/index";
import "./index.css";

// import { useState, useEffect } from "react";


export default function Myjobs() {

  return (
    <Container maxWidth="lg">
      <div className="whole-page-container">
        <Sidebar active={1} role="freelancer" />

        <Feed />

        <div className="right-collumn">
          <CornerFooter />
        </div>
      </div>
    </Container>
  );
}
