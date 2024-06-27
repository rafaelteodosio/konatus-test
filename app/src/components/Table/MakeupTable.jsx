import React, { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import GenericTable from '.';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SearchFilter from '../Filter/Search';

function MakeupTable({ data, setData }) {
  const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';
  const [queryString, setQueryString] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const makeupColumns = ['id', 'brand', 'name', 'price', 'api_featured_image'];
  const makeupRenderers = {
    api_featured_image: (url) => <img src={url} alt="product" width="50" />
  };

  const onFilterChange = () => {

  }

  useEffect(() => {
    setLoading(true);
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, [setData]);

  useEffect(() => {
    const filteredData = data.filter(item => {
      return makeupColumns.some(col => {
        const value = item[col];
        return value && typeof value !== 'object' && value.toString().toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [data,search])

  return loading ? <Spinner animation="border" /> : (
    <>
      <SearchFilter data={data} columns={makeupColumns} onSearchChange={setSearch} />
      <Filter onFilterChange={setQueryString} />
      <GenericTable columns={makeupColumns} items={data} customRenderers={makeupRenderers} />
    </>
  )
}

export default MakeupTable;