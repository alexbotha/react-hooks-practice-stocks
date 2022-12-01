import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ port }) {
  console.log("HERE", port);
  return (
    <div>
      <h2>My Portfolio</h2>
      {port.map((p) => {
        return (
          <>
            <h5>{p.name}</h5>
            <p>
              {p.ticker}: {p.price}
            </p>
          </>
        );
      })}
    </div>
  );
}

export default PortfolioContainer;
