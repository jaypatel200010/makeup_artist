import React from "react";
import Aheader from "../Components/Aheader";
import { NavLink } from "react-router-dom";
import Afooter from "../Components/Afooter";

function Dashboard() {
  return (
    <>
      <div>
        <Aheader title={"Dashboard"} />
        <Afooter />
      </div>
    </>
  );
}

export default Dashboard;
