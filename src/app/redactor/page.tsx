"use client";
import dynamic from 'next/dynamic';
import React from "react"
import Sidebar from "@/components/sidebar/Sidebar";

const Canvas = dynamic(() => import("@/components/editor-section/Canvas"), { ssr: false });
const Redactor = () => {
  return (
    <div className="container py-6">
      <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_350px]  lg:min-h-[680px]">
        <div className="rounded-md border md:order-1">
          <Canvas />
        </div>
        <div className="hidden flex-col space-y-4  rounded-md border  sm:flex md:order-2 lg:min-h-[680px]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default Redactor;
