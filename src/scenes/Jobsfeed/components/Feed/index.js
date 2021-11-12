import PageHeader from "../../../../components/PageHeader/PageHeader";
import SearchBox from "./SearchBox";
import JobCard from "./JobCard";
import "./index.css";

function Feed({ jobs }) {
  return (
    <div className="central-collumn">
      {/* Header */}
      <PageHeader title="Tìm việc" />

      {/* Search box */}
      <SearchBox />

      {/* Job */}
      {jobs.map((job) => (
        <JobCard key={job?.id} content={job} />
      ))}
    </div>
  );
}

export default Feed;
