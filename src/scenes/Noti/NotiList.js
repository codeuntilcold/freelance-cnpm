import NotiItem from "./NotiItem";
// import JCard from "../../components/JCard";
import { Chip, Snackbar } from "@mui/material";
import { useState } from "react";

function NotiList() {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis?";

  const [allRead, setAllRead] = useState(false);
  const [snack, setSnack] = useState(false)

  const markAll = () => {
    setAllRead(true);
    setSnack(true);
  };

  return (
    <div className="central-collumn">
      <div className="central-page-header noti-header">
        <h1>Thông báo</h1>
        <Chip label="Đánh dấu tất cả là đã đọc" onClick={markAll} />
      </div>

      <Snackbar
        // anchorOrigin={{ vertical, horizontal }}
        open={snack}
        autoHideDuration={1000}
        onClose={() => setSnack(false)}
        message="Đã đánh dấu hết"
      />

      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
      <NotiItem content={content} all={allRead} />
    </div>
  );
}

export default NotiList;
