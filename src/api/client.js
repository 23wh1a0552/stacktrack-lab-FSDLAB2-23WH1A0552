// TODO: Set the base URL for your API
// Base URL for the backend API
const API_BASE_URL = 'http://localhost:5000'; 

export const getTasksByStatus = async (statusValue) => {
  try {
    // If status is 'all', we fetch all, otherwise we filter
    const endpoint = statusValue === 'all' 
      ? `${API_BASE_URL}/api/tasks` 
      : `${API_BASE_URL}/api/tasks?status=${statusValue}`;

    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};
