import React, { useEffect, useState } from 'react';
import GenericTable from '.';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SearchFilter from '../Filter/Search';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function JSONPlaceholderTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(apiUrl)
      .then(response => {
        const retrievedData = response.data;
        setData(retrievedData);
        if (Array.isArray(retrievedData) && retrievedData.length > 0) {
          setColumns(Object.keys(retrievedData[0]));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, [setData]);

  return (
    <div className="mainContent container mt-4">
      <SearchFilter data={data} columns={columns} setFilteredData={setFilteredData} />
      {loading ? <Spinner animation="border" /> : <GenericTable columns={columns} items={filteredData} />}
    </div>
  )
}

export default JSONPlaceholderTable;