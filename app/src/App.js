import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MakeupTable from './components/Table/MakeupTable';
import CardsTable from './components/Table/CardsTable';
import JSONPlaceholderTable from './components/Table/JSONPlaceholderTable';

const App = () => {
  return (
    <div className='mainContent'>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/jsonplaceholder"
          element={
            <JSONPlaceholderTable />}
        />
        <Route
          path="/makeup"
          element={
            <MakeupTable />
          }
        />
        <Route
          path="/deckofcards"
          element={<CardsTable />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;