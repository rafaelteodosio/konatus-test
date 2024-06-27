import React, { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import GenericTable from '.';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function JSONPlaceholderTable({ data, setData }) {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([]);
  const [queryString, setQueryString] = useState('');

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
  }, []);
  return loading ? <Spinner animation="border" /> : (
    <>
      <Filter onFilterChange={setQueryString} />
      <GenericTable columns={columns} items={data} />
    </>
  )
}

export default JSONPlaceholderTable;