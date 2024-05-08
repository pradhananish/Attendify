// Sidebar.js
import React from "react";
import dashboard from "../assets/dashboard.png";
import attendance from "../assets/attendance.png";
import absence from "../assets/absence.png";
import report from "../assets/report.png";
import teacher from "../assets/teacher.png";
import student from "../assets/student.png";
import subject from "../assets/subject.png";
import logout from "../assets/logout.png";

const menuItems = [
  { icon: dashboard, text: "Dashboard" },
  { icon: attendance, text: "Attendance" },
  { icon: absence, text: "Absence" },
  { icon: report, text: "Report" },
  { icon: teacher, text: "Teacher" },
  { icon: student, text: "Student" },
  { icon: subject, text: "Subject" }
];

export default function Sidebar({ onItemClick, selectedItem }) {
  return (
    <aside
      id="separator-sidebar"
      className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-md"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-#FFFFFF dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                style={{
                  backgroundColor: selectedItem === item.text ? "#F6F9FF" : "",
                  color: selectedItem === item.text ? "#4154F1" : "#012970"
                }}
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => onItemClick(item.text)}
              >
                <img src={item.icon} alt="" />
                <span className="ms-3">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              style={{ color: "#012970" }}
              className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <img src={logout} alt="" />
              <span className="ms-3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
