import NotiItem from "./NotiItem";
// import JCard from "../../components/JCard";
import { Chip, Snackbar } from "@mui/material";
import { useState, useEffect, useContext } from "react";

import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../services/db";
import { AppContext } from "../../context/AppProvider";


function NotiList() {

  const [notifications, setNotifications] = useState([])

  const {currentUser} = useContext(AppContext);

  
  useEffect(() => {

    async function fetchNotifs() {
      
      let array = []

      const q = query(collection(db, "apply_for"), where("freelancer-id", "==", currentUser.roleID))
      const notiRef = await getDocs(q)

      notiRef.forEach(doc => array.push(doc.data()))

      setNotifications(array)

      // array: [job-id, notifications]
      console.log(array)

    }

    currentUser && fetchNotifs()
  }, [currentUser])


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

      {/* <NotiItem content={content} all={allRead} /> */}
      {notifications && notifications.map(application => 
        application?.notifications && <>
        
        <NotiItem content={application.notifications[0]?.message} all={allRead} />
        <NotiItem content={application.notifications[1]?.message} all={allRead} />
        
        </>
        
        )}

    </div>
  );
}

export default NotiList;
