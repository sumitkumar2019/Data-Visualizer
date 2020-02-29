import React from "react";
const Table = ({ previewData }) => {
  const { tableName, columns, data } = previewData;
  if (tableName && columns && data) {
    return (
      <div>
        <h4>{tableName}</h4>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              {columns.map(column => (
                <th key={column} scope="col">
                  {column.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(record => (
              <tr key={Math.random()}>
                {columns.map(column => (
                  <td key={record[column]}>{record[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Table;
