// Navbar.js
import React from "react";
import profile from "../assets/profile.jpg";

export default function Navbar() {
  return (
    <div className="flex h-12  justify-between items-center shadow-md" style={{backgroundColor:"#FFFFFF"}}>
      <div>
        <h1 className="font-bold font-serif text-2xl pl-8" style={{ color: "#012970" }}>
          Attendify
        </h1>
      </div>
      <div>
        <input
          className="border flex-1 p-1 rounded text-sm"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-row items-center gap-2 pr-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <img className="rounded-full shadow-md" style={{ height: "36px", width: "36px" }} src={profile} alt="Profile" />
          <span className="text-sm font-medium" style={{ color: "#012970" }}>Kamal Gautam</span>
        </div>
      </div>
    </div>
  );
}
