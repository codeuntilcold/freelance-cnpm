import NotiItem from "./NotiItem";
// import JCard from "../../components/JCard";
import { Chip, Snackbar } from "@mui/material";
import { useState, useEffect, useContext } from "react";

import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../services/db";
import { AppContext } from "../../context/AppProvider";

function NotiList() {
  const [notifications, setNotifications] = useState([]);

  const { currentUser } = useContext(AppContext);

  const [allRead, setAllRead] = useState(false);
  const [snack, setSnack] = useState(false);

  useEffect(() => {
    async function fetchNotifs() {
      let array = [];

      const q = query(
        collection(db, "apply_for"),
        where("freelancer-id", "==", currentUser.roleID)
      );
      const notiRef = await getDocs(q);

      notiRef.forEach((doc) => {

        const docID = doc.id
        const jobID = doc.get("job-id");

        doc.get("notifications")?.forEach((noti, idx) =>
          array.push({
            docid: docID,
            id: jobID,
            idx: idx,
            message: noti.message,
            isRead: noti.isRead,
          })
        );
      });

      // console.log(array);
      setNotifications(array);
    }

    currentUser && fetchNotifs();
  }, [currentUser]);

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
        autoHideDuration={1500}
        onClose={() => setSnack(false)}
        message="Đã đánh dấu hết"
      />

      {/* <NotiItem content={content} all={allRead} /> */}
      {notifications &&
        notifications.map((noti, idx) => (
          <NotiItem
            key={idx}
            docID={noti.docid}
            jobID={noti.id}
            notiIndex={noti.idx}
            message={noti.message}
            isRead={noti.isRead}
            all={allRead}
          />
        ))}
    </div>
  );
}

export default NotiList;
