import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import Lend from './components/Lend';
import Borrow from './components/Borrow';
import Portfolio from './components/portfolio';
import { Route, Router, Routes } from 'react-router-dom';
// import nftAbi from './Nft-erc721-abi.json'


function App() {

  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState(null); // state variables for provider and contract instance
  const [contract, setContract] = useState(null);


  // const approveToken = async (sender_address, token_id) => {
  //   const contract = new ethers.Contract(
  //     "0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA",
  //        nftAbi,
  //        provider.getSigner(),
  //      );
  //      setContract(contract);
  //   try {
  //     const tx = await contract.approve(sender_address, token_id);
  //     console.log('Transaction hash:', tx.hash);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // useEffect(() => {

  //   connectWallet();
  // }, [connected]);


  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={
          <>
            <Navbar setProvider={setProvider} />
            <Content />
          </>
        } />
        <Route path='/lend' element={
          <>
            <Navbar setProvider={setProvider} />
            <Lend />
          </>
        } />
        <Route path='/borrow' element={
          <>
            <Navbar setProvider={setProvider} />
            <Borrow />
          </>
        } />
        <Route path='/portfolio' element={
          <>
            <Navbar setProvider={setProvider} />
            <Portfolio/>
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
