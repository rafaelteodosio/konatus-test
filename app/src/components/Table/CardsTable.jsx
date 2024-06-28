import React, { useEffect, useState } from 'react';
import GenericTable from '.';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SearchFilter from '../Filter/Search';

const cardsColumns = ['code', 'image', 'value', 'suit'];
const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=30"

function CardsTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const cardsRenderers = {
    image: (url) => <img src={url} alt="card" width="50" />
  };

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

  return (
    <div className="mainContent container mt-4">
      <SearchFilter data={data} columns={cardsColumns} setFilteredData={setFilteredData} />
      {loading ? <Spinner animation="border" /> : <GenericTable columns={cardsColumns} items={filteredData} customRenderers={cardsRenderers} />}
    </div>
  )
}

export default CardsTable;