import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TablePagination from '../Pagination/TablePagination';

function GenericTable({ columns, items, customRenderers }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (items) {
      setCurrentPage(1);
    }
  }, [items])

  if (currentItems?.length > 0) {
    return (
      <>
        <div className='tableContainer'>
          <Table fullHeight striped bordered hover>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  {columns.map((col, i) => (
                    <td key={i}>
                      {customRenderers?.[col]
                        ? customRenderers[col](item[col])
                        : typeof item[col] === 'object' || Array.isArray(item[col])
                          ? JSON.stringify(item[col])
                          : item[col]
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <TablePagination items={items} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
    );
  }
  return <p>No data available</p>;
}

export default GenericTable;