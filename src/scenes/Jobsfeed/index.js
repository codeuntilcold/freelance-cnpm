// import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { Container } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "./components/Feed/index";
import Stats from "./components/Stats/index";
import "./index.css";

// import { AuthContext } from "../../context/AuthProvider";
import auth from "../../services/auth";
import { db } from "../../services/db";
import { collection, query, where, getDocs } from "firebase/firestore";



export default function Jobsfeed() {
  const [jobs, setJobs] = useState();

  // const data = useContext(AuthContext);
  // const currentUID = data.user.uid;

  const currentUID = auth.currentUser?.uid;
  console.log("current UID: ", currentUID);

  // const userList = collection(db, "user");
  // const q = query(userList, where("uid", "==", currentUID));

  // const querySnapshot = getDocs(q);
  // console.log(querySnapshot);

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
