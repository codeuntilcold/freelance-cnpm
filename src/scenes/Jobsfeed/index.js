// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "./components/Feed/index";
import Stats from "./components/Stats/index";
import "./index.css";

import auth from "../../services/auth";

export default function Jobsfeed() {
  const [jobs, setJobs] = useState();

  const user = auth.currentUser;
  console.log({user});
  
  return (
    <Container maxWidth="lg">
      <div className="whole-page-container">
        <Sidebar active={0} role="freelancer" />

        <Feed />

        <Stats />
      </div>
    </Container>
  );
}
