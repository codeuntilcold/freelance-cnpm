// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "./components/Feed/index";
import Stats from "./components/Stats/index";
import "./index.css";

import { db } from "../../services/db";
import { collection, getDocs } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Jobsfeed() {
  const [jobs, setJobs] = useState([]);

  // const [value, loading, error] = useCollectionData(collection(db, "jobs"), {
  //   idField: "_id",
  // });

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "job"));

			let array = [];

      querySnapshot.forEach((doc) => array.push(doc));
			setJobs(array)

      // setJobs(querySnapshot)
      //   querySnapshot.forEach(doc => listjobs.push(doc.data()))
      //   console.log(listjobs)
    }

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <div className="whole-page-container">
        <Sidebar active={0} role="freelancer" />

        <Feed jobs={jobs} />

        <Stats />
      </div>
    </Container>
  );
}
