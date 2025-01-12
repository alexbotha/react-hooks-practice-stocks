import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [port, setPort] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => {
        setStocks(data);
      });
  }, []);

  //console.log("here", port);
  const buyStock = (stock) => {
    if (!port.includes(stock)) {
      const updatePortStocks = [...port, stock];
      setPort(updatePortStocks);
    } else {
      alert("You already own this");
    }
  };

  const sellStock = (stock) => {
    const deleteStock = [...port].filter((p) => p.id !== stock.id);
    setPort(deleteStock);
  };

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={port} handleClick={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
