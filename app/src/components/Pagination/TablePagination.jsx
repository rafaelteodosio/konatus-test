import React, { useEffect, useState } from 'react';
import '../../styles/customPagination.css'
import { Pagination } from 'react-bootstrap';

function TablePagination({items, currentPage, setCurrentPage, itemsPerPage}) {

  const [pageNumbers, setPageNumbers] = useState([]);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const maxPagesToShow = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(startPage + maxPagesToShow - 1, pageNumbers.length);

  useEffect(() => {
    const newPageNumbers = [];
    if(items.length) {
      for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        newPageNumbers.push(i);
      }
      setPageNumbers(newPageNumbers);
    }
  },[items, itemsPerPage])

  return (
    <Pagination className="custom-pagination">
      {startPage > 1 && (
        <>
          <Pagination.Item onClick={() => handlePageChange(1)}>1</Pagination.Item>
          <Pagination.Ellipsis />
        </>
      )}
      {pageNumbers.slice(startPage - 1, endPage).map(number => (
        <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
          {number}
        </Pagination.Item>
      ))}
      {endPage < pageNumbers.length && (
        <>
          <Pagination.Ellipsis />
          <Pagination.Item onClick={() => handlePageChange(pageNumbers.length)}>{pageNumbers.length}</Pagination.Item>
        </>
      )}
    </Pagination>
  );
}

export default TablePagination;