import React from "react";
import RedactorNavbar from "@/components/navbar/RedactorNavbar";

export default function CreationNavbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <RedactorNavbar />
      {children}
    </div>
  );
}
