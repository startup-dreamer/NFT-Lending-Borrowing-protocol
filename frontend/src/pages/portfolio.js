import React, {useState, useEffect} from 'react';

const Portfolio = ({Contract, Provider}) => {

    const [account, setAccount] = useState('0x000000000000000000000000000000000000000000');

useEffect(() => {
    if (Provider !== null) {
    const displaydata = async () => {
        const accounts = await Provider.send("eth_requestAccounts", []);
        setAccount(accounts); 
        window.ethereum.on('accountChanged', (a) => {
            setAccount(a);
            window.location.reload()
        })       
    }
    displaydata();
}
},[Provider, Contract])
  
    
    return (
        <div>
        </div>
    );
}

export {Portfolio};
