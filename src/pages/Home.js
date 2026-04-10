import React from 'react';
import { Link } from 'react-router-dom';

const STUDENT_ID = '23WH1A0552';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Stack Track Lab</h1>
      <p><strong>Student ID:</strong> {STUDENT_ID}</p>
      <p><strong>Lab ID:</strong> {LAB_ID}</p>
      <hr />
      <div style={{ marginTop: '20px' }}>
        <h3>Task Management System</h3>
        <p>Use the link below to view and filter tasks by status:</p>
        <Link to="/tasks" style={{ fontSize: '18px', color: 'blue' }}>Go to Tasks Page</Link>
      </div>
    </div>
  );
}

export default Home;
