// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

error ApprovalFailed(string message);
error TransferFailed(string message);

contract NFTEscrow is ERC721Holder {
    // borrower to token address to token balance in pool  
    mapping(address => mapping(address => uint256)) public userColletralBalance;

/*************************************** [Internal Functions] ***************************************/

    /**
     * @dev Deposits ERC721 collateral to escrow (this contract).
     * @notice Borrower deposits NFT collateral to this contract.
     * @param borrower_ The address of the borrower.
     * @param tokenContract_ The address of the ERC721 token contract.
     * @param tokenId_ The ID of the ERC721 token.
     */
    function depositERC721Collateral(
        address borrower_, 
        address tokenContract_, 
        uint256 tokenId_
        ) internal {
        IERC721 token = IERC721(tokenContract_);
        require(
            token.ownerOf(tokenId_) == borrower_, 
            "BORROWER_IS_NOT_OWNER_OF_NFT"
            );
        require(
            token.balanceOf(borrower_) > 0, 
            "BORROWER_DO_NOT_HAVE_ANY_NFT"
            );
        require(
            userColletralBalance[borrower_][tokenContract_] <= token.balanceOf(borrower_), 
            "BORROWER_HAS_NO_MORE_collateral_SLOTS"
            );

        (bool isApproved, ) = tokenContract_.call(
            abi.encodeWithSelector(
                token.approve.selector,
                address(this),
                tokenId_
            )
        );
        if (isApproved) {
            (bool isTransferred, ) = tokenContract_.call(
                abi.encodeWithSelector(
                    token.transferFrom.selector,
                    borrower_,
                    address(this),
                    tokenId_
                )
            );
            if (isTransferred) {
                userColletralBalance[borrower_][tokenContract_] += 1;
            }
            else {
                revert TransferFailed("TRANSFER_FAILED");
            }
        }
        else {
            revert ApprovalFailed("APPROVAL_FAILED");
        }
    }

    /**
     * @dev Withdraws ERC721 collateral to escrow (this contract).
     * @notice Borrower withdraws NFT collateral to this contract.
     * @param borrower_ The address of the borrower.
     * @param tokenContract_ The address of the ERC721 token contract.
     * @param tokenId_ The ID of the ERC721 token.
     */
    function withdrawERC721Collateral(
        address borrower_, 
        address tokenContract_, 
        uint256 tokenId_
        ) internal {
            IERC721 token = IERC721(tokenContract_);
            require(
                msg.sender == borrower_,
                "ONLY_BORROWER_CAN_WITHDRAW_NFT"
            );
            require(
                token.ownerOf(tokenId_) == address(this),
                "NFT_NOT_USED_AS_collateral"
            );
            require(
                userColletralBalance[borrower_][tokenContract_] > 0,
                "BORROWER_HAS_NO_collateral_FOR_THIS_TOKENCONTRACT"
            );

            (bool isTransferred, ) = tokenContract_.call(
                abi.encodeWithSelector(
                    token.transferFrom.selector,
                    borrower_,
                    address(this),
                    tokenId_
                )
            );
            if (isTransferred) {
                userColletralBalance[borrower_][tokenContract_] -= 1;
            }
            else {
                revert TransferFailed("TRANSFER_FAILED");
            }
        }
}
