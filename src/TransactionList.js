import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transaction }) => {
  console.log("from tl:", transaction);
  return (
    <div className="transactionlist-container">
      <div className="transactionlist-header-container">
        <h4>Transaction History</h4>
      </div>

      {transaction.map(trans => (
        <Transaction amount={trans.amount} text={trans.text} key={trans.id} />
      ))}
    </div>
  );
};

export default TransactionList;
