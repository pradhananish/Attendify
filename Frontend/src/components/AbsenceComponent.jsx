import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Absence = ({ onSubmit, onExit }) => {
  const [absenceDate, setAbsenceDate] = useState(null);
  const [numOfDays, setNumOfDays] = useState(1);
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: absenceDate,
      days: numOfDays,
      reason,
    };
    onSubmit(formData);
  };

  return (
    <div className="flex px-20 py-12  h-full w-full bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Absence </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="date">
              Absence Date
            </label>
            <DatePicker
              selected={absenceDate}
              onChange={(date) => setAbsenceDate(date)}
              className="border p-2 w-full"
              placeholderText="Select a date"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="days">
              Number of Days
            </label>
            <input
              type="number"
              id="days"
              value={numOfDays}
              onChange={(e) => setNumOfDays(parseInt(e.target.value, 10))}
              min="1"
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="reason">
              Reason for Absence
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="border p-2 w-full"
              placeholder="Enter reason"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onExit}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Exit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Absence;
