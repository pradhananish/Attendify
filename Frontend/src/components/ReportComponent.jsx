import React from 'react';

const inlineTableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const inlineThStyle = {
  textAlign: 'left',
  padding: '10px',
  fontWeight: 'bold',
  borderBottom: '2px solid #ddd',
};

const inlineTdStyle = {
  padding: '10px',
};

function InlineStyledTable() {
  return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
      <h1>Absence Records</h1>
      <table style={inlineTableStyle}>
        <thead>
          <tr>
            <th style={inlineThStyle}>No</th>
            <th style={inlineThStyle}>Student Name</th>
            <th style={inlineThStyle}>Course</th>
            <th style={inlineThStyle}>Absence Reason</th>
            <th style={inlineThStyle}>Absence For</th>
            <th style={inlineThStyle}>Status</th>
            <th style={inlineThStyle}></th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={inlineTdStyle}>1</td>
            <td style={inlineTdStyle}>John Doe</td>
            <td style={inlineTdStyle}>Math</td>
            <td style={inlineTdStyle}>Sick</td>
            <td style={inlineTdStyle}>3 days</td>
            <td style={inlineTdStyle}>Pending</td>
            <td style={inlineTdStyle}><button>Approve</button><button>Deny</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InlineStyledTable;
