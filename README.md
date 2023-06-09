<p align = "center"> 
  <img src="./svg.svg" height="70" width="80" style="background-color: black; display: inline-block;">
  <h2 align="center">Aurum-Protocol</h2>
</p align = "center">
  <p align="center">
   NFT Lending Borrowing Solution 
    <br />
    <a href="https://nft-lending-borrowing-protocol.vercel.app/"><strong>Try it out (on sepoli) »</strong></a>
    <br />
    <br />
    
    
- [About The Project](#about-the-project)
- [Inspiration](#inspiration)
- [How it Works](#how-it-works)
  - [Collateralization and Borrowing](#collateralization-and-borrowing)
  - [Loan Terms and Repayment](#loan-terms-and-repayment)
  - [Lenders and Yield Generation](#lenders-and-yield-generation)
  - [Advantages](#advantages-over-peer-to-peer-lending)
- [How we built it](#how-we-built-it)
  - [AurumV2Core](#contract-aurumv2core-in-development)
  - [AurumV1Core](#contract-aurumv1core-deployed)
- [Challenges](#challenges-we-ran-into)
- [Accomplishments](#accomplishments-that-were-proud-of)
- [Learnings](#what-we-learned)
- [Components](#links)

# Aurum Protocol
### Message: Version 2 is currently under construction and undergoing continuous changes. Version 1, is stable and has already been deployed. You can check and test Version 1. I will make Version 2 deployable as soon as possible.
#### Hardhat and Contract Testing
- To run tests, point the terminal to the backend directory.
- After installing all the required dependencies, use `npx hardhat test` to run the tests.
#### Frontend
- To run the frontend locally, point the terminal to the frontend directory.
- Install dependencies by running `npm install`.
- Run locally using `npm start`.

---

## About The Project
✨ Aurum is an over-collateralized NFT Custodial Lending and Borrowing Protocol that allows users to borrow ETH using their NFT as collateral while enabling lenders to earn interest on their deposited ETH by participating in the protocol's lending pool. <br />
✨It offers easier access to liquidity, lower interest rates, and enhanced security compared to peer-to-peer lending platforms.

---
## Inspiration
The inspiration behind our NFT lending and borrowing platform emerged from the growing popularity and potential of non-fungible tokens (NFTs) in the digital asset space. <br /> <br />
As a team of passionate developers and financial enthusiasts, we recognized the immense value locked within NFTs and sought to harness their potential in the world of decentralized finance (DeFi).
The concept of collateralizing digital assets is not new, but the emergence of NFTs presented a unique opportunity to extend this practice to a previously untapped market. NFTs possess inherent value due to their uniqueness, scarcity, and the underlying digital art, collectibles, or virtual assets they represent. However, owners often faced challenges in unlocking liquidity from these illiquid assets. <br />
Driven by the desire to address this gap, we set out to create a **decentralized platform** that would empower NFT owners to leverage their assets to access the liquidity they need in a secure and trustless manner. 
***
## How it Works  
 <p align = "center">
  <img src="https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/raw/master/Flow%20Chart2.png" alt="Schema of the project" title="Schema" />
</p align = "center">


### Collateralization and Borrowing:
  Users can securely borrow ETH by using their NFT as collateral. The collateral value of the NFT is determined by the **Chainlink NFT Price Feed oracles**, and it uses **Chainlink ETH to USD Price Feed oracle** to get the ETH to USD price for the protocol, which provides real-time price valuation of NFTs. Additionally, the user's borrowing power is calculated based on the NFT value fetched by the oracles multiplied by the loan-to-value ratio of the asset.

### Loan Terms and Repayment:
After determining the price of NFT and their borrowing power, users can secure a loan at an interest rate specified by the protocol. Borrowers must repay the loan before the debt maturity date to avoid liquidation of their collateral. If a borrower fails to repay the loan in time, the debt position is liquidated, and the NFT is auctioned in the protocol's "NFTs Auction" section, with the value determined by the Chainlink Price Feed oracle.

### Lenders and Yield Generation:
  Aurum allows lenders to participate in the protocol by lending ETH to the pool. Lenders earn interest on their participation initially set by the protocol's governance. The APY may vary based on the utilization of the pool, which refers to the `(total borrow / total supply)` in the pool. Lenders can have passive income while contributing to the liquidity of the protocol.

### Advantages over Peer-to-Peer Lending:
  Aurum offers several advantages compared to traditional peer-to-peer lending and borrowing protocols:

  * **Easy and Fast Liquidity Access:** Users can access liquidity more easily and quickly as there is no need to find specific lenders or borrowers. The protocol acts as an intermediary, matching borrowers with available liquidity.

  * **Lower Interest Rates and Fees:** Borrowers can benefit from lower interest rates and fees due to increased competition and efficiency within the protocol. The decentralized nature of the protocol eliminates the need for intermediaries, reducing costs for borrowers.

  * **Reduced Risk of Default and Fraud:** Aurum employs algorithms and incentives to value and verify NFTs, mitigating the risk of default and fraud. The protocol ensures that NFTs used as collateral are accurately valued and authentic, providing a secure borrowing environment.
  
---
## How we built it
  For implementing EVM code, we utilize Solidity, and for development and deployment purposes, we employ Hardhat. 
The frontend is built with Reactjs, a node.js framework used in building interactive user interfaces and web applications quickly and efficiently with vanilla javascript. We used **[Alchemy SDK](https://www.alchemy.com/sdk)** to retrieve NFT metadata and display NFT details into frontend integrated **[The Graph Protocol](https://thegraph.com/)**, which facilitated efficient indexing and display of liquidated NFTs, To integrate the blockchain with our frontend, we utilized the Ethers.js JavaScript library.

### Contract [AurumV2core](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/tree/dev/backend/contracts/V2) (In development)

![](./backend/contracts/V2/schema.svg)

#### Main Functions:

---

### Contract [AurumV1core](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/tree/dev/backend/contracts/V1) (Deployed)

![](./backend/contracts/V1/schema.svg)

#### Main Functions:

##### External

*[depositToPool:](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/c9d297c09ba9a5eb2edb9394a5def8506c13b5d4/Hardhat/contracts/AurumV1core.sol#L104)* Enables lenders to lend ETH to the pool and earn interest. <br/>
*[withdrawFromPool:](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/c9d297c09ba9a5eb2edb9394a5def8506c13b5d4/Hardhat/contracts/AurumV1core.sol#L130)* Enables lenders to withdraw their liquidity from the pool.<br/>
*[getNFTPrice:](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/NFTPrice.sol#L24C12-L24C23)* Retrieves the price of NFTs from the Chainlink NFT Price Feed Oracle.<br/>
*[borrow:](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/c9d297c09ba9a5eb2edb9394a5def8506c13b5d4/Hardhat/contracts/AurumV1core.sol#L155)* Deposits an NFT as collateral in the protocol and receives a corresponding debt.<br/>
*[repay:](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/c9d297c09ba9a5eb2edb9394a5def8506c13b5d4/Hardhat/contracts/AurumV1core.sol#L206)* Enables the borrower to repay the loan with interest and retrieve their NFT.<br/>


##### Governance

*[setBorrowInterestRate:](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/c9d297c09ba9a5eb2edb9394a5def8506c13b5d4/Hardhat/contracts/AurumV1core.sol#L248)* This function is used to set the borrow interest rate based on the current pool conditions.<br/>
*[setLoanToCollateral:](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/c9d297c09ba9a5eb2edb9394a5def8506c13b5d4/Hardhat/contracts/AurumV1core.sol#L261)* This function is used to establish the loan-to-collateral ratio, which helps mitigate the risks in case of default.

---

## Challenges we ran into
  Apart from the smart contract's complexity, the subgraph's creation posed a significant challenge. 
  Initially, we encountered difficulty as the subgraph could not index the emitted events. However, after 
  multiple iterations of deployment and persistent effort, we successfully resolved the issue and made it 
  work effectively.

---

## Accomplishments that we're proud of

We are proud to have developed a complete end-to-end solution for the lending and borrowing needs of NFT holders. Our dedicated efforts during the Chainlink Hackathon allowed us to achieve our goals successfully.

Additionally, we take pride in our successful implementation of the subgraph of the AurumV1core and integration of the [Chainlink NFT ](https://docs.chain.link/data-feeds/nft-floor-price) and [Chainlink ETH to USD](https://docs.chain.link/data-feeds/price-feeds/addresses) Price Feed Oracles; despite the challenges, we were able to implement all the things before the deadline.

---

## What we learned

This project was a valuable learning experience, allowing us to explore and work with various advanced technologies, such as utilizing Alchemy-SDK and the Graph Protocol and extensive integration of frontend (Reactjs) and blockchain using the ethers.js library.

<br/>

---

## Links
- Check out the V1 contract on Etherscan: [Etherscan](https://sepolia.etherscan.io/address/0xff0af63633f2feeb37a9e6bd46013a6333b20460)
- Devpost link for Chainlink Hackathon: [Devpost](https://devpost.com/software/aurum-protocol)
- Figma File's: [Figma](https://www.figma.com/file/glPqL1ZHLqNwPauBKnm7Kw/Untitled?type=design&node-id=0-1&t=VFufaBNNwZgKHQ5y-0)
- Subgraphs' Link: [Subgraph](https://thegraph.com/studio/subgraph/aurumv1core_/)
- Video demo: [Youtube](https://www.youtube.com/watch?v=WdUak_VzrJw)

