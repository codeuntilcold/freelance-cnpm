import "./index.css";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Status({ jobStatus }) {
  return (
    <div className="feed-item-status">
      {jobStatus === "Đã xong" && (
        <div
          className="feed-item-status"
          style={{ backgroundColor: "var(--green-500)" }}
        >
          <span>{jobStatus}</span>
          <CheckIcon style={{ fontSize: "25", paddingLeft: "5px" }} />
        </div>
      )}

      {jobStatus === "Đang làm" && (
        <div
          className="feed-item-status"
          style={{ backgroundColor: "var(--yellow-button)" }}
        >
          <span>{jobStatus}</span>
          <RemoveIcon style={{ fontSize: "25", paddingLeft: "5px" }} />
        </div>
      )}

      {jobStatus === "Đang đợi" && (
        <div
          className="feed-item-status"
          style={{ backgroundColor: "var(--red-button)" }}
        >
          <span>{jobStatus}</span>
          <ClearIcon style={{ fontSize: "25", paddingLeft: "5px" }} />
        </div>
      )}

      {jobStatus === "Lưu" && (
        <div
          className="feed-item-status"
          style={{ backgroundColor: "var(--green-700)" }}
        >
          <span>{jobStatus}</span>
          <MenuIcon style={{ fontSize: "25", paddingLeft: "5px" }} />
        </div>
      )}
    </div>
  );
}

function FeedItem({ content }) {
  return (
    <div className="feed-item">
      <div className="feed-item-title">
        <Link to={`/jobdetails/${content["job-id"]}`} style={{ color: "#000" }}>
          <h2>{content.name}</h2>
        </Link>

        <Status jobStatus={content.status} />
      </div>

      <div className="feed-item-date">
        <p>
          Bắt đầu làm từ {content["start-date"]?.toDate().toLocaleDateString("vi-VN")} - {content.duration || ""}
        </p>
      </div>
    </div>
  );
}

export default FeedItem;
