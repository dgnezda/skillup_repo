import React, { useState } from 'react';
import './App.css';
import { StringMappingType } from 'typescript';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people : {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "",
      age: 37,
      note: "Allergic to staying on the same team"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
