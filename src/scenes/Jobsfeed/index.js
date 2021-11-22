// import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { Container } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "./components/Feed/index";
import Stats from "./components/Stats/index";
import "./index.css";

import auth from "../../services/auth";
import { db } from "../../services/db";
import { collection, query, where, getDocs } from "firebase/firestore";

import { AppContext } from "../../context/AppProvider";



export default function Jobsfeed() {
  const [jobs, setJobs] = useState();

  const {currentUser, userInfo} = useContext(AppContext);
  console.log(currentUser);
  console.log(userInfo);
  

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
