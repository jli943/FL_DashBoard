import React, { useState, useEffect } from 'react';

const Table=(props)=>{
    const [files, setFiles] = useState([]);

    useEffect(() => {
        setFiles(props.data);
    }, [props.data]);

    return (
        <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Server Port</th>
            <th>Client Ports</th>
          </tr>
        </thead>
        <tbody>
          {files.map((item, index) => (
            <tr key={index}>
              <td>{item.round}</td>
              <td>{item.server}</td>
              <td>{item.client.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      );
};

export default Table;