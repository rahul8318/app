import React from "react";
import { Button } from "../button"; // Ensure this path is correct
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header className="py-3 px-12 flex justify-between items-center shadow-md bg-white">
      <Link to="/">
        <img src="/logo.svg" width={100} height={100} alt="Resume Builder Logo" />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-3">
          <Link to="/dashboard">
            <Button size="sm" className="hover:bg-slate-100 bg-white rounded" variant="outline">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button className="rounded">Get Started</Button>
        </Link>
      )}
    </header>
  );
}

export default Header;
