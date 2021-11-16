import PageHeader from "../../../../components/PageHeader/PageHeader";
import JobCard from "./JobCard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Select, MenuItem, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import "./index.css";

import { db } from "../../../../services/db";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";

function Feed() {

  function SearchBox() {
    return (
      <div className="job-search">
        <form action="" className="job-search__input">
          <BusinessCenterIcon />
          <input
            type="text"
            placeholder="Tìm kiếm công việc theo tên, kỹ năng, danh mục,..."
          />
        </form>
      <span>
        Sắp xếp theo:
        <Select
          label="Bộ lọc"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size='small'
          sx={{ ml: "5px" }}
        >
          <MenuItem value="createdAt">Mới được đăng</MenuItem>
          <MenuItem value="salary">Lương cao nhất</MenuItem>
        </Select>
      </span>
      </div>
    )
  }


  const [filter, setFilter] = useState("salary");

  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function fetchData() {
  
      let array = [];
      const q = query(collection(db, "job"), orderBy(filter, 'desc'))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => array.push(doc));

      setJobs(array)
    }

    fetchData();
  }, [filter]);

  function sortContent(filter) {}

  return (
    <div className="central-collumn">
      {/* Header */}
      <PageHeader title="Tìm việc" />

      {/* Search box */}
      <SearchBox />

      {/* Jobs */}
      {jobs ? (
        jobs.map((job) => <JobCard key={job.id} content={job} />)
      ) : (
        <CircularProgress color='primary' sx={{margin: '35px'}} />
      )}
    </div>
  );
}

export default Feed
