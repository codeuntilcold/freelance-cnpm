import PageHeader from "../../../../components/PageHeader/PageHeader";
import JobCard from "./JobCard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Select, MenuItem, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import "./index.css";

import { db } from "../../../../services/db";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";

function Feed() {
  const [filter, setFilter] = useState("salary");
  const [dur, setDur] = useState("None");
  const [keyword, setKeyword] = useState("");

  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function fetchData() {
      let array = [];
      const q = query(collection(db, "job"), orderBy(filter, "desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => array.push(doc));

      setJobs(array);
    }

    fetchData();
  }, [filter]);

  async function handleSubmit(e) {
    e.preventDefault();

    let array = [];
    const q = query(
      collection(db, "job"),
      where("keywords", "array-contains", keyword.toLowerCase())
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => array.push(doc));

    setJobs(array);
  }

  return (
    <div className="central-collumn">
      {/* Header */}
      <PageHeader title="Tìm việc" />

      {/* Search box */}
      <div className="job-search">
        <form className="job-search__input" onSubmit={handleSubmit}>
          <BusinessCenterIcon />
          <input
            key="input-search"
            type="text"
            placeholder="Tìm kiếm công việc theo tên, tỉnh, thời gian,..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>

        <div className="job-filter">
          <span>
            Sắp xếp theo:
            <Select
              label="Bộ lọc"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              size="small"
              sx={{ ml: "5px" }}
            >
              <MenuItem value="createdAt">Mới được đăng</MenuItem>
              <MenuItem value="salary">Lương cao nhất</MenuItem>
            </Select>
          </span>
          <span style={{ ml: "20px" }}>
            Tính chất:
            <Select
              label="Bộ lọc"
              value={dur}
              onChange={(e) => setDur(e.target.value)}
              size="small"
              sx={{ ml: "5px" }}
            >
              <MenuItem value="None">Không</MenuItem>
              <MenuItem value="Ổn định">Ổn định</MenuItem>
              <MenuItem value="Thời vụ">Thời vụ</MenuItem>
            </Select>
          </span>
        </div>
      </div>

      {/* Jobs */}
      {jobs ? (
        jobs.map((job) =>
          dur !== "None" ? (
            job.data().duration === dur && (
              <JobCard key={job.id} content={job} />
            )
          ) : (
            <JobCard key={job.id} content={job} />
          )
        )
      ) : (
        <CircularProgress color="primary" sx={{ margin: "35px" }} />
      )}
    </div>
  );
}

export default Feed;
