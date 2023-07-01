# Chainlink Smart Contracts

## Installation

```sh
# via pnpm
$ pnpm add @chainlink/contracts
# via npm
$ npm install @chainlink/contracts --save
```

### Directory Structure

```sh
@chainlink/contracts
├── src # Solidity contracts
│   └── v0.8
└── abi # ABI json output
    └── v0.8
```

### Usage

The solidity smart contract can be imported via the `src` directory of `chainlink/contracts`:

```solidity
import 'chainlink/contracts/src/v0.8/AggregatorV3Interface.sol';

```

## Local Development

Note: Contracts in `dev/` directories are under active development and are likely unaudited. Please refrain from using these in production applications.

```bash
# Clone Chainlink repository
$ git clone https://github.com/smartcontractkit/chainlink.git
# Continuing via pnpm
$ cd contracts/
$ pnpm
$ pnpm test
```