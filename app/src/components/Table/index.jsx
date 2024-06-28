import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
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
  }, [items]);

  const columnsWithFormatters = columns.map(col => ({
    dataField: col,
    text: col.charAt(0).toUpperCase() + col.slice(1),
    sort: true,
    formatter: (cell) => customRenderers?.[col]
      ? customRenderers[col](cell)
      : typeof cell === 'object' || Array.isArray(cell)
        ? JSON.stringify(cell)
        : cell
  }));

  return (
    currentItems?.length ? (
      <div className="tableContainer">
      <BootstrapTable
        keyField="id"
        data={currentItems}
        columns={columnsWithFormatters}
        striped
        hover
        condensed
      />
      <TablePagination items={items} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
    ) : (
      <p>Nenhum valor correspondente encontrado</p>
    )
  );
}

export default GenericTable;
