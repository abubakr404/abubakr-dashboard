const Table = ({ tableHeaders, tableRows, customClass = "tableTT" }) => {
  return (
    <div className={customClass}>
      <div className="table-head">
        {tableHeaders.map((header, i) => (
          <strong className="table-cell head" key={i}>
            {header}
          </strong>
        ))}
      </div>
      <div className="table-body">
        {Object.values(tableRows).map((row) => (
          <div className="table-row" key={row.id}>
            {Object.values(row).map((cell, i) => (
              <span className="table-cell" key={i}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
