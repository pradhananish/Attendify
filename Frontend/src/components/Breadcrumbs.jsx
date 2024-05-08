import React from "react";

export default function Breadcrumbs() {
  return (
    <div className="flex flex-col gap-1 ">
      <span className="text-2xl font-semibold" style={{color:"#4154F1"}}>Dashboard</span>
      <span className="text-sm font-semibold" style={{color:"#989797"}}>Home / <span className="text-sm font-semibold" style={{color:'#444444'}}>Dashboard</span> </span>
    </div>
  );
}
