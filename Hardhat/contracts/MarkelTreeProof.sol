// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "./contracts/NFTPrice.sol";


contract AurumV1core is NFTPrice {
    // maximum amount user can deposit
    uint256 constant MAX_AMOUNT_LIMIT = 1e16;
    // borrowing interest rate
    uint256 public Borrow_interestRate;
    // lending interest rate based on utilization
    uint256 public Lending_interestRate;
    // max loan to value ratio
    uint256 public maxLtv;
    // Owner(deployer) of the contract
    address public owner;
    // Total amount in contract
    uint256 public totalSupply;
    // Total Borrowed amount by users
    uint256 public totalBorrowed;
    // Total deposited NFTs
    uint256 public totalDepositedNFTs;

/*************************************** [Data Structures] ***************************************/

    // Dpositioon struct
    struct deposit {
            uint256 amount;
            uint256 time;
            uint256 interest;
    }
    mapping(address => deposit[]) public deposits;
    mapping(address => uint256) public individualDepositNum;

    // Loan struct 
    struct Loan {
        address borrower;
        address tokenContract;
        uint256 tokenId;
        uint256 amount;
        uint256 collateralValue;
        uint256 interest;
        uint256 time;
        bool active;
    }
    mapping(address => Loan[]) public loans;
    mapping(address => mapping(address => uint256)) public tokenColletralNum;
    mapping(address => uint256) public individualColletralNum;

/*************************************** [Events] ***************************************/

    event Borrow(
        address indexed borrower, 
        uint256 indexed _loanId, 
        uint256 indexed amount, 
        uint256 interest, 
        uint256 time
        );
    event Repay(
        address indexed borrower, 
        uint256 indexed _loanId, 
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

/*************************************** [Constructor] ***************************************/

    constructor(
        uint256 _Borrow_interestRate, 
        uint256 _Lending_interestRate, 
        uint256 _maxLtv
        ) payable  {
        Borrow_interestRate = _Borrow_interestRate;
        Lending_interestRate = _Lending_interestRate;
        maxLtv = _maxLtv;
        owner = msg.sender;
    }

    fallback() external payable {
        totalSupply += msg.value;
    }
    
    receive() external payable {
        totalSupply += msg.value;
    }

/*************************************** [External Functions] ***************************************/
    function depositToPool(
        uint256 _time
        ) external payable {
        require(
            msg.value > 0, 
            "Amount must be greater than 0"
            );
        require(
            msg.value <= MAX_AMOUNT_LIMIT, 
            "Can't deposit more than 0.01 ETH"
            );

        uint256 interest = (msg.value * Lending_interestRate) / 10000;
        deposit memory dep = deposit({
            amount: msg.value,
            time: _time,
            interest: interest
        });
        deposits[msg.sender].push(dep);
        individualDepositNum[msg.sender] += 1;
        (bool success, ) = address(this).call{value: msg.value}("");
        require(success, "Reverted finds not transfered");
        emit Deposition(individualDepositNum[msg.sender] - 1, msg.sender, _time, msg.value);
    }


    function withdrawFromPool(
        uint256 _depId
        ) external {
        deposit storage dep = deposits[msg.sender][_depId];
        require(
            dep.amount > 0, 
            "Deposit not found or already withdrawn"
            );

        uint256 amountToReturn = dep.interest + dep.amount;
        if (block.timestamp < dep.time) {
            amountToReturn = dep.amount;
        }
        dep.amount = 0;
        totalSupply -= amountToReturn;
        (bool success, ) = (msg.sender).call{value : amountToReturn}("");
        if (success) {
            emit Withdrawal(_depId, msg.sender, amountToReturn);
            delete deposits[msg.sender][_depId];
        } else {
            dep.amount = amountToReturn;
            revert("Internal error: funds not transferred");
        }
    }

    function borrow(
        uint256 _amount, 
        address _tokenContract, 
        uint256 _tokenId, 
        uint256 _time
        ) external payable {
        require(
            _amount > 0, 
            "Amount must be greater than 0"
            );

        uint256 collateralValue = getNftCollateralValue(_tokenContract, _tokenId);
        uint256 borrowingPower = (collateralValue * maxLtv) / 10000;

        require(
            _amount <= borrowingPower, 
            "Amount exceeds borrowing power"
            );

        if (IERC165(_tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            depositERC721Collateral(msg.sender, _tokenContract, _tokenId);
        }
        else {
            revert(
                "Unsupported token type"
                );
        }
        uint256 interest = (_amount * Borrow_interestRate) / 10000;
        Loan memory loan = Loan({
            borrower: msg.sender,
            tokenContract: _tokenContract,
            tokenId: _tokenId,
            amount: _amount,
            collateralValue: 1000,
            interest: interest,
            time: _time,
            active: true
        });
        loans[msg.sender].push(loan);
        totalBorrowed += _amount;
        totalDepositedNFTs += 1;

        (bool success, ) = (payable(msg.sender)).call{value : _amount}("");
        require(
            success, 
            "Internal error funds not transferred"
            );

        emit Borrow(msg.sender, loans[msg.sender].length - 1, _amount, interest, _time);
    }

    function repay(
        uint256 _loanId
        ) external payable {
        Loan storage loan = loans[msg.sender][_loanId];
        require(
            loan.time > block.timestamp, 
            "NFT liquidated debt not paid in time"
            );
        require(
            msg.sender == loan.borrower, 
            "Only borrower can repay the loan"
            );
        require(
            loan.active, 
            "Loan is already closed"
            );

        uint256 amount = loan.amount;
        uint256 interest = loan.interest;
        uint256 amountToRepay = amount + interest;
        if (IERC165(loan.tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            withdrawERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        }
        else {
            revert("Unsupported token type");
        }
        loan.active = false;
        totalBorrowed -= amount;
        totalDepositedNFTs -= 1;

        require(
            amountToRepay == msg.value,"reverted"
        );
        (bool success, ) = (address(this)).call{value: msg.value}("");
        require(
            success, 
            "Internal error funds not transferred"
        );
        delete loans[msg.sender][_loanId];
        emit Repay(msg.sender, _loanId, loan.amount, loan.interest);
    }

    function set_Borrow_InterestRate(
        uint256 _Borrow_interestRate
        ) external {
        require(
            msg.sender == owner
            );
        Borrow_interestRate = _Borrow_interestRate;
        // Utilization of pool
        Lending_interestRate = _Borrow_interestRate * (totalBorrowed / totalSupply);
    }

    

    function setLoanToCollateral(
        uint256 _maxLtv
        ) external {
        require(
            msg.sender == owner
            );
        maxLtv = _maxLtv;
    }

    function getUtilization() external view returns(uint256) {
        return (totalBorrowed == 0 || totalSupply == 0) ? 0 : (totalBorrowed / totalSupply) * 100;
    }

    function withdraw_liquidateNFT(address borrowerAddress, uint256 _loanId) external payable {
        Loan storage loan = loans[borrowerAddress][_loanId];
        require(loan.time < block.timestamp, "not liquidated");
        require(loan.active == true, "Debt payed");
        require(loan.collateralValue == msg.value, "Error payment not done");
        loan.active = false;

        (bool success, ) = (payable(msg.sender)).call{value : msg.value}("");
        require(
            success, 
            "Internal error funds not transferred"
            );
        IERC721Enumerable token = IERC721Enumerable(loan.tokenContract);
        token.transferFrom(address(this), msg.sender, loan.tokenId);
    }

/*************************************** [Public Functions] ***************************************/
    function getNftCollateralValue(
        address _tokenContract, 
        uint256 tokenId
        ) public view returns (uint256) {
        uint256 price = getNFTPrice(_tokenContract, tokenId);
        if (IERC165(_tokenContract).supportsInterface(type(IERC721Metadata).interfaceId)) {
            return price;
        }
        else {
            revert("Unsupported token type");
        }
    }

/*************************************** [Internal Functions] ***************************************/
        function depositERC721Collateral(
        address borrower, 
        address _tokenContract, 
        uint256 tokenId
        ) internal {
        IERC721Enumerable token = IERC721Enumerable(_tokenContract);
        require(
            msg.sender == borrower, 
            "Only borrower can deposit collateral"
            );
        require(
            token.balanceOf(borrower) > 0, 
            "Borrower has no tokens"
            );
        require(
            token.ownerOf(tokenId) == borrower, 
            "Borrower is not the owner of the token"
            );
        require(
            tokenColletralNum[borrower][_tokenContract] <= token.balanceOf(borrower), 
            "Borrower has no remaining collateral slots"
            );

        token.transferFrom(borrower, address(this), tokenId);
        tokenColletralNum[borrower][_tokenContract] += 1;
        individualColletralNum[borrower] += 1;
    }

    function withdrawERC721Collateral(
        address borrower, 
        address _tokenContract, 
        uint256 tokenId
        ) internal {
        IERC721Enumerable token = IERC721Enumerable(_tokenContract);
        require(
            msg.sender == borrower, 
            "Only borrower can withdraw collateral"
            );
        require(
            tokenColletralNum[borrower][_tokenContract] > 0, 
            "Borrower has no collateral to withdraw"
            );
        require(
            token.ownerOf(tokenId) == address(this), 
            "Token is not being used as collateral"
            );

        token.transferFrom(address(this), borrower, tokenId);
        tokenColletralNum[borrower][_tokenContract] -= 1;
    }
    
}

// sepolia address 0x2c184D8aB9f4E9665612AFE5FB57B319dfa757F6

// refined on 0xa8D6282CBB8076aA7F3dff53b45B949973c80620

// 7-6-2023 3:04 PM 0xff0AF63633f2FEeB37a9E6bD46013A6333B20460