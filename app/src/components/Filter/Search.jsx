import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

function SearchFilter({data, columns, onSearchChange}) {
  
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    onSearchChange(search);
  };

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