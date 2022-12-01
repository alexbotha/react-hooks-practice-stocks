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
  function handleClick(stock) {
    setPort([...port, stock]);
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={handleClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer port={port} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
