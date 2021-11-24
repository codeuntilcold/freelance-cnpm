import { useState, useEffect, useContext } from "react";

import "./index.css";
import FeedItem from "./FeedItem";
import { CircularProgress } from "@mui/material";

import { AppContext } from "../../../context/AppProvider";
// import auth from "../../../services/auth";
import { db } from "../../../services/db";
import { collection, getDocs, query, where } from "firebase/firestore";

function Feed() {

  const [appls, setAppls] = useState();

  const {currentUser} = useContext(AppContext);


  useEffect(() => {
    
    async function getList() {
      // GET APPLY_FOR
      let applyarray = [];
      let jid = [];
      let q = query(
        collection(db, "apply_for"),
        where("freelancer-id", "==", currentUser.roleID)
      );
      let querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        applyarray.push(doc.data());
        jid.push(doc.data()["job-id"]);
      });
      // apply_for: status + job-id
  
      // GET JOBS IN APPLY_FOR
      let jobarray = [];
      q = query(collection(db, "job"), where("__name__", "in", jid));
      querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => jobarray.push(doc));
      
      // GET APPLY_FOR AND JOB INFO TOGETHER
      let zipped = [];
      applyarray.forEach((application) =>
        jobarray.forEach(
          (job) =>
            application["job-id"] === job.id &&
            zipped.push({ ...application, ...job.data() })
        )
      );
      
      setAppls(zipped);
    }
    
    currentUser && getList()

    // console.log(currentUser)

  }, [currentUser]);




  return (
    <div className="central-collumn">
      <div className="central-page-header">
        <h1>Việc của tôi</h1>
      </div>

      {appls ? (
        appls?.map(
          (job) =>
            (job.status === "Đang làm" || job.status === "Đã xong") && (
              <FeedItem key={job["job-id"]} content={job} />
            )
        )
      ) : (
        <CircularProgress />
      )}

      <div className="central-page-header">
        <h1>Đang chờ duyệt</h1>
      </div>

      {appls ? (
        appls?.map(
          (job) =>
            job.status === "Đang đợi" && (
              <FeedItem key={job["job-id"]} content={job} />
            )
        )
      ) : (
        <CircularProgress />
      )}

      <div className="central-page-header">
        <h1>Tin đã lưu</h1>
      </div>

      {appls ? (
        appls?.map(
          (job) =>
            job.status === "Lưu" && (
              <FeedItem key={job["job-id"]} content={job} />
            )
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Feed;
