import React from "react";
import DotLoader from "react-spinners/DotLoader";

export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
     
        <DotLoader color="#36d7b7" size={60}/>
      
    </div>
  );
}
