import { useState, useEffect } from "react";

import "./index.css";
import FeedItem from "./FeedItem";
import { CircularProgress } from "@mui/material";

import { db } from "../../../services/db";
import { collection, getDocs, query, where } from "firebase/firestore";

function Feed() {
  const [appls, setAppls] = useState();

  const [jobs, setJobs] = useState();

  const FREELANCER_ID = "fr2";

  useEffect(() => {
    async function fetchData() {
      let applyarray = [];
      let jid = [];

      let q = query(
        collection(db, "apply_for"),
        where("freelancer-id", "==", FREELANCER_ID)
      );
      let querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        applyarray.push(doc.data());
        jid.push(doc.data()["job-id"]);
      });

      // apply_for: status + job-id
      let jobarray = [];
      q = query(collection(db, "job"), where("__name__", "in", jid));
      querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => jobarray.push(doc.data()));

      // job:

      applyarray = applyarray.map((stat, index) => {
        return { ...stat, ...jobarray[index] };
      });

      setAppls(applyarray);
      console.log(applyarray);
    }

    fetchData();
  }, []);

  return (
    <div className="central-collumn">
      <div className="central-page-header">
        <h1>Việc của tôi</h1>
      </div>

      {appls ? (
        appls?.map(
          (job) =>
            (job.status === "Đang làm" || job.status === "Đã xong") && (
              <FeedItem content={job} />
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
          (job) => job.status === "Đang đợi" && <FeedItem content={job} />
        )
      ) : (
        <CircularProgress />
      )}

      <div className="central-page-header">
        <h1>Tin đã lưu</h1>
      </div>

      {appls ? (
        appls?.map((job) => job.status === "Lưu" && <FeedItem content={job} />)
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Feed;
