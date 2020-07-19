import React from "react";

const Table = ({ heads, rows }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover dataTables-example">
        <thead>
          <tr>
            {heads.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr>
                {row.map((value, idx) => {
                  return <td key={idx}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
