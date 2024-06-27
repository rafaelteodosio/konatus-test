import React, { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import GenericTable from '.';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function CardsTable({ data, setData }) {
  const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=10"
  const [queryString, setQueryString] = useState('');
  const [loading, setLoading] = useState(true);
  const cardsRenderers = {
    image: (url) => <img src={url} alt="card" width="50" />
  };
  const cardsColumns = ['code', 'image', 'value', 'suit'];

  useEffect(() => {
    setLoading(true);
    axios.get(apiUrl)
      .then(response => {
        const retrievedData = response.data.cards
        setData(retrievedData);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, [setData]);
  return loading ? <Spinner animation="border" /> : (
    <>
      <Filter onFilterChange={setQueryString} />
      <GenericTable columns={cardsColumns} items={data} customRenderers={cardsRenderers} />
    </>
  )
}

export default CardsTable;