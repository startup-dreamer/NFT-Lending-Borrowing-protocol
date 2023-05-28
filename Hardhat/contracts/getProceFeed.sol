// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTPrice {

    address constant AZUKI_CONTRACT = 0xed5af388653567af2f388e6224dc7c4b3241c544;
    address constant BAYC_CONTRACT_ADDRESS = 0x62681C8021a1f1C1C8DDba5992beB192bbBdF9BB;
    address constant CLONEX_CONTRACT_ADDRESS = 0x627e9e04Eb7385BE5Ef8D394dBf589B11992FEe9;
    address constant COOLSCATS_CONTRACT_ADDRESS = 0x1A92f7381B9F03921564a437210bB9396471050C;
    address constant CRYPTOPUNKS_CONTRACT_ADDRESS = 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB;
    address constant CRYPTOADZ_CONTRACT_ADDRESS = 
    address constant DOODLES_CONTRACT_ADDRESS = 
    address constant MAYC_CONTRACT_ADDRESS = 
    address constant VEEFRIENDS_CONTRACT_ADDRESS = 
    address constant WORLD_OF_WOMAN_CONTRACT_ADDRESS = 0xe785E82358879F061BC3dcAC6f0444462D4b5330;


  function getNFTPrice(
    address tokenContract, 
    uint256 tokenId
    ) public view returns (uint256) {
        
    if (tokenContract == 0x9F6d70CDf08d893f0063742b51d3E9D1e18b7f74) {
      // Azuki
      ERC721 nftContract = ERC721(0x9F6d70CDf08d893f0063742b51d3E9D1e18b7f74);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "Azuki NFT doesn't exists"
      );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0xB677bfBc9B09a3469695f40477d05bc9BcB15F50) {
      // BAYC
      ERC721 nftContract = ERC721(0xB677bfBc9B09a3469695f40477d05bc9BcB15F50);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "BAYC NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0xE42f272EdF974e9c70a6d38dCb47CAB2A28CED3F) {
      // CloneX
      ERC721 nftContract = ERC721(0xE42f272EdF974e9c70a6d38dCb47CAB2A28CED3F);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "CloneX NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0x13F38938A18ff26394c5ac8df94E349A97AaAb4e) {
      // CoolCats
      ERC721 nftContract = ERC721(0x13F38938A18ff26394c5ac8df94E349A97AaAb4e);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "CoolCats NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0x5c13b249846540F81c093Bc342b5d963a7518145) {
      // CryptoPunks
      ERC721 nftContract = ERC721(0x5c13b249846540F81c093Bc342b5d963a7518145);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "CryptoPunks NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0x870bc8BfEe8A7Bbd63Dc1ef09F2fF37DeBCfEF35) {
      // Cryptoadz
      ERC721 nftContract = ERC721(0x870bc8BfEe8A7Bbd63Dc1ef09F2fF37DeBCfEF35);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "Cryptoadz NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0xEDA76D1C345AcA04c6910f5824EC337C8a8F36d2) {
      // Doodles
      ERC721 nftContract = ERC721(0xEDA76D1C345AcA04c6910f5824EC337C8a8F36d2);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "Doodles NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0xCbDcc8788019226d09FcCEb4C727C48A062D8124) {
      // MAYC
      ERC721 nftContract = ERC721(0xCbDcc8788019226d09FcCEb4C727C48A062D8124);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "MAYC NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0x4b531A318B0e44B549F3b2f824721b3D0d51930A) {
      // VeeFriends
      ERC721 nftContract = ERC721(0x4b531A318B0e44B549F3b2f824721b3D0d51930A);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "VeeFriends NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else if (tokenContract == 0x2748A42aBd328835DFDA748bdD1D77Ce3c3312EE) {
      // World of Women
      ERC721 nftContract = ERC721(0x2748A42aBd328835DFDA748bdD1D77Ce3c3312EE);
      require(
        nftContract.ownerOf(tokenId) != address(0), 
        "World of Women NFT doesn't exists"
        );
      return _getPrice(address(nftContract));
    } else {
      revert(
        "Unsupported token contract"
        );
    }
  }

  function _getPrice(
    address _priceFeed
    ) internal view returns (uint256) {
    AggregatorV3Interface priceFeed = AggregatorV3Interface(_priceFeed);
    (,int256 price,,,) = priceFeed.latestRoundData();
    return uint256(price);
  }
}
