import React, { useState } from 'react'
import './App.css';

const App = () => {

  return (
    <main>
      <h1>Rs. 400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type="text" placeholder='Enter Expense to Track'/>
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder='Description'/>
        </div>
        <button type='submit'>Add New Transaction</button>
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
