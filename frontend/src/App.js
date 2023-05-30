import { useState } from 'react';
import Navbar from './components/navbar';
import Content from './components/content';
import {Lend, Borrow, Portfolio} from './pages';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  const [Contract, setContract] = useState(null);
  const [Provider, setProvider] = useState(null);

  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider}/>
            <Content Contract={Contract} Provider={Provider}/>
          </>
        } />
        <Route path='/lend' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider}/>
            <Lend Contract={Contract}/>
          </>
        } />
        <Route path='/borrow' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider}/>
            <Borrow Contract={Contract}/>
          </>
        } />
        <Route path='/portfolio' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider}/>          
            <Portfolio Contract={Contract}/>
          </>
        } />
      </Routes>
    </div>



    // <div>
    //    <label>Token address </label>
    //    <input type="text" id="identifier" />
    //    <label>Token id </label>
    //    <input type="number" id="cost" />
    //    <button onClick={() => {approveToken(document.getElementById("identifier").value, document.getElementById("cost").value)}}>Approve Token</button>
    //    <button onClick={() => {transferto("0x01751bd851599d98ed52CB75AA2682a31D79AaD6",document.getElementById("identifier").value, document.getElementById("cost").value)}}>transfer Token</button>
    // </div>
  );

}


export default App;
