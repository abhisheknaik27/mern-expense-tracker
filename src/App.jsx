import React, { useEffect, useState } from 'react'
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [timeDate, setTimeDate] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(transactions => {
      setTransactions(transactions);
    })
  }, []);

  async function getTransactions(){
    const url = import.meta.env.VITE_APP_API_URL+'/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction (e) {
    e.preventDefault();
    const url = import.meta.env.VITE_APP_API_URL+'/transaction';
    
    const price = name.split(' ')[0];
    
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1), 
        description, 
        timeDate
      })
    })
     .then(response => {
      response.json().then(json => {
        setName('');
        setTimeDate('');
        setDescription('');
        console.log(json);

      })
     });
  }
  let balance = 0;
  for(const t of transactions){
    balance = balance + t.price;
  }
  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];
  return (
    <main>
      <div className='header'> <h1>Money Tracker App <span>(DB Storage)</span></h1></div>
      <h2>Rs. {balance}<span>{fraction}</span></h2>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            type="text" placeholder='+200 New Item'/>
          <input 
          value={timeDate} 
          onChange={e => setTimeDate(e.target.value)} 
          type="datetime-local" />
        </div>
        <div className="description">
          <input 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            type="text" placeholder='Description'/>
        </div>
        <button value='submit' type='submit'>Add New Transaction</button>
      </form>

      

      {transactions.length > 0 && transactions.map(t => (
          <div key={t._id} className="transactions">
            <div className="transaction">
              <div className="left">
                <div className="name">{t.name}</div>
                <div className="description">{t.description}</div>
              </div>
              <div className="right">
                <div className={"price " +(t.price<0?'red':'green')}>{t.price}</div>
                <div className="datetime">{t.timeDate}</div>
              </div>
          </div>  
        </div>
      ))}

    </main>
  )
}

export default App
