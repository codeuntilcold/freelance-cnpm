import { useEffect, useState } from "react";

import { arrayRemove, arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { db } from "../../services/db";




function NotiItem({ docID, jobID, notiIndex, message, isRead, all }) {

  const [read, setRead] = useState(isRead);

  const toggleRead = async () => {
    
    if (!read) {
      
      setRead(true);
      const applyRef = doc(db, "apply_for", docID)
  
      await updateDoc(applyRef, {
        notifications: arrayRemove({
          message: message,
          isRead: false
        })
      })
  
      await updateDoc(applyRef, {
        notifications: arrayUnion({
          message: message,
          isRead: true
        })
      })
    }

  };

  // const toggleUnread = async () => {
    
  //     setRead(false);
  //     const applyRef = doc(db, "apply_for", docID)
  
  //     await updateDoc(applyRef, {
  //       notifications: arrayRemove({
  //         message: message,
  //         isRead: true
  //       })
  //     })
  
  //     await updateDoc(applyRef, {
  //       notifications: arrayUnion({
  //         message: message,
  //         isRead: false
  //       })
  //     })

  // };

  useEffect(() => {
    all && toggleRead()
  }, [all])

  return (
    <div
      className={`noti-item ${(all || read) && "noti-item-read"} `}
      onClick={toggleRead}
    >
      {/* {content} */}
      <p>{message}</p>
    </div>
  );
}

export default NotiItem;
