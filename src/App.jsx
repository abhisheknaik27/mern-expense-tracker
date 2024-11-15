import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [timeDate, setTimeDate] = useState('');
  const [description, setDescription] = useState('');

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
        console.log(json);
      })
     });
  }
  return (
    <main>
      <h1>Rs. 400<span>.00</span></h1>
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

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Samsung LED TV</div>
            <div className="description">Bought in diwali sale</div>
          </div>
          <div className="right">
            <div className="price red">- Rs. 500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Samsung LED TV</div>
            <div className="description">Bought in diwali sale</div>
          </div>
          <div className="right">
            <div className="price green">+ Rs. 500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">SIphone 16</div>
            <div className="description">Bought in diwali sale</div>
          </div>
          <div className="right">
            <div className="price green">+Rs. 500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default App
