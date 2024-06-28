import React, { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

const Filter = ({ onFilterChange, options = [] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0] || '');
  
  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    onFilterChange(option);
  };

  return (
    <div className="mb-3">
      <InputGroup>
        <InputGroup.Text>Filtro</InputGroup.Text>
        <Form.Select value={selectedOption} onChange={handleOptionChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </Form.Select>
      </InputGroup>
    </div>
  );
};

export default Filter;