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

  // var currentRoleID = currentUser?.roleId;


  // const userInfoCondition = React.useMemo(() => {
  //   return {
  //     fieldName: documentId(),
  //     operator: "==",
  //     compareValue: currentRoleID,
  //   };
  // }, [currentRoleID]);

  // const userInfo = useFirestore("employee", userInfoCondition);


  return (
    <AppContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
