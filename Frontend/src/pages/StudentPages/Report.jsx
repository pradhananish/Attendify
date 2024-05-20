import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AbsenceReportTable from '../../components/AbsenceReportTable';

import Breadcrumb from '../../components/Breadcrumb'; 

const ReportPage = () => {
  const [reports, setReports] = useState([]);
  const [selectedItem, setSelectedItem] = useState('Report');

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const handleAddReport = (newReport) => {
    setReports([...reports, newReport]);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Report':
        return <AbsenceReportTable reports={reports} />;
      case 'Absence Details':
        return <AbsenceDetails />;
      case 'Attendance':
        return <Attendance />;
      default:
        return null;
    }
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Report' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-row flex-1">
        <Sidebar onItemClick={handleItemClick} selectedItem={selectedItem} />
        <div className="flex-grow p-4">
          <ReportForm onSubmit={handleAddReport} />
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
