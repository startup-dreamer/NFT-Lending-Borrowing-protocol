<p align = "center"> 
  <img src="./svg.svg" height="70" width="80" style="background-color: black; display: inline-block;">
</p align = "center">

## Aurum Protocol
✨ Aurum is a decentralized leading liquidity protocol for NFTs owners that allows you to use your NFTs to get a crypto loan - safely, securely, and anonymously. <br />
✨NFT holders can borrow ETH by collateralizing their NFTs in exchange for loans provided by lenders.

---
## Inspiration
The inspiration behind our NFT lending and borrowing platform emerged from the growing popularity and potential of non-fungible tokens (NFTs) in the digital asset space. As a team of passionate developers and financial enthusiasts, we recognized the immense value locked within NFTs and sought to harness their potential in the world of decentralized finance (DeFi).
The concept of collateralizing digital assets is not new, but the emergence of NFTs presented a unique opportunity to extend this practice to a previously untapped market. NFTs possess inherent value due to their uniqueness, scarcity, and the underlying digital art, collectibles, or virtual assets they represent. However, owners often faced challenges in unlocking liquidity from these illiquid assets. <br />
Driven by the desire to address this gap, we set out to create a decentralized platform that would empower NFT owners to leverage their assets to access the liquidity they need in a secure and trust less manner. We aimed to bridge the worlds of NFTs and DeFi, enabling users to benefit from the value of their NFTs without the need to sell or compromise ownership.
***
## How it Works  
 <p align = "center">
  <img src="./schema.png" alt="Schema of the project" title="Schema" />
</p align = "center">
  ### Lending Function
  Lenders can lend their ETH to the protocol pool for certain time to get in order to get interst on their share of contribution in protocol to provide liquidity to the pool lending interest is defined is based on the [utilization]() ```(Total Borrow Amount / Total Supply Amount) of the protocol```
  
  ### Borrowe Function
  Borrowers can Borrow ETH from there NFTs as there colletral, The borrowers [NFT value]() is Fetch by the  Chainlink NFT Price feed oracle borrower can borrow money equals to or less than the borrowing power defined by Loan to Value ratio as the borrower borrows ETH for certain time with certain interest rate set by the governace of the Protocol if the amount is not paid in time the the debt position is liqudated and the NFT is auctioned in Protocol itself.
  
## How we built it

we built the protocol using React for frontend 
Hardhat for development and deloyment of Smart contract  
Alchemy SDK to fetch NFT data
For lending Chainlink NFT and Eth to USD Price Feed oracles to get the Colletral value and ensure the Borrowing power of the borrower.

![Alt text](./Hardhat/graph.svg)


## Challenges we ran into

The Complexity to lend the NFTs for certain time in Smart contract.



## Accomplishments that we're proud of

to succefsfully complete the project despite lot of brain storming and small obstacles


## What we learned
learned to design whole protocol and use multiple APIs in coharance.

## What's next for Aurum Protocol
Evolving the satking reward from Utlization to time based Utilization.
Include the support of ERC 20 tokens and stable coins DAI USDC etc...



[//]: # (import ./Hardhat/AurumV1-Description-Report.md)


// text sepolia 0xE15B2B61253EF9a1B2C83423787f2409C048Df80
