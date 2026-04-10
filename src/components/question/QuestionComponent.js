import React, { useState, useEffect } from 'react';
// Part 2: Import useSearchParams for URL query parameters
import { useSearchParams } from 'react-router-dom';
import { getTasksByStatus } from '../../api/client';

function QuestionComponent() {
  // State for storing tasks fetched from backend
  const [tasks, setTasks] = useState([]);
  
  // Hook to read and update URL query parameters (e.g., ?status=pending)
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Part 2: Get status from URL, default to 'all' if not present
  const currentStatus = searchParams.get('status') || 'all';

  // Part 1: Data fetching logic
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const data = await getTasksByStatus(currentStatus);
        setTasks(data);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    };

    fetchFilteredData();
  }, [currentStatus]); // Dependency array ensures it re-runs when URL changes

  // Event handler to update the URL when a filter button is clicked
  const handleFilterChange = (status) => {
    setSearchParams({ status: status });
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #eee' }}>
      <h3>Filter Tasks</h3>
      
      {/* Buttons to change the filter state and URL */}
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('pending')}>Pending</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>

      <p>Showing: <strong>{currentStatus.toUpperCase()}</strong></p>

      {/* Render the fetched tasks */}
      <div className="task-container">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <small>Status: {task.status}</small>
            </div>
          ))
        ) : (
          <p>No tasks found for this status.</p>
        )}
      </div>
    </div>
  );
}

export default QuestionComponent;