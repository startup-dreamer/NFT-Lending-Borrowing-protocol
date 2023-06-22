// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "./NFTPrice.sol";
import "./AurumAdmin.sol";
import "./NFTEscrow.sol";

error ValueTransferFailed(string message);
// error 

contract AurumV2core is AurumAdmin, NFTEscrow, NFTPrice {

/*************************************** [Events] ***************************************/

    event Borrow(
        address indexed borrower, 
        uint256 indexed loanId, 
        uint256 indexed amount, 
        uint256 interest, 
        uint256 time
        );
    event Repay(
        address indexed borrower, 
        uint256 indexed loanId, 
        uint256 indexed amount, 
        uint256 interest
        );
    event Deposition(
        uint256 indexed depoId,
        address indexed sender,
        uint256 indexed time,
        uint256 amount
    );
    event Withdrawal(
        uint256 indexed depoId, 
        address indexed lender, 
        uint256 indexed amount
        );

    function depositToPool() public {}
}