import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ApiPage from './api/ApiPage';
import MakeupTable from './components/Table/MakeupTable';
import CardsTable from './components/Table/CardsTable';
import JSONPlaceholderTable from './components/Table/JSONPlaceholderTable';

const App = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/jsonplaceholder"
          element={
            <ApiPage
              Content={JSONPlaceholderTable}
            />}
        />
        <Route
          path="/makeup"
          element={
            <ApiPage
              Content={MakeupTable}
            />
          }
        />
        <Route
          path="/deckofcards"
          element={<ApiPage
            Content={CardsTable}
          />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;