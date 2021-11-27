// import { Link } from 'react-router-dom';
import { // useState, useEffect, 
  useContext } from "react";
import { Container } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "./components/Feed/index";
import Stats from "./components/Stats/index";
import "./index.css";

import { AppContext } from "../../context/AppProvider";


export default function Jobsfeed() {

  const {currentUser} = useContext(AppContext);
  console.log(currentUser)
  var role = currentUser?.role;

  return (
    <Container maxWidth="lg">
      {role &&
      <div className="whole-page-container">
        <Sidebar active={0} role={role} />

        <Feed />

        <Stats />
      </div>}
    </Container>
  );
}
