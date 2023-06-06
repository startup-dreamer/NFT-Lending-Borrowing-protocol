import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import AurumV1core from '../backend/AurumV1core.json';
import '../static/css/navbar.css';
import ether_icon from '../static/img/ether.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setContract, setProvider, setConnected, Connected }) => {

  const connectWallet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const accounts = await provider.send('eth_requestAccounts', []);
      if (!accounts || !accounts[0]) {
        alert('Accounts error: No account found. Please connect.');
      }
      const contract = new ethers.Contract(
        '0x2c184D8aB9f4E9665612AFE5FB57B319dfa757F6',
        AurumV1core,
        signer
      );
      setContract(contract);
      setProvider(provider);
      setConnected(true);
      console.log(contract);
    } catch (err) {
      console.error(err);
    }
  };

  const handleConnectWallet = async (e) => {
    e.preventDefault();
    await connectWallet();
  };

  useEffect(() => {
    const checkMetaMask = () => {
      if (!window.ethereum) {
        alert('Please install MetaMask to use this application.');
        return;
      }
    };
    checkMetaMask();
  }, []);

  return (
    <div className='navbar'>
      <div className='left_nav'>
        <img src={ether_icon} alt='' />
        <a href='/'>Aurum</a>
      </div>
      <div className='right_nav'>
        <button>Lending</button>
        <button>Borrowing</button>
        <button>
          <Link to='/portfolio'>Portfolio</Link>
        </button>
        {Connected ? (
          <input type='button' value={'Connected'} />
        ) : (
          <input
            type='button'
            value={'Connect'}
            onClick={(e) => {
              handleConnectWallet(e);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
