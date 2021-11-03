import { useState } from "react";
import { Link } from "react-router-dom";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CancelIcon from "@mui/icons-material/Cancel";

function MiniDetail({ MiniIcon, text, content }) {
  return (
    <span>
      <MiniIcon className="job-mini-detail-icon" style={{ fontSize: "20px" }} />{" "}
      {text}: {content}
    </span>
  );
}

function JobCard({ content }) {
  const [save, setSave] = useState(true);

  const onToggleBookmark = () => {
    setSave(!save);
  };

  return (
    <div className="job-card">
      <div className="job-title">
        <Link to="/jobdetails">
          <h2>{content.title}</h2>
        </Link>
        <span
          className="job-bookmark"
          onClick={() => {
            onToggleBookmark();
          }}
        >
          {save ? (
            <BookmarkIcon
              style={{
                color: "var(--primary-color)",
                fontSize: "30px",
                cursor: "pointer",
              }}
            />
          ) : (
            <BookmarkBorderRoundedIcon
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          )}
        </span>
      </div>

      <p>{content.description}</p>

      <div className="job-mini-detail">
        <MiniDetail
          MiniIcon={MonetizationOnIcon}
          text="Mức lương"
          content={content.salary}
        />
        <MiniDetail
          MiniIcon={LocationOnIcon}
          text="Địa điểm"
          content={content.location}
        />
        <MiniDetail
          MiniIcon={PeopleAltIcon}
          text="Số lượng"
          content={content.target}
        />
        <MiniDetail
          MiniIcon={CancelIcon}
          text="Hạn chót"
          content={content.deadline}
        />
      </div>
    </div>
  );
}

export default JobCard;
