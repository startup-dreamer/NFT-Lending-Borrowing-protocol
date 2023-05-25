import { useState } from 'react';
import Navbar from './components/navbar';
import Content from './components/content';
import {Lend, Borrow, Portfolio} from './pages';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  const [Provider, setProvider] = useState(null);
  const [Contract, setContract] = useState(null);
  const [Accounts, setAccounts] = useState(null);

  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={
          <>
            <Navbar setProvider={setProvider} setContract={setContract} setAccounts={setAccounts}/>
            <Content Contract={Contract}/>
          </>
        } />
        <Route path='/lend' element={
          <>
            <Navbar setProvider={setProvider} setContract={setContract} setAccounts={setAccounts}/>
            <Lend Contract={Contract}/>
          </>
        } />
        <Route path='/borrow' element={
          <>
            <Navbar setProvider={setProvider} setContract={setContract} setAccounts={setAccounts}/>
            <Borrow Contract={Contract}/>
          </>
        } />
        <Route path='/portfolio' element={
          <>
            <Navbar setProvider={setProvider} setContract={setContract} setAccounts={setAccounts}/>
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
