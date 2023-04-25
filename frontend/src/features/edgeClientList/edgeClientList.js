import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table';

const EdgeClientList = () => {
    const [files, setFiles] = useState([]);
  
    useEffect(() => {
      const fetchFiles = async () => {
        const response = await axios.get('http://localhost:3111/edgeClientList');
        setFiles(response.data);

        if (response.data.length === 5) {
          clearInterval(liveUpdate);
        }
      };
  
      const liveUpdate = setInterval(fetchFiles, 3000);
    }, []);
  
  
    return (
      <div>
        <Table data={files} />
      </div>
    );
    };
  export default EdgeClientList;
  