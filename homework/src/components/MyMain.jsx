import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
const Main = () => {
  return (
    <>
     <section title="TV Shows" className="d-flex align-items-center ps-4 gap-4 ">
      <h2 className="text-light">TV Shows</h2>
      <DropdownButton
        id="dropdown-basic-button"
        title="Genres"
        variant="dark"
        className="rounded-0 border border-white"
      >
        <Dropdown.Item href="#">Western</Dropdown.Item>
        <Dropdown.Item href="#">Commedia all'italiana</Dropdown.Item>
        <Dropdown.Item href="#">Azione</Dropdown.Item>
      </DropdownButton>
      </section>
    </>
  );
};

export default Main;
