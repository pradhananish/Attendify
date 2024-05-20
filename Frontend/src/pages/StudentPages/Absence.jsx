import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AbsenceDetails from '../../components/AbsenceDetails';
import Attendance from '../../components/Attendance';
import AbsenceReport from '../../components/AbsenceReport';
import Breadcrumb from '../../components/Breadcrumb';  

export default function Absence() {
  const [selectedItem, setSelectedItem] = useState('Absence Details');

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Absence Details':
        return <AbsenceDetails />;
      case 'Attendance':
        return <Attendance />;
      case 'Absence Report':
        return <AbsenceReport />;
      default:
        return null;
    }
  };

  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', href: '/' },  
    { name: 'Absence' },  
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} /> 
      <div className="flex flex-row flex-1">
        <Sidebar onItemClick={handleItemClick} selectedItem={selectedItem} />
        <div className="ml-64 flex flex-grow"> 
          {renderComponent()} 
        </div>
      </div>
    </div>
  );
}
