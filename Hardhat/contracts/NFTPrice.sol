// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTPrice {

/*************************************** [Chainlinks PriceFeed TokenContracts] ***************************************/
    address constant AZUKI_PRICEFEED_CONTRACT_ADDRESS = 0x9F6d70CDf08d893f0063742b51d3E9D1e18b7f74;
    address constant BAYC_PRICEFEED_CONTRACT_ADDRESS = 0xB677bfBc9B09a3469695f40477d05bc9BcB15F50;
    address constant CLONEX_PRICEFEED_CONTRACT_ADDRESS = 0xE42f272EdF974e9c70a6d38dCb47CAB2A28CED3F;
    address constant COOLSCATS_PRICEFEED_CONTRACT_ADDRESS = 0x13F38938A18ff26394c5ac8df94E349A97AaAb4e;
    address constant CRYPTOPUNKS_PRICEFEED_CONTRACT_ADDRESS = 0x5c13b249846540F81c093Bc342b5d963a7518145;
    address constant CRYPTOADZ_PRICEFEED_CONTRACT_ADDRESS = 0x870bc8BfEe8A7Bbd63Dc1ef09F2fF37DeBCfEF35;
    address constant DOODLES_PRICEFEED_CONTRACT_ADDRESS = 0xEDA76D1C345AcA04c6910f5824EC337C8a8F36d2;
    address constant MAYC_PRICEFEED_CONTRACT_ADDRESS = 0xCbDcc8788019226d09FcCEb4C727C48A062D8124;
    address constant VEEFRIENDS_PRICEFEED_CONTRACT_ADDRESS = 0x4b531A318B0e44B549F3b2f824721b3D0d51930A;
    address constant WORLD_OF_WOMAN_PRICEFEED_CONTRACT_ADDRESS = 0x2748A42aBd328835DFDA748bdD1D77Ce3c3312EE;

/*************************************** [Public Function] ***************************************/

  function getNFTPrice(
    address _tokenContract, 
    uint256 tokenId
    ) public view returns (uint256) {
        
    ERC721 nftContract = ERC721(_tokenContract);
    string memory _symbol = nftContract.symbol();
    address owner = nftContract.ownerOf(tokenId);

    // Azuki
    if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("AZUKI"))) {
      require(
        owner != address(0),
        "Azuki NFT doesn't exists"
      );
      return _getPrice(address(nftContract));
    } 
    // BAYC
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("BAYC"))) {
      require(
        owner != address(0), 
        "BAYC NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } 
    // CloneX    
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("CloneX"))) {
      require(
        owner != address(0), 
        "CloneX NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } 
    // CoolCats    
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("COOL"))) {
      require(
        owner != address(0), 
        "CoolCats NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } 
    // CryptoPunks    
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode(unicode"Ͼ"))) {
      require(
        owner != address(0), 
        "CryptoPunks NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    }
    // Cryptoadz 
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("TOADZ"))) {
      require(
        owner != address(0), 
        "Cryptoadz NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    }
    // Doodles
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("DOODLE"))) {
      require(
        owner != address(0), 
        "Doodles NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    }
    // MAYC 
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("MAYC"))) {
      require(
        owner != address(0), 
        "MAYC NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    }
    // World of Women 
    else if (keccak256(abi.encode(_symbol)) == keccak256(abi.encode("WOW"))) {
      require(
        owner != address(0), 
        "World of Women NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else {
      // revert(
      //   "Unsupported token contract"
      //   );
      // returning dummy values for testing purpose
      return 1e15;
    }
  }

/*************************************** [Internal Function] ***************************************/

  function _getPrice(
    address _priceFeed
    ) internal view returns (uint256) {
    AggregatorV3Interface priceFeed = AggregatorV3Interface(_priceFeed);
    (,int256 price,,,) = priceFeed.latestRoundData();
    return uint256(price);
  }
}
