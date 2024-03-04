import React from "react";
import { ProfileNav } from "@/components/nav/ProfileNav";

const Header = () => {
  return (
    <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <h2 className="text-lg font-semibold">Vitiquette</h2>
      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <div className="ml-auto flex items-center space-x-4">
          <ProfileNav />
        </div>
      </div>
    </div>
  );
};
export default Header;
