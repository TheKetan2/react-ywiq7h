import React from "react";

const Transaction = ({ text, amount }) => {
  return (
    <div
      className="transaction"
      style={{
        backgroundColor:
          Number(amount) < 0 ? "rgba(255,0,0,0.5)" : "rgba(0,255,0,0.5)"
      }}
    >
      <div>{text}</div>
      <div>{amount}</div>
    </div>
  );
};

export default Transaction;
