<p align = "center"> 
  <img src="./svg.svg" height="70" width="80" style="background-color: black; display: inline-block;">
</p align = "center">

# Aurum Protocol
✨ Aurum is an over-collateralized NFT Custodial Lending and Borrowing Protocol that allows users to borrow ETH by using their NFTs as collateral, while also enabling lenders to earn interest on their ETH by participating in the protocol's lending pool. <br />
✨It offers easier access to liquidity, lower interest rates, and enhanced security compared to peer-to-peer lending platforms.

---
## Inspiration
The inspiration behind our NFT lending and borrowing platform emerged from the growing popularity and potential of non-fungible tokens (NFTs) in the digital asset space. <br /> <br />
As a team of passionate developers and financial enthusiasts, we recognized the immense value locked within NFTs and sought to harness their potential in the world of decentralized finance (DeFi).
The concept of collateralizing digital assets is not new, but the emergence of NFTs presented a unique opportunity to extend this practice to a previously untapped market. NFTs possess inherent value due to their uniqueness, scarcity, and the underlying digital art, collectibles, or virtual assets they represent. However, owners often faced challenges in unlocking liquidity from these illiquid assets. <br />
Driven by the desire to address this gap, we set out to create a **decentralized platform** that would empower NFT owners to leverage their assets to access the liquidity they need in a secure and trust less manner. 
***
## How it Works  
 <p align = "center">
  <img src="./Flow%20Chart2.png" alt="Schema of the project" title="Schema" />
</p align = "center">


### Collateralization and Borrowing:
  Users can securely borrow ETH by using their NFTs as collateral. The collateral value of the NFT is determined by the **Chainlink NFT Price Feed oracles**, which provide real-time valuations of NFTs. Additionally, the user's borrowing power is calculated based on the NFT's value fetched by the oracles multiplied by the loan-to-value ratio defined by the protocol's governance.

### Loan Terms and Repayment:
  Once the price of NFTs and the borrowing power are determined, users can obtain a loan for a specific interest rate, determined by the Annual Percentage Rate (APR) set by the protocol. Borrowers must repay the loan before the debt maturity time to avoid liquidation of their collateral. If a borrower fails to repay the loan in time, the debt position is liquidated, and the NFT is auctioned in the protocol's "NFT Auction" section, with the value determined by the Chainlink Price Feed oracle.

### Lenders and Yield Generation:
  Aurum allows lenders to participate in the protocol by lending ETH to the pool. Lenders earn interest on their participation through an Annual Percentage Yield (APY) initially set by the protocol's governance. The APY may vary based on the utilization of the pool, which refers to the `(total borrowe / total supply)` in the pool. Lenders can have passive income while contributing to the liquidity of the protocol.

### Advantages over Peer-to-Peer Lending:
  Aurum offers several advantages compared to traditional peer-to-peer lending and borrowing protocols:

  * **Easy and Fast Liquidity Access:** Users can access liquidity more easily and quickly as there is no need to find specific lenders or borrowers. The protocol acts as an intermediary, matching borrowers with available liquidity.

  * **Lower Interest Rates and Fees:** Borrowers can benefit from lower interest rates and fees due to increased competition and efficiency within the protocol. The decentralized nature of the protocol eliminates the need for intermediaries, reducing costs for borrowers.

  * **Reduced Risk of Default and Fraud:** Aurum employs algorithms and incentives to value and verify NFTs, mitigating the risk of default and fraud. The protocol ensures that NFTs used as collateral are accurately valued and authentic, providing a secure borrowing environment.
  

## How we built it

we built the protocol using React for frontend 
Hardhat for development and deloyment of Smart contract  
Alchemy SDK to fetch NFT data
For lending Chainlink NFT and Eth to USD Price Feed oracles to get the Colletral value and ensure the Borrowing power of the borrower.

### Contract [AurumV1core](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/tree/master/Hardhat/contracts)

![Alt text](./Hardhat/graph.svg)


  #### Main Functions:
  ##### External
  [`depositToPool:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/AurumV1core.sol#L107) Enables lenders to lend ETH to the pool and earn interest. <br/>
  [`withdrawFromPool:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/AurumV1core.sol#L133) Enables lenders to withdraw their liquidity from the pool.<br/>
  [`getNFTPrice:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/NFTPrice.sol#LL24C12-L24C23) Retrieves the price of NFTs from the Chainlink NFT Price Feed Oracle.<br/>
  [`borrow:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/AurumV1core.sol#LL159C6-L159C6) Deposits an NFT as collateral in the protocol and receives a corresponding debt.<br/>
  [`repay:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/AurumV1core.sol#L210) Enables the borrower to repay the loan with interest and retrieve their NFT.<br/>
  [`withdrawLiquidatedNFT:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/AurumV1core.sol#L278) Facilitates the sale of liquidated NFTs.

  ##### Governance 
  [`setBorrowInterestRate:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/AurumV1core.sol#L252) This function is used to set the borrow interest rate based on the current pool conditions.
  [`setLoanToColletral:`](https://github.com/startup-dreamer/NFT-Lending-Borrowing-protocol/blob/dcd5b8f60aa3eb8c096a00eb0dfbf2ee7c993e08/Hardhat/contracts/AurumV1core.sol#L252) This function is used to establish the loan-to-collateral ratio, which helps mitigate the risks associated with fraud.


## Frontent:
  Built with with React used **Alchemy SDK** to retrieve NFT metadata and display NFT details in to frontend integrated **The Graph Protocol**, which facilitated efficient indexing and display of liquidated NFTs.

## Challenges we ran into

The Complexity to lend the NFTs for certain time in Smart contract.


## Accomplishments that we're proud of

to succefsfully complete the project despite lot of brain storming and small obstacles


## What we learned
learned to design whole protocol and use multiple APIs in coharance.

## What's next for Aurum Protocol
Incorporate the support of ERC 20 tokens and stable 
coins DAI USDC etc...

Making Protocol more robust and secure
<br/><br/>


Check out contract on Etherscan: [0xff0AF63633f2FEeB37a9E6bD46013A6333B20460](https://sepolia.etherscan.io/address/0xff0af63633f2feeb37a9e6bd46013a6333b20460)
