import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h2>reminder project setup</h2>;
      <main>
        <section className="container">
          <h3>{people.length} Birthday's Today</h3>
          <div className="person">
            <List people={people} />
          </div>
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </>
  );
}

export default App;
