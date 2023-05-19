import { ethers } from "ethers";
import {contractInstance} from './ConnectWallet';

const borrow_interest_rate = async () => {
    return await contractInstance.Borrow_interestRate();
}


