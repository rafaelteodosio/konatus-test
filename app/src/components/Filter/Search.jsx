import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

function SearchFilter({ data, columns, setFilteredData}) {
  
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  useEffect(() => {
    const newFilteredData = data.filter(item => {
      return columns.some(col => {
        const value = item[col];
        return value && typeof value !== 'object' && value.toString().toLowerCase().includes(search.toLowerCase());
      });
    });
    setFilteredData(newFilteredData);
  }, [data, search, columns, setFilteredData])

  return (
    <InputGroup className="mb-3">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          value={search}
          onChange={handleSearchChange}
        />
      </InputGroup>
  );
}

export default SearchFilter;