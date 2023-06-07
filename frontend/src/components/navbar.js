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
      const { chainId } = await provider.getNetwork();
      const signer = provider.getSigner();
      const accounts = await provider.send('eth_requestAccounts', []);
      if (!accounts || !accounts[0]) {
        alert('Accounts error: No account found. Please connect.');
      }
      const contract = new ethers.Contract(
        '0x3a9CD02dcf474d0151a94c74690091844e99B04F',
        AurumV1core,
        signer
      );
      if (chainId !== 11155111) {
        alert("Please switch to Sepoli Testnet");
      }
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
    const checkMetaMask = async () => {
      if (!window.ethereum) {
        alert('Please install MetaMask to use this application.');
        return;
      }
        const Provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.send('eth_requestAccounts');
        const signer = Provider.getSigner();

        const contractInstance = new ethers.Contract("0xff0AF63633f2FEeB37a9E6bD46013A6333B20460", AurumV1core, signer);
        setProvider(Provider);
        setContract(contractInstance);
        setConnected(true);
    };
    checkMetaMask();
  }, []);

  // coloreffect
  // useEffect(()=>{
  //   let k = document.getElementsByClassName('portfolio_nav')[0];
  //   if(window.location.pathname.includes('portfolio')){
  //     k.style.color = 'aqua';
  //     k.style.textDecoration = 'underline';
  //   }
  //   else{
  //     k.style.textDecoration = 'none';
  //   }
  // },[window.location.pathname]);

  return (
    <div className='navbar'>
      <div className='left_nav'>
        <img src={ether_icon} alt='' />
        <a href='/'>Aurum</a>
      </div>
      <div className='right_nav'>
        <button>
        <Link to='/lend' className='lend_nav'>Lending</Link>
        </button>
        <button>
        <Link to='/borrow' className='borrow_nav'>Borrowing</Link>
        </button>
        <button>
          <Link to='/portfolio' className='portfolio_nav'>Portfolio</Link>
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
