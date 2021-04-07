import Menu from "./Menu";
import "Styles/css/admin.css";
import Metals from "./Metals";
import Borders from "./Borders";
import Discounts from "./Discounts";
import { useState } from "react";

const Admin = ({ setUser }) => {
  const [page, setPage] = useState("Metals");
  return (
    <div className="position-fixed w-100 h-100 d-flex" style={{ top: 0, left: 0 }}>
      <Menu
        logout={() => {
          setUser(null);
          window.location.replace("/");
        }}
        page={page}
        setPage={setPage}
      ></Menu>
      <div className="flex-grow-1 p-5 overflow-auto">
        {page === "Metals" ? (
          <Metals></Metals>
        ) : page === "Borders" ? (
          <Borders></Borders>
        ) : page === "Discounts" ? (
          <Discounts></Discounts>
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
