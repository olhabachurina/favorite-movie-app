import './App.css';  // Импортируем стили
import React from 'react';
import FavoriteMovie from './components/FavoriteMovie';

function App() {
  return (
    <div className="container">
      <FavoriteMovie />
    </div>
  );
}

export default App;