import React, { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import GenericTable from '.';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SearchFilter from '../Filter/Search';

const makeupTypes = [
  'Blush',
  'Bronzer',
  'Eyebrow',
  'Eyeliner',
  'Eyeshadow',
  'Foundation',
  'Lip liner',
  'Lipstick',
  'Mascara',
  'Nail polish'
]

const makeupColumns = ['id', 'brand', 'name', 'price', 'api_featured_image'];
const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';

function MakeupTable() {
  const [data, setData] = useState([]);
  const [queryString, setQueryString] = useState(makeupTypes[0]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const makeupRenderers = {
    api_featured_image: (url) => <img src={url} alt="product" width="50" />
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`${apiUrl}${queryString?.length ? `?product_type=${queryString}` : ''}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, [queryString, setData]);

  return (
    <div className="mainContent container mt-4">
      <SearchFilter data={data} columns={makeupColumns} setFilteredData={setFilteredData} />
      <Filter onFilterChange={setQueryString} options={makeupTypes} />
      {loading ?
        <Spinner animation="border" />
        :
        <GenericTable columns={makeupColumns} items={filteredData} customRenderers={makeupRenderers} />}
    </div>
  )
}

export default MakeupTable;