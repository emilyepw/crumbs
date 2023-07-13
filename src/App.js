import './App.css';
import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [items, setItems] = useState(data)
  return (
    <body>
      <header className="App-header">
          <h1>Crumbs</h1>
      </header>
      <main>
      <section className='container'>
        <h3>{items.length} expiring today</h3>
        <List items={items} />
        <button onClick={() => setItems([])}>Clear All</button>
      </section>
    </main>
    </body>
  );
}

export default App;
