import React from "react";

function Stock({ stock, portfolio, handleClick }) {
  function handleSetter() {
    handleClick(stock);
  }
  return (
    <div onClick={handleSetter}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">
            {stock.ticker}: {stock.price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
