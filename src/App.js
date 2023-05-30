import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://54.169.180.142/');
      const responseData = await response.json();
      console.log(responseData)

      setData(responseData);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  return (
    <div>
      <h1>Data Buku</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.buku}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
