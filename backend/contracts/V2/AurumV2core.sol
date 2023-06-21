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

}