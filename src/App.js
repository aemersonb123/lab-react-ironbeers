import logo from './logo.svg';
import './App.css';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import { Route, Routes, } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';  
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
  <div>
  <Header/>
  <Routes>
<Route path='/' element={<HomePage/>} exact/>
<Route path='/beers' element={<BeersList/>} exact/>
<Route path='/beers/:_id' element={<BeerDetails/>} exact/>
<Route path='/random-beer' element={<RandomBeer/>} exact/>
<Route path='/new-beer' element={<NewBeer/>} exact/>

</Routes>
  </div>
  );
}

export default App;
