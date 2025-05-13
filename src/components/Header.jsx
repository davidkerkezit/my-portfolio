import React from "react";
import PersonCard from "./Header/PersonCard";
import Content from "./Header/Content";

function Header() {
  return (
    <div className="h-[100vh]   flex items-center w-full">
      <div className="flex justify-center h-max  items-center w-full">
        <PersonCard />
        <Content />
      </div>
    </div>
  );
}

export default Header;
