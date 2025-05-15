import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]); // Initialize as an array

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://reqres.in/api/users?page=2');
      console.log(res.data.data); // This is the array of users
      setData(res.data.data);     // Save only the array into state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>get the data</h2>
      {
        data.map((item) => (
          <h3 key={item.id}>{item.email}</h3>
        ))
      }
    </div>
  );
}

export default App;
