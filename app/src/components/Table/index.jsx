import React from 'react';
import { Table } from 'react-bootstrap';

function GenericTable({ columns, items, customRenderers }) {
  if (items?.length > 0) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
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
    );
  }
  return <p>No data available</p>;
}

export default GenericTable;