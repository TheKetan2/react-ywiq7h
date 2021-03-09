import React,{useState} from "react"
const AddTransaction = 
({transaction,handleTransaction}) 
=> {
  const [item,setItem] = useState("")
  const [amount, setAmount] = useState(0)
const onSubmit = (e) => {
e.preventDefault();
handleTransaction(     
    {
        text: item,
        amount: amount,
        id: Math.floor(Math.random()*1000),
    }

   );
console.log([...transaction,{
        text: item,
        amount: amount,
        id: Math.floor(Math.random()*1000),
    } ])
setItem('');
setAmount('');
}

return (
     <div
        className="inputBox"
      >
  
    <div className='add-trans-header'>

        <h4>Add New Transaction</h4>

    </div>

    <form>

    <div className="form-control">

    <label htmlFor="text">Text</label>

    <input type="text" value={item} 
    onChange={(e) => setItem(e.target.value)} 
    placeholder="Enter text..." />

    </div>

    <div className="form-control">

    <label htmlFor="amount"

    >Amount <br />

    (negative - expense, positive - income)
    
    </label>

    <input type="number" value={amount} 
    onChange={(e) => setAmount(e.target.value)} 
    placeholder="Enter amount..." />

    </div>

    <button type='button' onClick={onSubmit} 
            value='submit'
            className="btn">
            Add transaction
    </button>

    </form>

    </div>
    );
  }

  export default AddTransaction;