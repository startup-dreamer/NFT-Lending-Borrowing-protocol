import {useState} from 'react';
import Navbar from './components/navbar';
import Content from './components/content';
import {Lend, Borrow, Portfolio} from './pages';
import {Route, Routes} from 'react-router-dom';
import './App.css';


function App() {
  const [Contract, setContract] = useState(null);
  const [Provider, setProvider] = useState(null);
  const [Connected, setConnected] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider} setConnected={setConnected} Connected={Connected}/>
            <Content Contract={Contract} Provider={Provider}/>
          </>
        } />
        <Route path='/lend' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider} setConnected={setConnected} Connected={Connected}/>
            <Lend Contract={Contract}/>
          </>
        } />
        <Route path='/borrow' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider} setConnected={setConnected} Connected={Connected}/>
            <Borrow Contract={Contract}/>
          </>
        } />
        <Route path='/portfolio' element={
          <>
            <Navbar setContract={setContract} setProvider={setProvider} setConnected={setConnected} Connected={Connected}/>          
            <Portfolio setConnected={setConnected}/>
          </>
        } />
      </Routes>
    </div>
  );

}


export default App;
