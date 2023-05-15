pragma solidity ^0.8.0;


import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract Lending { 
        uint256 MAX_AMOUNT_LIMIT = 1e16;
        using SafeMath for uint256;

        address immutable borrow_pool;
        // In base poins
        uint256 public interestRate;
        struct deposit {
            uint256 amount;
            uint256 time;
            uint256 interest;
    }

    mapping(address => deposit[]) public deposits;

    constructor(uint256 _interestRate, address _borrow_pool) {
        interestRate = _interestRate;
        borrow_pool = _borrow_pool;
    }

    function deposit_in_pool(uint256 _amount, uint256 _time) external payable {
        require(_amount > 0, "Amount must be greater than 0");
        require(_amount > MAX_AMOUNT_LIMIT, "can't deposite more than 0.01 ETH");


        deposit memory dep = deposit({
            amount: _amount,
            time: _time,
            interest: _amount.mul(interestRate).div(10000)
        });

        deposits[msg.sender].push(dep);

        (bool success, ) = (borrow_pool).call{value : _amount}("");
        require(success, "Internal error funds not transferred");
    }

    function withdraw_from_pool(uint256 _depId) external {
        deposit storage dep = deposits[msg.sender][_depId];
        require(block.timestamp >= dep.time, "Deposit not matured yet");
        require(dep.amount > 0, "Deposit not found or already withdrawn");

        uint256 amountToReturn = dep.interest + dep.amount;
        if (block.timestamp < dep.time) {
            amountToReturn = dep.amount;
        }

        dep.amount = 0;

        (bool success, ) = (msg.sender).call{value : amountToReturn}("");
        require(success, "Internal error funds not transferred");
    }

    function setInterestRate(uint256 _interestRate) external {
        interestRate = _interestRate;
    }

    fallback() external payable {

    }

    receive() external payable {

    }
}