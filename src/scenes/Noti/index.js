import { useContext } from "react";

import { Container } from "@mui/material";
import "./index.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CornerFooter from "../../components/CornerFooter/index";
import NotiList from "./NotiList";

import { AppContext } from "../../context/AppProvider";

function Noti() {

  const {currentUser} = useContext(AppContext);
  // console.log(currentUser)
  var role = currentUser?.role;

  return (
    <Container maxWidth="lg">
      <div className="whole-page-container">
        <Sidebar active={3} role={role} />

        <NotiList />

        <div className="right-collumn">
          <CornerFooter />
        </div>
      </div>
    </Container>
  );
}

export default Noti;
