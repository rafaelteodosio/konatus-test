import React, { useState} from 'react';
import { Pagination } from 'react-bootstrap';

const ApiPage = ({ Content }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(startPage + maxPagesToShow - 1, pageNumbers.length);

    return (
      <Pagination>
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
  };

  return (
    <div className="container mt-4">
      <Content data={data} setData={setData} />
      {renderPagination()}
    </div>
  );
};

export default ApiPage;