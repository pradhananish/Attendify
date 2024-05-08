// Dashboard.js
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DashboardComponent from "../../components/DashboardComponent";
import AttendanceComponent from "../../components/AttendanceComponent";
import AbsenceComponent from "../../components/AbsenceComponent";
import ReportComponent from "../../components/ReportComponent";
import TeacherComponent from "../../components/TeacherComponent";
import StudentComponent from "../../components/StudentComponent";
import SubjectComponent from "../../components/SubjectComponent";

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return <DashboardComponent />;
      case "Attendance":
        return <AttendanceComponent />;
      case "Absence":
        return <AbsenceComponent />;
      case "Report":
        return <ReportComponent />;
      case "Teacher":
        return <TeacherComponent />;
      case "Student":
        return <StudentComponent />;
      case "Subject":
        return <SubjectComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-1">
        <Sidebar onItemClick={handleItemClick} selectedItem={selectedItem} />
        <div className="ml-64 flex flex-grow">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
