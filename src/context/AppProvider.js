import { documentId } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import useFirestore from "../hook/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const { user } = React.useContext(AuthContext);
  const uid = user?.uid;

  const userCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "==",
      compareValue: uid,
    };
  }, [uid]);
  const currentUser = useFirestore("user", userCondition);
  // console.log(currentUser);

  const currentUserRole = React.useMemo(()=>{
      return {
        roleID : currentUser?.roleID,
        role: currentUser?.role
      } || {};
  }, [currentUser]);
  // console.log(currentUserRole);
  const userInfoCondition = React.useMemo(()=>(
       {
          fieldName: documentId(),
          operator: "==",
          compareValue: currentUserRole.roleID
      }
  ), [currentUserRole.roleID])
  // console.log(userInfoCondition);
  const userInfo = useFirestore(currentUserRole.role, userInfoCondition);
  const role = currentUserRole?.role;
  const roleID = currentUserRole?.roleID;
  // console.log("context", userInfo);


  return (
    <AppContext.Provider
      value={{
        currentUser,
        userInfo,
        role,
        roleID
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
