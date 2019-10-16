import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from "./Card";
import Container from "./Container";

function App() {
  const [isInsideContainer, moveCardInside] = React.useState(false);

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header className="App-header">
          <Card isInsideContainer={isInsideContainer}/>
          <Container moveCardInside={moveCardInside}/>
        </header>
      </DndProvider>
    </div>
  );
}

export default App;
