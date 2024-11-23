import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" width={100} height={100} alt="" />
      <Link to={"/auth/sign-in"}>
        <Button className="btn">Get Started</Button>
      </Link>
    </div>
  );
}

export default Header;
