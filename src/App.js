import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import "./style.css";

const App = () => {
  const [transaction, setTransaction] = useState([]);

  const handleTransaction = value => {
    setTransaction([...transaction, value]);
  };
  const expenseList = transaction.filter(trans => Number(trans.amount) < 0);
  const expense = expenseList.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const amountList = transaction.filter(trans => Number(trans.amount) > 0);
  const amount = amountList.reduce((acc, curr) => acc + Number(curr.amount), 0);

  useEffect(() => {
    console.log("From app:", transaction);
  }, [transaction]);

  return (
    <div className="transactionlist-container">
      <div style={{ color: "rgba(0,255,0, 0.8)" }}>
        <span> Your Balance: {amount + expense}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: 200,
          backgroundColor: "rgba(21,21,21,0.1)",
          padding: 10,
          justifyContent: "space-between"
        }}
      >
        <div style={{ color: "rgba(0,255,0, 0.8)" }}>
          INCOME<p>{amount}</p>
        </div>
        <div style={{ color: "rgba(255,0,0, 0.6)" }}>
          EXPENSE<p>{expense}</p>
        </div>
      </div>
      <TransactionList transaction={transaction} />
      <AddTransaction
        transaction={transaction}
        handleTransaction={handleTransaction}
      />
    </div>
  );
};

export default App;
