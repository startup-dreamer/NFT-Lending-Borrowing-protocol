pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract NFTCollateral {
    using SafeMath for uint256;

    // Borrower's collateral balance
    mapping(address => mapping(address => uint256)) public collateralBalances;

    // ERC721 support
    function depositERC721Collateral(address borrower, address tokenContract, uint256 tokenId) external {
        IERC721 token = IERC721(tokenContract);
        require(msg.sender == borrower, "Only borrower can deposit collateral");
        require(token.balanceOf(borrower) > 0, "Borrower has no tokens");
        require(token.ownerOf(tokenId) == borrower, "Borrower is not the owner of the token");
        require(collateralBalances[borrower][tokenContract].add(1) <= token.balanceOf(borrower), "Borrower has no remaining collateral slots");
        token.setApprovalForAll(address(this),true);
        token.transferFrom(borrower, address(this), tokenId);
        collateralBalances[borrower][tokenContract] = collateralBalances[borrower][tokenContract].add(1);
    }

    function withdrawERC721Collateral(address borrower, address tokenContract, uint256 tokenId) external {
        IERC721 token = IERC721(tokenContract);
        require(msg.sender == borrower, "Only borrower can withdraw collateral");
        require(collateralBalances[borrower][tokenContract] > 0, "Borrower has no collateral to withdraw");
        require(token.ownerOf(tokenId) == address(this), "Token is not being used as collateral");
        token.approve(borrower,tokenId);
        token.transferFrom(address(this), borrower, tokenId);
        collateralBalances[borrower][tokenContract] = collateralBalances[borrower][tokenContract].sub(1);
    }

    // ERC1155 support
    // function depositERC1155Collateral(address borrower, address tokenContract, uint256 tokenId, uint256 amount, bytes calldata data) external {
    //     IERC1155 token = IERC1155(tokenContract);
    //     require(msg.sender == borrower, "Only borrower can deposit collateral");
    //     require(token.balanceOf(borrower, tokenId) >= amount, "Borrower has insufficient tokens");
    //     require(collateralBalances[borrower][tokenContract].add(amount) <= token.balanceOf(borrower, tokenId), "Borrower has no remaining collateral slots");

    //     token.safeTransferFrom(borrower, address(this), tokenId, amount, data);
    //     collateralBalances[borrower][tokenContract] = collateralBalances[borrower][tokenContract].add(amount);
    // }

    // function withdrawERC1155Collateral(address borrower, address tokenContract, uint256 tokenId, uint256 amount, bytes calldata data) external {
    //     IERC1155 token = IERC1155(tokenContract);
    //     require(msg.sender == borrower, "Only borrower can withdraw collateral");
    //     require(collateralBalances[borrower][tokenContract] >= amount, "Borrower has no collateral to withdraw");
    //     require(token.balanceOf(address(this), tokenId) >= amount, "Insufficient collateral in contract");

    //     token.safeTransferFrom(address(this), borrower, tokenId, amount, data);
    //     collateralBalances[borrower][tokenContract] = collateralBalances[borrower][tokenContract].sub(1);

    // }

    function getETHBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    function transferETH(address to, uint256 amount) external {
        require(address(this).balance >= amount, "Not enough ETH balance");
        payable(to).call{value : amount}("");
    }
    
    function owner() internal view returns (address) {
        return address(this);
    }
}