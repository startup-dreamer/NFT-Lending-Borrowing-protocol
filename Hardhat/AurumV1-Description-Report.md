//------------------------ **AurumV1 Description Report** --------------------------//

//------------------------------ Files Description Table ----------------------------//

|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| ./contracts/AurumV1core.sol | c480ebc177b63d529c31f3f217e179be4b4c60c7 |
| ./contracts/NFTPrice.sol | 3acf33be1ca018e11bef3e335d291dc4d98dfafb |

//----------------------------- Contracts Description Table ---------------------------//

|  Contract  |         Type        |       Bases      |                  |                 |
|:----------:|:-------------------:|:----------------:|:----------------:|:---------------:|
|     └      |  **Function Name**  |  **Visibility**  |  **Mutability**  |  **Modifiers**  |
|            |                     |                  |                  |                 |
| **AurumV1core** | Implementation | NFTPrice         |                  |                 |
| └ | Constructor | Public ❗️ |  💵 |NO❗️ |
| └ | Fallback | External ❗️ |  💵 |NO❗️ |
| └ | Receive Ether | External ❗️ |  💵 |NO❗️ |
| └ | depositToPool | External ❗️ |  💵 |NO❗️ |
| └ | withdrawFromPool | External ❗️ | 🛑  |NO❗️ |
| └ | borrow | External ❗️ |  💵 |NO❗️ |
| └ | repay | External ❗️ |  💵 |NO❗️ |
| └ | set_Borrow_InterestRate | External ❗️ | 🛑  |NO❗️ |
| └ | setLoanToCollateral | External ❗️ | 🛑  |NO❗️ |
| └ | getUtilization | External ❗️ |   |NO❗️ |
| └ | withdraw_liquidateNFT | External ❗️ |  💵 |NO❗️ |
| └ | getNftCollateralValue | Public ❗️ |   |NO❗️ |
| └ | depositERC721Collateral | Internal 🔒 | 🛑  | |
| └ | withdrawERC721Collateral | Internal 🔒 | 🛑  | |
|            |                     |                  |                  |                 |
| **NFTPrice** | Implementation |                  |                  |                 |
| └ | getNFTPrice | Public ❗️ |   |NO❗️ |
| └ | get_ETHtoUSD_Price | Public ❗️ |   |NO❗️ |
| └ | _getNFTPrice | Internal 🔒 |   | |

//---------------------------------- Legend -----------------------------------//

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    🛑    | Function can modify state |
|    💵    | Function is payable |
