├─ type: SourceUnit
└─ children
   ├─ 0
   │  ├─ type: PragmaDirective
   │  ├─ name: solidity
   │  └─ value: ^0.8.0
   ├─ 1
   │  ├─ type: ImportDirective
   │  ├─ path: @openzeppelin/contracts/token/ERC721/IERC721.sol
   │  ├─ pathLiteral
   │  │  ├─ type: StringLiteral
   │  │  ├─ value: @openzeppelin/contracts/token/ERC721/IERC721.sol
   │  │  ├─ parts
   │  │  │  └─ 0: @openzeppelin/contracts/token/ERC721/IERC721.sol
   │  │  └─ isUnicode
   │  │     └─ 0: false
   │  ├─ unitAlias
   │  ├─ unitAliasIdentifier
   │  ├─ symbolAliases
   │  └─ symbolAliasesIdentifiers
   ├─ 2
   │  ├─ type: ImportDirective
   │  ├─ path: @openzeppelin/contracts/utils/introspection/IERC165.sol
   │  ├─ pathLiteral
   │  │  ├─ type: StringLiteral
   │  │  ├─ value: @openzeppelin/contracts/utils/introspection/IERC165.sol
   │  │  ├─ parts
   │  │  │  └─ 0: @openzeppelin/contracts/utils/introspection/IERC165.sol
   │  │  └─ isUnicode
   │  │     └─ 0: false
   │  ├─ unitAlias
   │  ├─ unitAliasIdentifier
   │  ├─ symbolAliases
   │  └─ symbolAliasesIdentifiers
   ├─ 3
   │  ├─ type: ImportDirective
   │  ├─ path: @openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol
   │  ├─ pathLiteral
   │  │  ├─ type: StringLiteral
   │  │  ├─ value: @openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol
   │  │  ├─ parts
   │  │  │  └─ 0: @openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol
   │  │  └─ isUnicode
   │  │     └─ 0: false
   │  ├─ unitAlias
   │  ├─ unitAliasIdentifier
   │  ├─ symbolAliases
   │  └─ symbolAliasesIdentifiers
   ├─ 4
   │  ├─ type: ImportDirective
   │  ├─ path: @openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol
   │  ├─ pathLiteral
   │  │  ├─ type: StringLiteral
   │  │  ├─ value: @openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol
   │  │  ├─ parts
   │  │  │  └─ 0: @openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol
   │  │  └─ isUnicode
   │  │     └─ 0: false
   │  ├─ unitAlias
   │  ├─ unitAliasIdentifier
   │  ├─ symbolAliases
   │  └─ symbolAliasesIdentifiers
   ├─ 5
   │  ├─ type: ImportDirective
   │  ├─ path: @openzeppelin/contracts/utils/math/SafeMath.sol
   │  ├─ pathLiteral
   │  │  ├─ type: StringLiteral
   │  │  ├─ value: @openzeppelin/contracts/utils/math/SafeMath.sol
   │  │  ├─ parts
   │  │  │  └─ 0: @openzeppelin/contracts/utils/math/SafeMath.sol
   │  │  └─ isUnicode
   │  │     └─ 0: false
   │  ├─ unitAlias
   │  ├─ unitAliasIdentifier
   │  ├─ symbolAliases
   │  └─ symbolAliasesIdentifiers
   ├─ 6
   │  ├─ type: ImportDirective
   │  ├─ path: ./NFTPrice.sol
   │  ├─ pathLiteral
   │  │  ├─ type: StringLiteral
   │  │  ├─ value: ./NFTPrice.sol
   │  │  ├─ parts
   │  │  │  └─ 0: ./NFTPrice.sol
   │  │  └─ isUnicode
   │  │     └─ 0: false
   │  ├─ unitAlias
   │  ├─ unitAliasIdentifier
   │  ├─ symbolAliases
   │  └─ symbolAliasesIdentifiers
   └─ 7
      ├─ type: ContractDefinition
      ├─ name: AurumV1core
      ├─ baseContracts
      │  └─ 0
      │     ├─ type: InheritanceSpecifier
      │     ├─ baseName
      │     │  ├─ type: UserDefinedTypeName
      │     │  └─ namePath: NFTPrice
      │     └─ arguments
      ├─ subNodes
      │  ├─ 0
      │  │  ├─ type: UsingForDeclaration
      │  │  ├─ isGlobal: false
      │  │  ├─ typeName
      │  │  │  ├─ type: ElementaryTypeName
      │  │  │  ├─ name: uint256
      │  │  │  └─ stateMutability
      │  │  ├─ libraryName: SafeMath
      │  │  └─ functions
      │  ├─ 1
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: MAX_AMOUNT_LIMIT
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: MAX_AMOUNT_LIMIT
      │  │  │     ├─ expression
      │  │  │     │  ├─ type: NumberLiteral
      │  │  │     │  ├─ number: 1e16
      │  │  │     │  └─ subdenomination
      │  │  │     ├─ visibility: default
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: true
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  │     ├─ type: NumberLiteral
      │  │     ├─ number: 1e16
      │  │     └─ subdenomination
      │  ├─ 2
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: Borrow_interestRate
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: Borrow_interestRate
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 3
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: Lending_interestRate
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: Lending_interestRate
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 4
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: maxLtv
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: maxLtv
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 5
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: address
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: owner
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: owner
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 6
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: totalSupply
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: totalSupply
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 7
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: totalBorrowed
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: totalBorrowed
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 8
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: totalDepositedNFTs
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: totalDepositedNFTs
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 9
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: totalLiquidatedNFTs
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: totalLiquidatedNFTs
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 10
      │  │  ├─ type: StructDefinition
      │  │  ├─ name: deposit
      │  │  └─ members
      │  │     ├─ 0
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: uint256
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: amount
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: amount
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     ├─ 1
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: uint256
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: time
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: time
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     └─ 2
      │  │        ├─ type: VariableDeclaration
      │  │        ├─ typeName
      │  │        │  ├─ type: ElementaryTypeName
      │  │        │  ├─ name: uint256
      │  │        │  └─ stateMutability
      │  │        ├─ name: interest
      │  │        ├─ identifier
      │  │        │  ├─ type: Identifier
      │  │        │  └─ name: interest
      │  │        ├─ storageLocation
      │  │        ├─ isStateVar: false
      │  │        ├─ isIndexed: false
      │  │        └─ expression
      │  ├─ 11
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: Mapping
      │  │  │     │  ├─ keyType
      │  │  │     │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  ├─ name: address
      │  │  │     │  │  └─ stateMutability
      │  │  │     │  └─ valueType
      │  │  │     │     ├─ type: ArrayTypeName
      │  │  │     │     ├─ baseTypeName
      │  │  │     │     │  ├─ type: UserDefinedTypeName
      │  │  │     │     │  └─ namePath: deposit
      │  │  │     │     └─ length
      │  │  │     ├─ name: deposits
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: deposits
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 12
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: Mapping
      │  │  │     │  ├─ keyType
      │  │  │     │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  ├─ name: address
      │  │  │     │  │  └─ stateMutability
      │  │  │     │  └─ valueType
      │  │  │     │     ├─ type: ElementaryTypeName
      │  │  │     │     ├─ name: uint256
      │  │  │     │     └─ stateMutability
      │  │  │     ├─ name: individualDepositNum
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: individualDepositNum
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 13
      │  │  ├─ type: StructDefinition
      │  │  ├─ name: Loan
      │  │  └─ members
      │  │     ├─ 0
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: address
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: borrower
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: borrower
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     ├─ 1
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: address
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: tokenContract
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: tokenContract
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     ├─ 2
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: uint256
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: tokenId
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: tokenId
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     ├─ 3
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: uint256
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: amount
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: amount
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     ├─ 4
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: uint256
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: collateralValue
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: collateralValue
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     ├─ 5
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: uint256
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: interest
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: interest
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     ├─ 6
      │  │     │  ├─ type: VariableDeclaration
      │  │     │  ├─ typeName
      │  │     │  │  ├─ type: ElementaryTypeName
      │  │     │  │  ├─ name: uint256
      │  │     │  │  └─ stateMutability
      │  │     │  ├─ name: time
      │  │     │  ├─ identifier
      │  │     │  │  ├─ type: Identifier
      │  │     │  │  └─ name: time
      │  │     │  ├─ storageLocation
      │  │     │  ├─ isStateVar: false
      │  │     │  ├─ isIndexed: false
      │  │     │  └─ expression
      │  │     └─ 7
      │  │        ├─ type: VariableDeclaration
      │  │        ├─ typeName
      │  │        │  ├─ type: ElementaryTypeName
      │  │        │  ├─ name: bool
      │  │        │  └─ stateMutability
      │  │        ├─ name: active
      │  │        ├─ identifier
      │  │        │  ├─ type: Identifier
      │  │        │  └─ name: active
      │  │        ├─ storageLocation
      │  │        ├─ isStateVar: false
      │  │        ├─ isIndexed: false
      │  │        └─ expression
      │  ├─ 14
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: Mapping
      │  │  │     │  ├─ keyType
      │  │  │     │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  ├─ name: address
      │  │  │     │  │  └─ stateMutability
      │  │  │     │  └─ valueType
      │  │  │     │     ├─ type: ArrayTypeName
      │  │  │     │     ├─ baseTypeName
      │  │  │     │     │  ├─ type: UserDefinedTypeName
      │  │  │     │     │  └─ namePath: Loan
      │  │  │     │     └─ length
      │  │  │     ├─ name: loans
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: loans
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 15
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: Mapping
      │  │  │     │  ├─ keyType
      │  │  │     │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  ├─ name: address
      │  │  │     │  │  └─ stateMutability
      │  │  │     │  └─ valueType
      │  │  │     │     ├─ type: Mapping
      │  │  │     │     ├─ keyType
      │  │  │     │     │  ├─ type: ElementaryTypeName
      │  │  │     │     │  ├─ name: address
      │  │  │     │     │  └─ stateMutability
      │  │  │     │     └─ valueType
      │  │  │     │        ├─ type: ElementaryTypeName
      │  │  │     │        ├─ name: uint256
      │  │  │     │        └─ stateMutability
      │  │  │     ├─ name: tokenColletralNum
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: tokenColletralNum
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 16
      │  │  ├─ type: StateVariableDeclaration
      │  │  ├─ variables
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: Mapping
      │  │  │     │  ├─ keyType
      │  │  │     │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  ├─ name: address
      │  │  │     │  │  └─ stateMutability
      │  │  │     │  └─ valueType
      │  │  │     │     ├─ type: ElementaryTypeName
      │  │  │     │     ├─ name: uint256
      │  │  │     │     └─ stateMutability
      │  │  │     ├─ name: individualCOlletralNum
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: individualCOlletralNum
      │  │  │     ├─ expression
      │  │  │     ├─ visibility: public
      │  │  │     ├─ isStateVar: true
      │  │  │     ├─ isDeclaredConst: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ isImmutable: false
      │  │  │     ├─ override
      │  │  │     └─ storageLocation
      │  │  └─ initialValue
      │  ├─ 17
      │  │  ├─ type: EventDefinition
      │  │  ├─ name: Borrow
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: borrower
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: borrower
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 1
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _loanId
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _loanId
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 2
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: amount
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: amount
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 3
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: interest
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: interest
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  └─ 4
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: time
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: time
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ storageLocation
      │  │  │     └─ expression
      │  │  └─ isAnonymous: false
      │  ├─ 18
      │  │  ├─ type: EventDefinition
      │  │  ├─ name: Repay
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: borrower
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: borrower
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 1
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _loanId
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _loanId
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 2
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: amount
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: amount
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  └─ 3
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: interest
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: interest
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ storageLocation
      │  │  │     └─ expression
      │  │  └─ isAnonymous: false
      │  ├─ 19
      │  │  ├─ type: EventDefinition
      │  │  ├─ name: Deposition
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: depoId
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: depoId
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 1
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: sender
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: sender
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 2
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: time
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: time
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  └─ 3
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: amount
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: amount
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     ├─ storageLocation
      │  │  │     └─ expression
      │  │  └─ isAnonymous: false
      │  ├─ 20
      │  │  ├─ type: EventDefinition
      │  │  ├─ name: Withdrawal
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name
      │  │  │  │  ├─ identifier
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  ├─ 1
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name
      │  │  │  │  ├─ identifier
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: true
      │  │  │  │  ├─ storageLocation
      │  │  │  │  └─ expression
      │  │  │  └─ 2
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name
      │  │  │     ├─ identifier
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: true
      │  │  │     ├─ storageLocation
      │  │  │     └─ expression
      │  │  └─ isAnonymous: false
      │  ├─ 21
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _Borrow_interestRate
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _Borrow_interestRate
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  ├─ 1
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _Lending_interestRate
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _Lending_interestRate
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  └─ 2
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _maxLtv
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _maxLtv
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: Borrow_interestRate
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _Borrow_interestRate
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: Lending_interestRate
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _Lending_interestRate
      │  │  │     ├─ 2
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: maxLtv
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _maxLtv
      │  │  │     └─ 3
      │  │  │        ├─ type: ExpressionStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: BinaryOperation
      │  │  │           ├─ operator: =
      │  │  │           ├─ left
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: owner
      │  │  │           └─ right
      │  │  │              ├─ type: MemberAccess
      │  │  │              ├─ expression
      │  │  │              │  ├─ type: Identifier
      │  │  │              │  └─ name: msg
      │  │  │              └─ memberName: sender
      │  │  ├─ visibility: default
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: true
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: payable
      │  ├─ 22
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name
      │  │  ├─ parameters
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     └─ 0
      │  │  │        ├─ type: ExpressionStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: BinaryOperation
      │  │  │           ├─ operator: +=
      │  │  │           ├─ left
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: totalSupply
      │  │  │           └─ right
      │  │  │              ├─ type: MemberAccess
      │  │  │              ├─ expression
      │  │  │              │  ├─ type: Identifier
      │  │  │              │  └─ name: msg
      │  │  │              └─ memberName: value
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: true
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: payable
      │  ├─ 23
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name
      │  │  ├─ parameters
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     └─ 0
      │  │  │        ├─ type: ExpressionStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: BinaryOperation
      │  │  │           ├─ operator: +=
      │  │  │           ├─ left
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: totalSupply
      │  │  │           └─ right
      │  │  │              ├─ type: MemberAccess
      │  │  │              ├─ expression
      │  │  │              │  ├─ type: Identifier
      │  │  │              │  └─ name: msg
      │  │  │              └─ memberName: value
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: true
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: payable
      │  ├─ 24
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: depositToPool
      │  │  ├─ parameters
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _time
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _time
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: >
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: msg
      │  │  │     │     │  │  │  └─ memberName: value
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: NumberLiteral
      │  │  │     │     │  │     ├─ number: 0
      │  │  │     │     │  │     └─ subdenomination
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Amount must be greater than 0
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Amount must be greater than 0
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: <=
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: msg
      │  │  │     │     │  │  │  └─ memberName: value
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: Identifier
      │  │  │     │     │  │     └─ name: MAX_AMOUNT_LIMIT
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Can't deposit more than 0.01 ETH
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Can't deposit more than 0.01 ETH
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 2
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: interest
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: interest
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  │  └─ name: msg
      │  │  │     │     │  │  │  │  └─ memberName: value
      │  │  │     │     │  │  │  └─ memberName: mul
      │  │  │     │     │  │  ├─ arguments
      │  │  │     │     │  │  │  └─ 0
      │  │  │     │     │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │     └─ name: Lending_interestRate
      │  │  │     │     │  │  ├─ names
      │  │  │     │     │  │  └─ identifiers
      │  │  │     │     │  └─ memberName: div
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: NumberLiteral
      │  │  │     │     │     ├─ number: 10000
      │  │  │     │     │     └─ subdenomination
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 3
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: UserDefinedTypeName
      │  │  │     │  │     │  └─ namePath: deposit
      │  │  │     │  │     ├─ name: dep
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: dep
      │  │  │     │  │     ├─ storageLocation: memory
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: deposit
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: msg
      │  │  │     │     │  │  └─ memberName: value
      │  │  │     │     │  ├─ 1
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: _time
      │  │  │     │     │  └─ 2
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: interest
      │  │  │     │     ├─ names
      │  │  │     │     │  ├─ 0: amount
      │  │  │     │     │  ├─ 1: time
      │  │  │     │     │  └─ 2: interest
      │  │  │     │     └─ identifiers
      │  │  │     │        ├─ 0
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: amount
      │  │  │     │        ├─ 1
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: time
      │  │  │     │        └─ 2
      │  │  │     │           ├─ type: Identifier
      │  │  │     │           └─ name: interest
      │  │  │     ├─ 4
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: IndexAccess
      │  │  │     │     │  │  ├─ base
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: deposits
      │  │  │     │     │  │  └─ index
      │  │  │     │     │  │     ├─ type: MemberAccess
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: Identifier
      │  │  │     │     │  │     │  └─ name: msg
      │  │  │     │     │  │     └─ memberName: sender
      │  │  │     │     │  └─ memberName: push
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: dep
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 5
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: IndexAccess
      │  │  │     │     │  ├─ base
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: individualDepositNum
      │  │  │     │     │  └─ index
      │  │  │     │     │     ├─ type: MemberAccess
      │  │  │     │     │     ├─ expression
      │  │  │     │     │     │  ├─ type: Identifier
      │  │  │     │     │     │  └─ name: msg
      │  │  │     │     │     └─ memberName: sender
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: FunctionCall
      │  │  │     │        ├─ expression
      │  │  │     │        │  ├─ type: MemberAccess
      │  │  │     │        │  ├─ expression
      │  │  │     │        │  │  ├─ type: IndexAccess
      │  │  │     │        │  │  ├─ base
      │  │  │     │        │  │  │  ├─ type: Identifier
      │  │  │     │        │  │  │  └─ name: individualDepositNum
      │  │  │     │        │  │  └─ index
      │  │  │     │        │  │     ├─ type: MemberAccess
      │  │  │     │        │  │     ├─ expression
      │  │  │     │        │  │     │  ├─ type: Identifier
      │  │  │     │        │  │     │  └─ name: msg
      │  │  │     │        │  │     └─ memberName: sender
      │  │  │     │        │  └─ memberName: add
      │  │  │     │        ├─ arguments
      │  │  │     │        │  └─ 0
      │  │  │     │        │     ├─ type: NumberLiteral
      │  │  │     │        │     ├─ number: 1
      │  │  │     │        │     └─ subdenomination
      │  │  │     │        ├─ names
      │  │  │     │        └─ identifiers
      │  │  │     ├─ 6
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  ├─ 0
      │  │  │     │  │  │  ├─ type: VariableDeclaration
      │  │  │     │  │  │  ├─ name: success
      │  │  │     │  │  │  ├─ identifier
      │  │  │     │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  └─ name: success
      │  │  │     │  │  │  ├─ typeName
      │  │  │     │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  │  │  ├─ name: bool
      │  │  │     │  │  │  │  └─ stateMutability
      │  │  │     │  │  │  ├─ storageLocation
      │  │  │     │  │  │  ├─ isStateVar: false
      │  │  │     │  │  │  ├─ isIndexed: false
      │  │  │     │  │  │  └─ expression
      │  │  │     │  │  └─ 1
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: NameValueExpression
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: address
      │  │  │     │     │  │  │  ├─ arguments
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │  │     └─ name: this
      │  │  │     │     │  │  │  ├─ names
      │  │  │     │     │  │  │  └─ identifiers
      │  │  │     │     │  │  └─ memberName: call
      │  │  │     │     │  └─ arguments
      │  │  │     │     │     ├─ type: NameValueList
      │  │  │     │     │     ├─ names
      │  │  │     │     │     │  └─ 0: value
      │  │  │     │     │     ├─ identifiers
      │  │  │     │     │     │  └─ 0
      │  │  │     │     │     │     ├─ type: Identifier
      │  │  │     │     │     │     └─ name: value
      │  │  │     │     │     └─ arguments
      │  │  │     │     │        └─ 0
      │  │  │     │     │           ├─ type: MemberAccess
      │  │  │     │     │           ├─ expression
      │  │  │     │     │           │  ├─ type: Identifier
      │  │  │     │     │           │  └─ name: msg
      │  │  │     │     │           └─ memberName: value
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: 
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: 
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 7
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: success
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Reverted finds not transfered
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Reverted finds not transfered
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     └─ 8
      │  │  │        ├─ type: EmitStatement
      │  │  │        └─ eventCall
      │  │  │           ├─ type: FunctionCall
      │  │  │           ├─ expression
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: Deposition
      │  │  │           ├─ arguments
      │  │  │           │  ├─ 0
      │  │  │           │  │  ├─ type: FunctionCall
      │  │  │           │  │  ├─ expression
      │  │  │           │  │  │  ├─ type: MemberAccess
      │  │  │           │  │  │  ├─ expression
      │  │  │           │  │  │  │  ├─ type: IndexAccess
      │  │  │           │  │  │  │  ├─ base
      │  │  │           │  │  │  │  │  ├─ type: Identifier
      │  │  │           │  │  │  │  │  └─ name: individualDepositNum
      │  │  │           │  │  │  │  └─ index
      │  │  │           │  │  │  │     ├─ type: MemberAccess
      │  │  │           │  │  │  │     ├─ expression
      │  │  │           │  │  │  │     │  ├─ type: Identifier
      │  │  │           │  │  │  │     │  └─ name: msg
      │  │  │           │  │  │  │     └─ memberName: sender
      │  │  │           │  │  │  └─ memberName: sub
      │  │  │           │  │  ├─ arguments
      │  │  │           │  │  │  └─ 0
      │  │  │           │  │  │     ├─ type: NumberLiteral
      │  │  │           │  │  │     ├─ number: 1
      │  │  │           │  │  │     └─ subdenomination
      │  │  │           │  │  ├─ names
      │  │  │           │  │  └─ identifiers
      │  │  │           │  ├─ 1
      │  │  │           │  │  ├─ type: MemberAccess
      │  │  │           │  │  ├─ expression
      │  │  │           │  │  │  ├─ type: Identifier
      │  │  │           │  │  │  └─ name: msg
      │  │  │           │  │  └─ memberName: sender
      │  │  │           │  ├─ 2
      │  │  │           │  │  ├─ type: Identifier
      │  │  │           │  │  └─ name: _time
      │  │  │           │  └─ 3
      │  │  │           │     ├─ type: MemberAccess
      │  │  │           │     ├─ expression
      │  │  │           │     │  ├─ type: Identifier
      │  │  │           │     │  └─ name: msg
      │  │  │           │     └─ memberName: value
      │  │  │           ├─ names
      │  │  │           └─ identifiers
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: payable
      │  ├─ 25
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: withdrawFromPool
      │  │  ├─ parameters
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _depId
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _depId
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: UserDefinedTypeName
      │  │  │     │  │     │  └─ namePath: deposit
      │  │  │     │  │     ├─ name: dep
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: dep
      │  │  │     │  │     ├─ storageLocation: storage
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: IndexAccess
      │  │  │     │     ├─ base
      │  │  │     │     │  ├─ type: IndexAccess
      │  │  │     │     │  ├─ base
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: deposits
      │  │  │     │     │  └─ index
      │  │  │     │     │     ├─ type: MemberAccess
      │  │  │     │     │     ├─ expression
      │  │  │     │     │     │  ├─ type: Identifier
      │  │  │     │     │     │  └─ name: msg
      │  │  │     │     │     └─ memberName: sender
      │  │  │     │     └─ index
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _depId
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: >
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: dep
      │  │  │     │     │  │  │  └─ memberName: amount
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: NumberLiteral
      │  │  │     │     │  │     ├─ number: 0
      │  │  │     │     │  │     └─ subdenomination
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Deposit not found or already withdrawn
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Deposit not found or already withdrawn
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 2
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: amountToReturn
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: amountToReturn
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: +
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: dep
      │  │  │     │     │  └─ memberName: interest
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: MemberAccess
      │  │  │     │        ├─ expression
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: dep
      │  │  │     │        └─ memberName: amount
      │  │  │     ├─ 3
      │  │  │     │  ├─ type: IfStatement
      │  │  │     │  ├─ condition
      │  │  │     │  │  ├─ type: BinaryOperation
      │  │  │     │  │  ├─ operator: <
      │  │  │     │  │  ├─ left
      │  │  │     │  │  │  ├─ type: MemberAccess
      │  │  │     │  │  │  ├─ expression
      │  │  │     │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  └─ name: block
      │  │  │     │  │  │  └─ memberName: timestamp
      │  │  │     │  │  └─ right
      │  │  │     │  │     ├─ type: MemberAccess
      │  │  │     │  │     ├─ expression
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: dep
      │  │  │     │  │     └─ memberName: time
      │  │  │     │  ├─ trueBody
      │  │  │     │  │  ├─ type: Block
      │  │  │     │  │  └─ statements
      │  │  │     │  │     └─ 0
      │  │  │     │  │        ├─ type: ExpressionStatement
      │  │  │     │  │        └─ expression
      │  │  │     │  │           ├─ type: BinaryOperation
      │  │  │     │  │           ├─ operator: =
      │  │  │     │  │           ├─ left
      │  │  │     │  │           │  ├─ type: Identifier
      │  │  │     │  │           │  └─ name: amountToReturn
      │  │  │     │  │           └─ right
      │  │  │     │  │              ├─ type: MemberAccess
      │  │  │     │  │              ├─ expression
      │  │  │     │  │              │  ├─ type: Identifier
      │  │  │     │  │              │  └─ name: dep
      │  │  │     │  │              └─ memberName: amount
      │  │  │     │  └─ falseBody
      │  │  │     ├─ 4
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: dep
      │  │  │     │     │  └─ memberName: amount
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: NumberLiteral
      │  │  │     │        ├─ number: 0
      │  │  │     │        └─ subdenomination
      │  │  │     ├─ 5
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: -=
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: totalSupply
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: amountToReturn
      │  │  │     ├─ 6
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: IndexAccess
      │  │  │     │     │  ├─ base
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: individualDepositNum
      │  │  │     │     │  └─ index
      │  │  │     │     │     ├─ type: MemberAccess
      │  │  │     │     │     ├─ expression
      │  │  │     │     │     │  ├─ type: Identifier
      │  │  │     │     │     │  └─ name: msg
      │  │  │     │     │     └─ memberName: sender
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: FunctionCall
      │  │  │     │        ├─ expression
      │  │  │     │        │  ├─ type: MemberAccess
      │  │  │     │        │  ├─ expression
      │  │  │     │        │  │  ├─ type: IndexAccess
      │  │  │     │        │  │  ├─ base
      │  │  │     │        │  │  │  ├─ type: Identifier
      │  │  │     │        │  │  │  └─ name: individualDepositNum
      │  │  │     │        │  │  └─ index
      │  │  │     │        │  │     ├─ type: MemberAccess
      │  │  │     │        │  │     ├─ expression
      │  │  │     │        │  │     │  ├─ type: Identifier
      │  │  │     │        │  │     │  └─ name: msg
      │  │  │     │        │  │     └─ memberName: sender
      │  │  │     │        │  └─ memberName: sub
      │  │  │     │        ├─ arguments
      │  │  │     │        │  └─ 0
      │  │  │     │        │     ├─ type: NumberLiteral
      │  │  │     │        │     ├─ number: 1
      │  │  │     │        │     └─ subdenomination
      │  │  │     │        ├─ names
      │  │  │     │        └─ identifiers
      │  │  │     ├─ 7
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  ├─ 0
      │  │  │     │  │  │  ├─ type: VariableDeclaration
      │  │  │     │  │  │  ├─ name: success
      │  │  │     │  │  │  ├─ identifier
      │  │  │     │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  └─ name: success
      │  │  │     │  │  │  ├─ typeName
      │  │  │     │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  │  │  ├─ name: bool
      │  │  │     │  │  │  │  └─ stateMutability
      │  │  │     │  │  │  ├─ storageLocation
      │  │  │     │  │  │  ├─ isStateVar: false
      │  │  │     │  │  │  ├─ isIndexed: false
      │  │  │     │  │  │  └─ expression
      │  │  │     │  │  └─ 1
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: NameValueExpression
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: TupleExpression
      │  │  │     │     │  │  │  ├─ components
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: MemberAccess
      │  │  │     │     │  │  │  │     ├─ expression
      │  │  │     │     │  │  │  │     │  ├─ type: Identifier
      │  │  │     │     │  │  │  │     │  └─ name: msg
      │  │  │     │     │  │  │  │     └─ memberName: sender
      │  │  │     │     │  │  │  └─ isArray: false
      │  │  │     │     │  │  └─ memberName: call
      │  │  │     │     │  └─ arguments
      │  │  │     │     │     ├─ type: NameValueList
      │  │  │     │     │     ├─ names
      │  │  │     │     │     │  └─ 0: value
      │  │  │     │     │     ├─ identifiers
      │  │  │     │     │     │  └─ 0
      │  │  │     │     │     │     ├─ type: Identifier
      │  │  │     │     │     │     └─ name: value
      │  │  │     │     │     └─ arguments
      │  │  │     │     │        └─ 0
      │  │  │     │     │           ├─ type: Identifier
      │  │  │     │     │           └─ name: amountToReturn
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: 
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: 
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     └─ 8
      │  │  │        ├─ type: IfStatement
      │  │  │        ├─ condition
      │  │  │        │  ├─ type: Identifier
      │  │  │        │  └─ name: success
      │  │  │        ├─ trueBody
      │  │  │        │  ├─ type: Block
      │  │  │        │  └─ statements
      │  │  │        │     ├─ 0
      │  │  │        │     │  ├─ type: EmitStatement
      │  │  │        │     │  └─ eventCall
      │  │  │        │     │     ├─ type: FunctionCall
      │  │  │        │     │     ├─ expression
      │  │  │        │     │     │  ├─ type: Identifier
      │  │  │        │     │     │  └─ name: Withdrawal
      │  │  │        │     │     ├─ arguments
      │  │  │        │     │     │  ├─ 0
      │  │  │        │     │     │  │  ├─ type: Identifier
      │  │  │        │     │     │  │  └─ name: _depId
      │  │  │        │     │     │  ├─ 1
      │  │  │        │     │     │  │  ├─ type: MemberAccess
      │  │  │        │     │     │  │  ├─ expression
      │  │  │        │     │     │  │  │  ├─ type: Identifier
      │  │  │        │     │     │  │  │  └─ name: msg
      │  │  │        │     │     │  │  └─ memberName: sender
      │  │  │        │     │     │  └─ 2
      │  │  │        │     │     │     ├─ type: Identifier
      │  │  │        │     │     │     └─ name: amountToReturn
      │  │  │        │     │     ├─ names
      │  │  │        │     │     └─ identifiers
      │  │  │        │     └─ 1
      │  │  │        │        ├─ type: ExpressionStatement
      │  │  │        │        └─ expression
      │  │  │        │           ├─ type: UnaryOperation
      │  │  │        │           ├─ operator: delete
      │  │  │        │           ├─ subExpression
      │  │  │        │           │  ├─ type: IndexAccess
      │  │  │        │           │  ├─ base
      │  │  │        │           │  │  ├─ type: IndexAccess
      │  │  │        │           │  │  ├─ base
      │  │  │        │           │  │  │  ├─ type: Identifier
      │  │  │        │           │  │  │  └─ name: deposits
      │  │  │        │           │  │  └─ index
      │  │  │        │           │  │     ├─ type: MemberAccess
      │  │  │        │           │  │     ├─ expression
      │  │  │        │           │  │     │  ├─ type: Identifier
      │  │  │        │           │  │     │  └─ name: msg
      │  │  │        │           │  │     └─ memberName: sender
      │  │  │        │           │  └─ index
      │  │  │        │           │     ├─ type: Identifier
      │  │  │        │           │     └─ name: _depId
      │  │  │        │           └─ isPrefix: true
      │  │  │        └─ falseBody
      │  │  │           ├─ type: Block
      │  │  │           └─ statements
      │  │  │              ├─ 0
      │  │  │              │  ├─ type: ExpressionStatement
      │  │  │              │  └─ expression
      │  │  │              │     ├─ type: BinaryOperation
      │  │  │              │     ├─ operator: =
      │  │  │              │     ├─ left
      │  │  │              │     │  ├─ type: MemberAccess
      │  │  │              │     │  ├─ expression
      │  │  │              │     │  │  ├─ type: Identifier
      │  │  │              │     │  │  └─ name: dep
      │  │  │              │     │  └─ memberName: amount
      │  │  │              │     └─ right
      │  │  │              │        ├─ type: Identifier
      │  │  │              │        └─ name: amountToReturn
      │  │  │              └─ 1
      │  │  │                 ├─ type: ExpressionStatement
      │  │  │                 └─ expression
      │  │  │                    ├─ type: FunctionCall
      │  │  │                    ├─ expression
      │  │  │                    │  ├─ type: Identifier
      │  │  │                    │  └─ name: revert
      │  │  │                    ├─ arguments
      │  │  │                    │  └─ 0
      │  │  │                    │     ├─ type: StringLiteral
      │  │  │                    │     ├─ value: Internal error: funds not transferred
      │  │  │                    │     ├─ parts
      │  │  │                    │     │  └─ 0: Internal error: funds not transferred
      │  │  │                    │     └─ isUnicode
      │  │  │                    │        └─ 0: false
      │  │  │                    ├─ names
      │  │  │                    └─ identifiers
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability
      │  ├─ 26
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: borrow
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _amount
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _amount
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  ├─ 1
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _tokenContract
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _tokenContract
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  ├─ 2
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: uint256
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _tokenId
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _tokenId
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  └─ 3
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _time
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _time
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: >
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: _amount
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: NumberLiteral
      │  │  │     │     │  │     ├─ number: 0
      │  │  │     │     │  │     └─ subdenomination
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Amount must be greater than 0
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Amount must be greater than 0
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: collateralValue
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: collateralValue
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: getNftCollateralValue
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: _tokenContract
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: _tokenId
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 2
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: borrowingPower
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: borrowingPower
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: collateralValue
      │  │  │     │     │  │  │  └─ memberName: mul
      │  │  │     │     │  │  ├─ arguments
      │  │  │     │     │  │  │  └─ 0
      │  │  │     │     │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │     └─ name: maxLtv
      │  │  │     │     │  │  ├─ names
      │  │  │     │     │  │  └─ identifiers
      │  │  │     │     │  └─ memberName: div
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: NumberLiteral
      │  │  │     │     │     ├─ number: 10000
      │  │  │     │     │     └─ subdenomination
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 3
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: <=
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: _amount
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: Identifier
      │  │  │     │     │  │     └─ name: borrowingPower
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Amount exceeds borrowing power
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Amount exceeds borrowing power
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 4
      │  │  │     │  ├─ type: IfStatement
      │  │  │     │  ├─ condition
      │  │  │     │  │  ├─ type: FunctionCall
      │  │  │     │  │  ├─ expression
      │  │  │     │  │  │  ├─ type: MemberAccess
      │  │  │     │  │  │  ├─ expression
      │  │  │     │  │  │  │  ├─ type: FunctionCall
      │  │  │     │  │  │  │  ├─ expression
      │  │  │     │  │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  │  └─ name: IERC165
      │  │  │     │  │  │  │  ├─ arguments
      │  │  │     │  │  │  │  │  └─ 0
      │  │  │     │  │  │  │  │     ├─ type: Identifier
      │  │  │     │  │  │  │  │     └─ name: _tokenContract
      │  │  │     │  │  │  │  ├─ names
      │  │  │     │  │  │  │  └─ identifiers
      │  │  │     │  │  │  └─ memberName: supportsInterface
      │  │  │     │  │  ├─ arguments
      │  │  │     │  │  │  └─ 0
      │  │  │     │  │  │     ├─ type: MemberAccess
      │  │  │     │  │  │     ├─ expression
      │  │  │     │  │  │     │  ├─ type: FunctionCall
      │  │  │     │  │  │     │  ├─ expression
      │  │  │     │  │  │     │  │  ├─ type: Identifier
      │  │  │     │  │  │     │  │  └─ name: type
      │  │  │     │  │  │     │  ├─ arguments
      │  │  │     │  │  │     │  │  └─ 0
      │  │  │     │  │  │     │  │     ├─ type: Identifier
      │  │  │     │  │  │     │  │     └─ name: IERC721
      │  │  │     │  │  │     │  ├─ names
      │  │  │     │  │  │     │  └─ identifiers
      │  │  │     │  │  │     └─ memberName: interfaceId
      │  │  │     │  │  ├─ names
      │  │  │     │  │  └─ identifiers
      │  │  │     │  ├─ trueBody
      │  │  │     │  │  ├─ type: Block
      │  │  │     │  │  └─ statements
      │  │  │     │  │     └─ 0
      │  │  │     │  │        ├─ type: ExpressionStatement
      │  │  │     │  │        └─ expression
      │  │  │     │  │           ├─ type: FunctionCall
      │  │  │     │  │           ├─ expression
      │  │  │     │  │           │  ├─ type: Identifier
      │  │  │     │  │           │  └─ name: depositERC721Collateral
      │  │  │     │  │           ├─ arguments
      │  │  │     │  │           │  ├─ 0
      │  │  │     │  │           │  │  ├─ type: MemberAccess
      │  │  │     │  │           │  │  ├─ expression
      │  │  │     │  │           │  │  │  ├─ type: Identifier
      │  │  │     │  │           │  │  │  └─ name: msg
      │  │  │     │  │           │  │  └─ memberName: sender
      │  │  │     │  │           │  ├─ 1
      │  │  │     │  │           │  │  ├─ type: Identifier
      │  │  │     │  │           │  │  └─ name: _tokenContract
      │  │  │     │  │           │  └─ 2
      │  │  │     │  │           │     ├─ type: Identifier
      │  │  │     │  │           │     └─ name: _tokenId
      │  │  │     │  │           ├─ names
      │  │  │     │  │           └─ identifiers
      │  │  │     │  └─ falseBody
      │  │  │     │     ├─ type: Block
      │  │  │     │     └─ statements
      │  │  │     │        └─ 0
      │  │  │     │           ├─ type: ExpressionStatement
      │  │  │     │           └─ expression
      │  │  │     │              ├─ type: FunctionCall
      │  │  │     │              ├─ expression
      │  │  │     │              │  ├─ type: Identifier
      │  │  │     │              │  └─ name: revert
      │  │  │     │              ├─ arguments
      │  │  │     │              │  └─ 0
      │  │  │     │              │     ├─ type: StringLiteral
      │  │  │     │              │     ├─ value: Unsupported token type
      │  │  │     │              │     ├─ parts
      │  │  │     │              │     │  └─ 0: Unsupported token type
      │  │  │     │              │     └─ isUnicode
      │  │  │     │              │        └─ 0: false
      │  │  │     │              ├─ names
      │  │  │     │              └─ identifiers
      │  │  │     ├─ 5
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: interest
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: interest
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: _amount
      │  │  │     │     │  │  │  └─ memberName: mul
      │  │  │     │     │  │  ├─ arguments
      │  │  │     │     │  │  │  └─ 0
      │  │  │     │     │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │     └─ name: Borrow_interestRate
      │  │  │     │     │  │  ├─ names
      │  │  │     │     │  │  └─ identifiers
      │  │  │     │     │  └─ memberName: div
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: NumberLiteral
      │  │  │     │     │     ├─ number: 10000
      │  │  │     │     │     └─ subdenomination
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 6
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: UserDefinedTypeName
      │  │  │     │  │     │  └─ namePath: Loan
      │  │  │     │  │     ├─ name: loan
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: loan
      │  │  │     │  │     ├─ storageLocation: memory
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: Loan
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: msg
      │  │  │     │     │  │  └─ memberName: sender
      │  │  │     │     │  ├─ 1
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: _tokenContract
      │  │  │     │     │  ├─ 2
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: _tokenId
      │  │  │     │     │  ├─ 3
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: _amount
      │  │  │     │     │  ├─ 4
      │  │  │     │     │  │  ├─ type: NumberLiteral
      │  │  │     │     │  │  ├─ number: 1000
      │  │  │     │     │  │  └─ subdenomination
      │  │  │     │     │  ├─ 5
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: interest
      │  │  │     │     │  ├─ 6
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: _time
      │  │  │     │     │  └─ 7
      │  │  │     │     │     ├─ type: BooleanLiteral
      │  │  │     │     │     └─ value: true
      │  │  │     │     ├─ names
      │  │  │     │     │  ├─ 0: borrower
      │  │  │     │     │  ├─ 1: tokenContract
      │  │  │     │     │  ├─ 2: tokenId
      │  │  │     │     │  ├─ 3: amount
      │  │  │     │     │  ├─ 4: collateralValue
      │  │  │     │     │  ├─ 5: interest
      │  │  │     │     │  ├─ 6: time
      │  │  │     │     │  └─ 7: active
      │  │  │     │     └─ identifiers
      │  │  │     │        ├─ 0
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: borrower
      │  │  │     │        ├─ 1
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: tokenContract
      │  │  │     │        ├─ 2
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: tokenId
      │  │  │     │        ├─ 3
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: amount
      │  │  │     │        ├─ 4
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: collateralValue
      │  │  │     │        ├─ 5
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: interest
      │  │  │     │        ├─ 6
      │  │  │     │        │  ├─ type: Identifier
      │  │  │     │        │  └─ name: time
      │  │  │     │        └─ 7
      │  │  │     │           ├─ type: Identifier
      │  │  │     │           └─ name: active
      │  │  │     ├─ 7
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: IndexAccess
      │  │  │     │     │  │  ├─ base
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: loans
      │  │  │     │     │  │  └─ index
      │  │  │     │     │  │     ├─ type: MemberAccess
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: Identifier
      │  │  │     │     │  │     │  └─ name: msg
      │  │  │     │     │  │     └─ memberName: sender
      │  │  │     │     │  └─ memberName: push
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: loan
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 8
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: +=
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: totalBorrowed
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _amount
      │  │  │     ├─ 9
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: +=
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: totalDepositedNFTs
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: NumberLiteral
      │  │  │     │        ├─ number: 1
      │  │  │     │        └─ subdenomination
      │  │  │     ├─ 10
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  ├─ 0
      │  │  │     │  │  │  ├─ type: VariableDeclaration
      │  │  │     │  │  │  ├─ name: success
      │  │  │     │  │  │  ├─ identifier
      │  │  │     │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  └─ name: success
      │  │  │     │  │  │  ├─ typeName
      │  │  │     │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  │  │  ├─ name: bool
      │  │  │     │  │  │  │  └─ stateMutability
      │  │  │     │  │  │  ├─ storageLocation
      │  │  │     │  │  │  ├─ isStateVar: false
      │  │  │     │  │  │  ├─ isIndexed: false
      │  │  │     │  │  │  └─ expression
      │  │  │     │  │  └─ 1
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: NameValueExpression
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: TupleExpression
      │  │  │     │     │  │  │  ├─ components
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: FunctionCall
      │  │  │     │     │  │  │  │     ├─ expression
      │  │  │     │     │  │  │  │     │  ├─ type: Identifier
      │  │  │     │     │  │  │  │     │  └─ name: payable
      │  │  │     │     │  │  │  │     ├─ arguments
      │  │  │     │     │  │  │  │     │  └─ 0
      │  │  │     │     │  │  │  │     │     ├─ type: MemberAccess
      │  │  │     │     │  │  │  │     │     ├─ expression
      │  │  │     │     │  │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  │  │  │     │     │  └─ name: msg
      │  │  │     │     │  │  │  │     │     └─ memberName: sender
      │  │  │     │     │  │  │  │     ├─ names
      │  │  │     │     │  │  │  │     └─ identifiers
      │  │  │     │     │  │  │  └─ isArray: false
      │  │  │     │     │  │  └─ memberName: call
      │  │  │     │     │  └─ arguments
      │  │  │     │     │     ├─ type: NameValueList
      │  │  │     │     │     ├─ names
      │  │  │     │     │     │  └─ 0: value
      │  │  │     │     │     ├─ identifiers
      │  │  │     │     │     │  └─ 0
      │  │  │     │     │     │     ├─ type: Identifier
      │  │  │     │     │     │     └─ name: value
      │  │  │     │     │     └─ arguments
      │  │  │     │     │        └─ 0
      │  │  │     │     │           ├─ type: Identifier
      │  │  │     │     │           └─ name: _amount
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: 
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: 
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 11
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: success
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Internal error funds not transferred
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Internal error funds not transferred
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     └─ 12
      │  │  │        ├─ type: EmitStatement
      │  │  │        └─ eventCall
      │  │  │           ├─ type: FunctionCall
      │  │  │           ├─ expression
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: Borrow
      │  │  │           ├─ arguments
      │  │  │           │  ├─ 0
      │  │  │           │  │  ├─ type: MemberAccess
      │  │  │           │  │  ├─ expression
      │  │  │           │  │  │  ├─ type: Identifier
      │  │  │           │  │  │  └─ name: msg
      │  │  │           │  │  └─ memberName: sender
      │  │  │           │  ├─ 1
      │  │  │           │  │  ├─ type: BinaryOperation
      │  │  │           │  │  ├─ operator: -
      │  │  │           │  │  ├─ left
      │  │  │           │  │  │  ├─ type: MemberAccess
      │  │  │           │  │  │  ├─ expression
      │  │  │           │  │  │  │  ├─ type: IndexAccess
      │  │  │           │  │  │  │  ├─ base
      │  │  │           │  │  │  │  │  ├─ type: Identifier
      │  │  │           │  │  │  │  │  └─ name: loans
      │  │  │           │  │  │  │  └─ index
      │  │  │           │  │  │  │     ├─ type: MemberAccess
      │  │  │           │  │  │  │     ├─ expression
      │  │  │           │  │  │  │     │  ├─ type: Identifier
      │  │  │           │  │  │  │     │  └─ name: msg
      │  │  │           │  │  │  │     └─ memberName: sender
      │  │  │           │  │  │  └─ memberName: length
      │  │  │           │  │  └─ right
      │  │  │           │  │     ├─ type: NumberLiteral
      │  │  │           │  │     ├─ number: 1
      │  │  │           │  │     └─ subdenomination
      │  │  │           │  ├─ 2
      │  │  │           │  │  ├─ type: Identifier
      │  │  │           │  │  └─ name: _amount
      │  │  │           │  ├─ 3
      │  │  │           │  │  ├─ type: Identifier
      │  │  │           │  │  └─ name: interest
      │  │  │           │  └─ 4
      │  │  │           │     ├─ type: Identifier
      │  │  │           │     └─ name: _time
      │  │  │           ├─ names
      │  │  │           └─ identifiers
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: payable
      │  ├─ 27
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: repay
      │  │  ├─ parameters
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _loanId
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _loanId
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: UserDefinedTypeName
      │  │  │     │  │     │  └─ namePath: Loan
      │  │  │     │  │     ├─ name: loan
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: loan
      │  │  │     │  │     ├─ storageLocation: storage
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: IndexAccess
      │  │  │     │     ├─ base
      │  │  │     │     │  ├─ type: IndexAccess
      │  │  │     │     │  ├─ base
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: loans
      │  │  │     │     │  └─ index
      │  │  │     │     │     ├─ type: MemberAccess
      │  │  │     │     │     ├─ expression
      │  │  │     │     │     │  ├─ type: Identifier
      │  │  │     │     │     │  └─ name: msg
      │  │  │     │     │     └─ memberName: sender
      │  │  │     │     └─ index
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _loanId
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: >
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: loan
      │  │  │     │     │  │  │  └─ memberName: time
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: MemberAccess
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: Identifier
      │  │  │     │     │  │     │  └─ name: block
      │  │  │     │     │  │     └─ memberName: timestamp
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: NFT liquidated debt not paid in time
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: NFT liquidated debt not paid in time
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 2
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: ==
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: msg
      │  │  │     │     │  │  │  └─ memberName: sender
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: MemberAccess
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: Identifier
      │  │  │     │     │  │     │  └─ name: loan
      │  │  │     │     │  │     └─ memberName: borrower
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Only borrower can repay the loan
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Only borrower can repay the loan
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 3
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: loan
      │  │  │     │     │  │  └─ memberName: active
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Loan is already closed
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Loan is already closed
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 4
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: amount
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: amount
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: MemberAccess
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: loan
      │  │  │     │     └─ memberName: amount
      │  │  │     ├─ 5
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: interest
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: interest
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: MemberAccess
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: loan
      │  │  │     │     └─ memberName: interest
      │  │  │     ├─ 6
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: amountToRepay
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: amountToRepay
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: +
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: amount
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: interest
      │  │  │     ├─ 7
      │  │  │     │  ├─ type: IfStatement
      │  │  │     │  ├─ condition
      │  │  │     │  │  ├─ type: FunctionCall
      │  │  │     │  │  ├─ expression
      │  │  │     │  │  │  ├─ type: MemberAccess
      │  │  │     │  │  │  ├─ expression
      │  │  │     │  │  │  │  ├─ type: FunctionCall
      │  │  │     │  │  │  │  ├─ expression
      │  │  │     │  │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  │  └─ name: IERC165
      │  │  │     │  │  │  │  ├─ arguments
      │  │  │     │  │  │  │  │  └─ 0
      │  │  │     │  │  │  │  │     ├─ type: MemberAccess
      │  │  │     │  │  │  │  │     ├─ expression
      │  │  │     │  │  │  │  │     │  ├─ type: Identifier
      │  │  │     │  │  │  │  │     │  └─ name: loan
      │  │  │     │  │  │  │  │     └─ memberName: tokenContract
      │  │  │     │  │  │  │  ├─ names
      │  │  │     │  │  │  │  └─ identifiers
      │  │  │     │  │  │  └─ memberName: supportsInterface
      │  │  │     │  │  ├─ arguments
      │  │  │     │  │  │  └─ 0
      │  │  │     │  │  │     ├─ type: MemberAccess
      │  │  │     │  │  │     ├─ expression
      │  │  │     │  │  │     │  ├─ type: FunctionCall
      │  │  │     │  │  │     │  ├─ expression
      │  │  │     │  │  │     │  │  ├─ type: Identifier
      │  │  │     │  │  │     │  │  └─ name: type
      │  │  │     │  │  │     │  ├─ arguments
      │  │  │     │  │  │     │  │  └─ 0
      │  │  │     │  │  │     │  │     ├─ type: Identifier
      │  │  │     │  │  │     │  │     └─ name: IERC721
      │  │  │     │  │  │     │  ├─ names
      │  │  │     │  │  │     │  └─ identifiers
      │  │  │     │  │  │     └─ memberName: interfaceId
      │  │  │     │  │  ├─ names
      │  │  │     │  │  └─ identifiers
      │  │  │     │  ├─ trueBody
      │  │  │     │  │  ├─ type: Block
      │  │  │     │  │  └─ statements
      │  │  │     │  │     └─ 0
      │  │  │     │  │        ├─ type: ExpressionStatement
      │  │  │     │  │        └─ expression
      │  │  │     │  │           ├─ type: FunctionCall
      │  │  │     │  │           ├─ expression
      │  │  │     │  │           │  ├─ type: Identifier
      │  │  │     │  │           │  └─ name: withdrawERC721Collateral
      │  │  │     │  │           ├─ arguments
      │  │  │     │  │           │  ├─ 0
      │  │  │     │  │           │  │  ├─ type: MemberAccess
      │  │  │     │  │           │  │  ├─ expression
      │  │  │     │  │           │  │  │  ├─ type: Identifier
      │  │  │     │  │           │  │  │  └─ name: msg
      │  │  │     │  │           │  │  └─ memberName: sender
      │  │  │     │  │           │  ├─ 1
      │  │  │     │  │           │  │  ├─ type: MemberAccess
      │  │  │     │  │           │  │  ├─ expression
      │  │  │     │  │           │  │  │  ├─ type: Identifier
      │  │  │     │  │           │  │  │  └─ name: loan
      │  │  │     │  │           │  │  └─ memberName: tokenContract
      │  │  │     │  │           │  └─ 2
      │  │  │     │  │           │     ├─ type: MemberAccess
      │  │  │     │  │           │     ├─ expression
      │  │  │     │  │           │     │  ├─ type: Identifier
      │  │  │     │  │           │     │  └─ name: loan
      │  │  │     │  │           │     └─ memberName: tokenId
      │  │  │     │  │           ├─ names
      │  │  │     │  │           └─ identifiers
      │  │  │     │  └─ falseBody
      │  │  │     │     ├─ type: Block
      │  │  │     │     └─ statements
      │  │  │     │        └─ 0
      │  │  │     │           ├─ type: ExpressionStatement
      │  │  │     │           └─ expression
      │  │  │     │              ├─ type: FunctionCall
      │  │  │     │              ├─ expression
      │  │  │     │              │  ├─ type: Identifier
      │  │  │     │              │  └─ name: revert
      │  │  │     │              ├─ arguments
      │  │  │     │              │  └─ 0
      │  │  │     │              │     ├─ type: StringLiteral
      │  │  │     │              │     ├─ value: Unsupported token type
      │  │  │     │              │     ├─ parts
      │  │  │     │              │     │  └─ 0: Unsupported token type
      │  │  │     │              │     └─ isUnicode
      │  │  │     │              │        └─ 0: false
      │  │  │     │              ├─ names
      │  │  │     │              └─ identifiers
      │  │  │     ├─ 8
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: loan
      │  │  │     │     │  └─ memberName: active
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: BooleanLiteral
      │  │  │     │        └─ value: false
      │  │  │     ├─ 9
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: -=
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: totalBorrowed
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: amount
      │  │  │     ├─ 10
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: -=
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: totalDepositedNFTs
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: NumberLiteral
      │  │  │     │        ├─ number: 1
      │  │  │     │        └─ subdenomination
      │  │  │     ├─ 11
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: ==
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: amountToRepay
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: MemberAccess
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: Identifier
      │  │  │     │     │  │     │  └─ name: msg
      │  │  │     │     │  │     └─ memberName: value
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: reverted
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: reverted
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 12
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  ├─ 0
      │  │  │     │  │  │  ├─ type: VariableDeclaration
      │  │  │     │  │  │  ├─ name: success
      │  │  │     │  │  │  ├─ identifier
      │  │  │     │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  └─ name: success
      │  │  │     │  │  │  ├─ typeName
      │  │  │     │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  │  │  ├─ name: bool
      │  │  │     │  │  │  │  └─ stateMutability
      │  │  │     │  │  │  ├─ storageLocation
      │  │  │     │  │  │  ├─ isStateVar: false
      │  │  │     │  │  │  ├─ isIndexed: false
      │  │  │     │  │  │  └─ expression
      │  │  │     │  │  └─ 1
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: NameValueExpression
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: TupleExpression
      │  │  │     │     │  │  │  ├─ components
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: FunctionCall
      │  │  │     │     │  │  │  │     ├─ expression
      │  │  │     │     │  │  │  │     │  ├─ type: Identifier
      │  │  │     │     │  │  │  │     │  └─ name: address
      │  │  │     │     │  │  │  │     ├─ arguments
      │  │  │     │     │  │  │  │     │  └─ 0
      │  │  │     │     │  │  │  │     │     ├─ type: Identifier
      │  │  │     │     │  │  │  │     │     └─ name: this
      │  │  │     │     │  │  │  │     ├─ names
      │  │  │     │     │  │  │  │     └─ identifiers
      │  │  │     │     │  │  │  └─ isArray: false
      │  │  │     │     │  │  └─ memberName: call
      │  │  │     │     │  └─ arguments
      │  │  │     │     │     ├─ type: NameValueList
      │  │  │     │     │     ├─ names
      │  │  │     │     │     │  └─ 0: value
      │  │  │     │     │     ├─ identifiers
      │  │  │     │     │     │  └─ 0
      │  │  │     │     │     │     ├─ type: Identifier
      │  │  │     │     │     │     └─ name: value
      │  │  │     │     │     └─ arguments
      │  │  │     │     │        └─ 0
      │  │  │     │     │           ├─ type: MemberAccess
      │  │  │     │     │           ├─ expression
      │  │  │     │     │           │  ├─ type: Identifier
      │  │  │     │     │           │  └─ name: msg
      │  │  │     │     │           └─ memberName: value
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: 
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: 
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 13
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: success
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Internal error funds not transferred
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Internal error funds not transferred
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 14
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: UnaryOperation
      │  │  │     │     ├─ operator: delete
      │  │  │     │     ├─ subExpression
      │  │  │     │     │  ├─ type: IndexAccess
      │  │  │     │     │  ├─ base
      │  │  │     │     │  │  ├─ type: IndexAccess
      │  │  │     │     │  │  ├─ base
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: loans
      │  │  │     │     │  │  └─ index
      │  │  │     │     │  │     ├─ type: MemberAccess
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: Identifier
      │  │  │     │     │  │     │  └─ name: msg
      │  │  │     │     │  │     └─ memberName: sender
      │  │  │     │     │  └─ index
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: _loanId
      │  │  │     │     └─ isPrefix: true
      │  │  │     └─ 15
      │  │  │        ├─ type: EmitStatement
      │  │  │        └─ eventCall
      │  │  │           ├─ type: FunctionCall
      │  │  │           ├─ expression
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: Repay
      │  │  │           ├─ arguments
      │  │  │           │  ├─ 0
      │  │  │           │  │  ├─ type: MemberAccess
      │  │  │           │  │  ├─ expression
      │  │  │           │  │  │  ├─ type: Identifier
      │  │  │           │  │  │  └─ name: msg
      │  │  │           │  │  └─ memberName: sender
      │  │  │           │  ├─ 1
      │  │  │           │  │  ├─ type: Identifier
      │  │  │           │  │  └─ name: _loanId
      │  │  │           │  ├─ 2
      │  │  │           │  │  ├─ type: MemberAccess
      │  │  │           │  │  ├─ expression
      │  │  │           │  │  │  ├─ type: Identifier
      │  │  │           │  │  │  └─ name: loan
      │  │  │           │  │  └─ memberName: amount
      │  │  │           │  └─ 3
      │  │  │           │     ├─ type: MemberAccess
      │  │  │           │     ├─ expression
      │  │  │           │     │  ├─ type: Identifier
      │  │  │           │     │  └─ name: loan
      │  │  │           │     └─ memberName: interest
      │  │  │           ├─ names
      │  │  │           └─ identifiers
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: payable
      │  ├─ 28
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: set_Borrow_InterestRate
      │  │  ├─ parameters
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _Borrow_interestRate
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _Borrow_interestRate
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: BinaryOperation
      │  │  │     │     │     ├─ operator: ==
      │  │  │     │     │     ├─ left
      │  │  │     │     │     │  ├─ type: MemberAccess
      │  │  │     │     │     │  ├─ expression
      │  │  │     │     │     │  │  ├─ type: Identifier
      │  │  │     │     │     │  │  └─ name: msg
      │  │  │     │     │     │  └─ memberName: sender
      │  │  │     │     │     └─ right
      │  │  │     │     │        ├─ type: Identifier
      │  │  │     │     │        └─ name: owner
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: Borrow_interestRate
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _Borrow_interestRate
      │  │  │     └─ 2
      │  │  │        ├─ type: ExpressionStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: BinaryOperation
      │  │  │           ├─ operator: =
      │  │  │           ├─ left
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: Lending_interestRate
      │  │  │           └─ right
      │  │  │              ├─ type: BinaryOperation
      │  │  │              ├─ operator: *
      │  │  │              ├─ left
      │  │  │              │  ├─ type: Identifier
      │  │  │              │  └─ name: _Borrow_interestRate
      │  │  │              └─ right
      │  │  │                 ├─ type: TupleExpression
      │  │  │                 ├─ components
      │  │  │                 │  └─ 0
      │  │  │                 │     ├─ type: BinaryOperation
      │  │  │                 │     ├─ operator: /
      │  │  │                 │     ├─ left
      │  │  │                 │     │  ├─ type: Identifier
      │  │  │                 │     │  └─ name: totalBorrowed
      │  │  │                 │     └─ right
      │  │  │                 │        ├─ type: Identifier
      │  │  │                 │        └─ name: totalSupply
      │  │  │                 └─ isArray: false
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability
      │  ├─ 29
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: setLoanToCollateral
      │  │  ├─ parameters
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _maxLtv
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _maxLtv
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: BinaryOperation
      │  │  │     │     │     ├─ operator: ==
      │  │  │     │     │     ├─ left
      │  │  │     │     │     │  ├─ type: MemberAccess
      │  │  │     │     │     │  ├─ expression
      │  │  │     │     │     │  │  ├─ type: Identifier
      │  │  │     │     │     │  │  └─ name: msg
      │  │  │     │     │     │  └─ memberName: sender
      │  │  │     │     │     └─ right
      │  │  │     │     │        ├─ type: Identifier
      │  │  │     │     │        └─ name: owner
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     └─ 1
      │  │  │        ├─ type: ExpressionStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: BinaryOperation
      │  │  │           ├─ operator: =
      │  │  │           ├─ left
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: maxLtv
      │  │  │           └─ right
      │  │  │              ├─ type: Identifier
      │  │  │              └─ name: _maxLtv
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability
      │  ├─ 30
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: getUtilization
      │  │  ├─ parameters
      │  │  ├─ returnParameters
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name
      │  │  │     ├─ identifier
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     └─ 0
      │  │  │        ├─ type: ReturnStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: Conditional
      │  │  │           ├─ condition
      │  │  │           │  ├─ type: TupleExpression
      │  │  │           │  ├─ components
      │  │  │           │  │  └─ 0
      │  │  │           │  │     ├─ type: BinaryOperation
      │  │  │           │  │     ├─ operator: ||
      │  │  │           │  │     ├─ left
      │  │  │           │  │     │  ├─ type: BinaryOperation
      │  │  │           │  │     │  ├─ operator: ==
      │  │  │           │  │     │  ├─ left
      │  │  │           │  │     │  │  ├─ type: Identifier
      │  │  │           │  │     │  │  └─ name: totalBorrowed
      │  │  │           │  │     │  └─ right
      │  │  │           │  │     │     ├─ type: NumberLiteral
      │  │  │           │  │     │     ├─ number: 0
      │  │  │           │  │     │     └─ subdenomination
      │  │  │           │  │     └─ right
      │  │  │           │  │        ├─ type: BinaryOperation
      │  │  │           │  │        ├─ operator: ==
      │  │  │           │  │        ├─ left
      │  │  │           │  │        │  ├─ type: Identifier
      │  │  │           │  │        │  └─ name: totalSupply
      │  │  │           │  │        └─ right
      │  │  │           │  │           ├─ type: NumberLiteral
      │  │  │           │  │           ├─ number: 0
      │  │  │           │  │           └─ subdenomination
      │  │  │           │  └─ isArray: false
      │  │  │           ├─ trueExpression
      │  │  │           │  ├─ type: NumberLiteral
      │  │  │           │  ├─ number: 0
      │  │  │           │  └─ subdenomination
      │  │  │           └─ falseExpression
      │  │  │              ├─ type: BinaryOperation
      │  │  │              ├─ operator: *
      │  │  │              ├─ left
      │  │  │              │  ├─ type: TupleExpression
      │  │  │              │  ├─ components
      │  │  │              │  │  └─ 0
      │  │  │              │  │     ├─ type: BinaryOperation
      │  │  │              │  │     ├─ operator: /
      │  │  │              │  │     ├─ left
      │  │  │              │  │     │  ├─ type: Identifier
      │  │  │              │  │     │  └─ name: totalBorrowed
      │  │  │              │  │     └─ right
      │  │  │              │  │        ├─ type: Identifier
      │  │  │              │  │        └─ name: totalSupply
      │  │  │              │  └─ isArray: false
      │  │  │              └─ right
      │  │  │                 ├─ type: NumberLiteral
      │  │  │                 ├─ number: 100
      │  │  │                 └─ subdenomination
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: view
      │  ├─ 31
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: withdraw_liquidateNFT
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: borrowerAddress
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: borrowerAddress
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  └─ 1
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: _loanId
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: _loanId
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: UserDefinedTypeName
      │  │  │     │  │     │  └─ namePath: Loan
      │  │  │     │  │     ├─ name: loan
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: loan
      │  │  │     │  │     ├─ storageLocation: storage
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: IndexAccess
      │  │  │     │     ├─ base
      │  │  │     │     │  ├─ type: IndexAccess
      │  │  │     │     │  ├─ base
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: loans
      │  │  │     │     │  └─ index
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: borrowerAddress
      │  │  │     │     └─ index
      │  │  │     │        ├─ type: Identifier
      │  │  │     │        └─ name: _loanId
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: <
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: loan
      │  │  │     │     │  │  │  └─ memberName: time
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: MemberAccess
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: Identifier
      │  │  │     │     │  │     │  └─ name: block
      │  │  │     │     │  │     └─ memberName: timestamp
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: not liquidated
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: not liquidated
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 2
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: ==
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: loan
      │  │  │     │     │  │  │  └─ memberName: active
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: BooleanLiteral
      │  │  │     │     │  │     └─ value: false
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Debt payed
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Debt payed
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 3
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: amount
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: amount
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: MemberAccess
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: loan
      │  │  │     │     └─ memberName: collateralValue
      │  │  │     ├─ 4
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  ├─ 0
      │  │  │     │  │  │  ├─ type: VariableDeclaration
      │  │  │     │  │  │  ├─ name: success
      │  │  │     │  │  │  ├─ identifier
      │  │  │     │  │  │  │  ├─ type: Identifier
      │  │  │     │  │  │  │  └─ name: success
      │  │  │     │  │  │  ├─ typeName
      │  │  │     │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │     │  │  │  │  ├─ name: bool
      │  │  │     │  │  │  │  └─ stateMutability
      │  │  │     │  │  │  ├─ storageLocation
      │  │  │     │  │  │  ├─ isStateVar: false
      │  │  │     │  │  │  ├─ isIndexed: false
      │  │  │     │  │  │  └─ expression
      │  │  │     │  │  └─ 1
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: NameValueExpression
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: TupleExpression
      │  │  │     │     │  │  │  ├─ components
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: FunctionCall
      │  │  │     │     │  │  │  │     ├─ expression
      │  │  │     │     │  │  │  │     │  ├─ type: Identifier
      │  │  │     │     │  │  │  │     │  └─ name: address
      │  │  │     │     │  │  │  │     ├─ arguments
      │  │  │     │     │  │  │  │     │  └─ 0
      │  │  │     │     │  │  │  │     │     ├─ type: Identifier
      │  │  │     │     │  │  │  │     │     └─ name: this
      │  │  │     │     │  │  │  │     ├─ names
      │  │  │     │     │  │  │  │     └─ identifiers
      │  │  │     │     │  │  │  └─ isArray: false
      │  │  │     │     │  │  └─ memberName: call
      │  │  │     │     │  └─ arguments
      │  │  │     │     │     ├─ type: NameValueList
      │  │  │     │     │     ├─ names
      │  │  │     │     │     │  └─ 0: value
      │  │  │     │     │     ├─ identifiers
      │  │  │     │     │     │  └─ 0
      │  │  │     │     │     │     ├─ type: Identifier
      │  │  │     │     │     │     └─ name: value
      │  │  │     │     │     └─ arguments
      │  │  │     │     │        └─ 0
      │  │  │     │     │           ├─ type: Identifier
      │  │  │     │     │           └─ name: amount
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: 
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: 
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     └─ 5
      │  │  │        ├─ type: ExpressionStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: FunctionCall
      │  │  │           ├─ expression
      │  │  │           │  ├─ type: Identifier
      │  │  │           │  └─ name: require
      │  │  │           ├─ arguments
      │  │  │           │  ├─ 0
      │  │  │           │  │  ├─ type: Identifier
      │  │  │           │  │  └─ name: success
      │  │  │           │  └─ 1
      │  │  │           │     ├─ type: StringLiteral
      │  │  │           │     ├─ value: Internal error funds not transferred
      │  │  │           │     ├─ parts
      │  │  │           │     │  └─ 0: Internal error funds not transferred
      │  │  │           │     └─ isUnicode
      │  │  │           │        └─ 0: false
      │  │  │           ├─ names
      │  │  │           └─ identifiers
      │  │  ├─ visibility: external
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: payable
      │  ├─ 32
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: getNftCollateralValue
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _tokenContract
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _tokenContract
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  └─ 1
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: tokenId
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: tokenId
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  │  └─ 0
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name
      │  │  │     ├─ identifier
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  │     │  ├─ name: uint256
      │  │  │     │  │     │  └─ stateMutability
      │  │  │     │  │     ├─ name: price
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: price
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: getNFTPrice
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: _tokenContract
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: tokenId
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     └─ 1
      │  │  │        ├─ type: IfStatement
      │  │  │        ├─ condition
      │  │  │        │  ├─ type: FunctionCall
      │  │  │        │  ├─ expression
      │  │  │        │  │  ├─ type: MemberAccess
      │  │  │        │  │  ├─ expression
      │  │  │        │  │  │  ├─ type: FunctionCall
      │  │  │        │  │  │  ├─ expression
      │  │  │        │  │  │  │  ├─ type: Identifier
      │  │  │        │  │  │  │  └─ name: IERC165
      │  │  │        │  │  │  ├─ arguments
      │  │  │        │  │  │  │  └─ 0
      │  │  │        │  │  │  │     ├─ type: Identifier
      │  │  │        │  │  │  │     └─ name: _tokenContract
      │  │  │        │  │  │  ├─ names
      │  │  │        │  │  │  └─ identifiers
      │  │  │        │  │  └─ memberName: supportsInterface
      │  │  │        │  ├─ arguments
      │  │  │        │  │  └─ 0
      │  │  │        │  │     ├─ type: MemberAccess
      │  │  │        │  │     ├─ expression
      │  │  │        │  │     │  ├─ type: FunctionCall
      │  │  │        │  │     │  ├─ expression
      │  │  │        │  │     │  │  ├─ type: Identifier
      │  │  │        │  │     │  │  └─ name: type
      │  │  │        │  │     │  ├─ arguments
      │  │  │        │  │     │  │  └─ 0
      │  │  │        │  │     │  │     ├─ type: Identifier
      │  │  │        │  │     │  │     └─ name: IERC721Metadata
      │  │  │        │  │     │  ├─ names
      │  │  │        │  │     │  └─ identifiers
      │  │  │        │  │     └─ memberName: interfaceId
      │  │  │        │  ├─ names
      │  │  │        │  └─ identifiers
      │  │  │        ├─ trueBody
      │  │  │        │  ├─ type: Block
      │  │  │        │  └─ statements
      │  │  │        │     └─ 0
      │  │  │        │        ├─ type: ReturnStatement
      │  │  │        │        └─ expression
      │  │  │        │           ├─ type: Identifier
      │  │  │        │           └─ name: price
      │  │  │        └─ falseBody
      │  │  │           ├─ type: Block
      │  │  │           └─ statements
      │  │  │              └─ 0
      │  │  │                 ├─ type: ExpressionStatement
      │  │  │                 └─ expression
      │  │  │                    ├─ type: FunctionCall
      │  │  │                    ├─ expression
      │  │  │                    │  ├─ type: Identifier
      │  │  │                    │  └─ name: revert
      │  │  │                    ├─ arguments
      │  │  │                    │  └─ 0
      │  │  │                    │     ├─ type: StringLiteral
      │  │  │                    │     ├─ value: Unsupported token type
      │  │  │                    │     ├─ parts
      │  │  │                    │     │  └─ 0: Unsupported token type
      │  │  │                    │     └─ isUnicode
      │  │  │                    │        └─ 0: false
      │  │  │                    ├─ names
      │  │  │                    └─ identifiers
      │  │  ├─ visibility: public
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability: view
      │  ├─ 33
      │  │  ├─ type: FunctionDefinition
      │  │  ├─ name: depositERC721Collateral
      │  │  ├─ parameters
      │  │  │  ├─ 0
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: borrower
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: borrower
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  ├─ 1
      │  │  │  │  ├─ type: VariableDeclaration
      │  │  │  │  ├─ typeName
      │  │  │  │  │  ├─ type: ElementaryTypeName
      │  │  │  │  │  ├─ name: address
      │  │  │  │  │  └─ stateMutability
      │  │  │  │  ├─ name: _tokenContract
      │  │  │  │  ├─ identifier
      │  │  │  │  │  ├─ type: Identifier
      │  │  │  │  │  └─ name: _tokenContract
      │  │  │  │  ├─ storageLocation
      │  │  │  │  ├─ isStateVar: false
      │  │  │  │  ├─ isIndexed: false
      │  │  │  │  └─ expression
      │  │  │  └─ 2
      │  │  │     ├─ type: VariableDeclaration
      │  │  │     ├─ typeName
      │  │  │     │  ├─ type: ElementaryTypeName
      │  │  │     │  ├─ name: uint256
      │  │  │     │  └─ stateMutability
      │  │  │     ├─ name: tokenId
      │  │  │     ├─ identifier
      │  │  │     │  ├─ type: Identifier
      │  │  │     │  └─ name: tokenId
      │  │  │     ├─ storageLocation
      │  │  │     ├─ isStateVar: false
      │  │  │     ├─ isIndexed: false
      │  │  │     └─ expression
      │  │  ├─ returnParameters
      │  │  ├─ body
      │  │  │  ├─ type: Block
      │  │  │  └─ statements
      │  │  │     ├─ 0
      │  │  │     │  ├─ type: VariableDeclarationStatement
      │  │  │     │  ├─ variables
      │  │  │     │  │  └─ 0
      │  │  │     │  │     ├─ type: VariableDeclaration
      │  │  │     │  │     ├─ typeName
      │  │  │     │  │     │  ├─ type: UserDefinedTypeName
      │  │  │     │  │     │  └─ namePath: IERC721Enumerable
      │  │  │     │  │     ├─ name: token
      │  │  │     │  │     ├─ identifier
      │  │  │     │  │     │  ├─ type: Identifier
      │  │  │     │  │     │  └─ name: token
      │  │  │     │  │     ├─ storageLocation
      │  │  │     │  │     ├─ isStateVar: false
      │  │  │     │  │     ├─ isIndexed: false
      │  │  │     │  │     └─ expression
      │  │  │     │  └─ initialValue
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: IERC721Enumerable
      │  │  │     │     ├─ arguments
      │  │  │     │     │  └─ 0
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: _tokenContract
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 1
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: ==
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  └─ name: msg
      │  │  │     │     │  │  │  └─ memberName: sender
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: Identifier
      │  │  │     │     │  │     └─ name: borrower
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Only borrower can deposit collateral
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Only borrower can deposit collateral
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 2
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: >
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  │  └─ name: token
      │  │  │     │     │  │  │  │  └─ memberName: balanceOf
      │  │  │     │     │  │  │  ├─ arguments
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │  │     └─ name: borrower
      │  │  │     │     │  │  │  ├─ names
      │  │  │     │     │  │  │  └─ identifiers
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: NumberLiteral
      │  │  │     │     │  │     ├─ number: 0
      │  │  │     │     │  │     └─ subdenomination
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Borrower has no tokens
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Borrower has no tokens
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 3
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: ==
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  │  └─ name: token
      │  │  │     │     │  │  │  │  └─ memberName: ownerOf
      │  │  │     │     │  │  │  ├─ arguments
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │  │     └─ name: tokenId
      │  │  │     │     │  │  │  ├─ names
      │  │  │     │     │  │  │  └─ identifiers
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: Identifier
      │  │  │     │     │  │     └─ name: borrower
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Borrower is not the owner of the token
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Borrower is not the owner of the token
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 4
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: Identifier
      │  │  │     │     │  └─ name: require
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: BinaryOperation
      │  │  │     │     │  │  ├─ operator: <=
      │  │  │     │     │  │  ├─ left
      │  │  │     │     │  │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  ├─ type: MemberAccess
      │  │  │     │     │  │  │  │  ├─ expression
      │  │  │     │     │  │  │  │  │  ├─ type: IndexAccess
      │  │  │     │     │  │  │  │  │  ├─ base
      │  │  │     │     │  │  │  │  │  │  ├─ type: IndexAccess
      │  │  │     │     │  │  │  │  │  │  ├─ base
      │  │  │     │     │  │  │  │  │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  │  │  │  │  └─ name: tokenColletralNum
      │  │  │     │     │  │  │  │  │  │  └─ index
      │  │  │     │     │  │  │  │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │  │  │  │     └─ name: borrower
      │  │  │     │     │  │  │  │  │  └─ index
      │  │  │     │     │  │  │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │  │  │     └─ name: _tokenContract
      │  │  │     │     │  │  │  │  └─ memberName: add
      │  │  │     │     │  │  │  ├─ arguments
      │  │  │     │     │  │  │  │  └─ 0
      │  │  │     │     │  │  │  │     ├─ type: NumberLiteral
      │  │  │     │     │  │  │  │     ├─ number: 1
      │  │  │     │     │  │  │  │     └─ subdenomination
      │  │  │     │     │  │  │  ├─ names
      │  │  │     │     │  │  │  └─ identifiers
      │  │  │     │     │  │  └─ right
      │  │  │     │     │  │     ├─ type: FunctionCall
      │  │  │     │     │  │     ├─ expression
      │  │  │     │     │  │     │  ├─ type: MemberAccess
      │  │  │     │     │  │     │  ├─ expression
      │  │  │     │     │  │     │  │  ├─ type: Identifier
      │  │  │     │     │  │     │  │  └─ name: token
      │  │  │     │     │  │     │  └─ memberName: balanceOf
      │  │  │     │     │  │     ├─ arguments
      │  │  │     │     │  │     │  └─ 0
      │  │  │     │     │  │     │     ├─ type: Identifier
      │  │  │     │     │  │     │     └─ name: borrower
      │  │  │     │     │  │     ├─ names
      │  │  │     │     │  │     └─ identifiers
      │  │  │     │     │  └─ 1
      │  │  │     │     │     ├─ type: StringLiteral
      │  │  │     │     │     ├─ value: Borrower has no remaining collateral slots
      │  │  │     │     │     ├─ parts
      │  │  │     │     │     │  └─ 0: Borrower has no remaining collateral slots
      │  │  │     │     │     └─ isUnicode
      │  │  │     │     │        └─ 0: false
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 5
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: FunctionCall
      │  │  │     │     ├─ expression
      │  │  │     │     │  ├─ type: MemberAccess
      │  │  │     │     │  ├─ expression
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: token
      │  │  │     │     │  └─ memberName: transferFrom
      │  │  │     │     ├─ arguments
      │  │  │     │     │  ├─ 0
      │  │  │     │     │  │  ├─ type: Identifier
      │  │  │     │     │  │  └─ name: borrower
      │  │  │     │     │  ├─ 1
      │  │  │     │     │  │  ├─ type: FunctionCall
      │  │  │     │     │  │  ├─ expression
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: address
      │  │  │     │     │  │  ├─ arguments
      │  │  │     │     │  │  │  └─ 0
      │  │  │     │     │  │  │     ├─ type: Identifier
      │  │  │     │     │  │  │     └─ name: this
      │  │  │     │     │  │  ├─ names
      │  │  │     │     │  │  └─ identifiers
      │  │  │     │     │  └─ 2
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: tokenId
      │  │  │     │     ├─ names
      │  │  │     │     └─ identifiers
      │  │  │     ├─ 6
      │  │  │     │  ├─ type: ExpressionStatement
      │  │  │     │  └─ expression
      │  │  │     │     ├─ type: BinaryOperation
      │  │  │     │     ├─ operator: =
      │  │  │     │     ├─ left
      │  │  │     │     │  ├─ type: IndexAccess
      │  │  │     │     │  ├─ base
      │  │  │     │     │  │  ├─ type: IndexAccess
      │  │  │     │     │  │  ├─ base
      │  │  │     │     │  │  │  ├─ type: Identifier
      │  │  │     │     │  │  │  └─ name: tokenColletralNum
      │  │  │     │     │  │  └─ index
      │  │  │     │     │  │     ├─ type: Identifier
      │  │  │     │     │  │     └─ name: borrower
      │  │  │     │     │  └─ index
      │  │  │     │     │     ├─ type: Identifier
      │  │  │     │     │     └─ name: _tokenContract
      │  │  │     │     └─ right
      │  │  │     │        ├─ type: FunctionCall
      │  │  │     │        ├─ expression
      │  │  │     │        │  ├─ type: MemberAccess
      │  │  │     │        │  ├─ expression
      │  │  │     │        │  │  ├─ type: IndexAccess
      │  │  │     │        │  │  ├─ base
      │  │  │     │        │  │  │  ├─ type: IndexAccess
      │  │  │     │        │  │  │  ├─ base
      │  │  │     │        │  │  │  │  ├─ type: Identifier
      │  │  │     │        │  │  │  │  └─ name: tokenColletralNum
      │  │  │     │        │  │  │  └─ index
      │  │  │     │        │  │  │     ├─ type: Identifier
      │  │  │     │        │  │  │     └─ name: borrower
      │  │  │     │        │  │  └─ index
      │  │  │     │        │  │     ├─ type: Identifier
      │  │  │     │        │  │     └─ name: _tokenContract
      │  │  │     │        │  └─ memberName: add
      │  │  │     │        ├─ arguments
      │  │  │     │        │  └─ 0
      │  │  │     │        │     ├─ type: NumberLiteral
      │  │  │     │        │     ├─ number: 1
      │  │  │     │        │     └─ subdenomination
      │  │  │     │        ├─ names
      │  │  │     │        └─ identifiers
      │  │  │     └─ 7
      │  │  │        ├─ type: ExpressionStatement
      │  │  │        └─ expression
      │  │  │           ├─ type: BinaryOperation
      │  │  │           ├─ operator: =
      │  │  │           ├─ left
      │  │  │           │  ├─ type: IndexAccess
      │  │  │           │  ├─ base
      │  │  │           │  │  ├─ type: Identifier
      │  │  │           │  │  └─ name: individualCOlletralNum
      │  │  │           │  └─ index
      │  │  │           │     ├─ type: Identifier
      │  │  │           │     └─ name: borrower
      │  │  │           └─ right
      │  │  │              ├─ type: FunctionCall
      │  │  │              ├─ expression
      │  │  │              │  ├─ type: MemberAccess
      │  │  │              │  ├─ expression
      │  │  │              │  │  ├─ type: IndexAccess
      │  │  │              │  │  ├─ base
      │  │  │              │  │  │  ├─ type: Identifier
      │  │  │              │  │  │  └─ name: individualCOlletralNum
      │  │  │              │  │  └─ index
      │  │  │              │  │     ├─ type: Identifier
      │  │  │              │  │     └─ name: borrower
      │  │  │              │  └─ memberName: add
      │  │  │              ├─ arguments
      │  │  │              │  └─ 0
      │  │  │              │     ├─ type: NumberLiteral
      │  │  │              │     ├─ number: 1
      │  │  │              │     └─ subdenomination
      │  │  │              ├─ names
      │  │  │              └─ identifiers
      │  │  ├─ visibility: internal
      │  │  ├─ modifiers
      │  │  ├─ override
      │  │  ├─ isConstructor: false
      │  │  ├─ isReceiveEther: false
      │  │  ├─ isFallback: false
      │  │  ├─ isVirtual: false
      │  │  └─ stateMutability
      │  └─ 34
      │     ├─ type: FunctionDefinition
      │     ├─ name: withdrawERC721Collateral
      │     ├─ parameters
      │     │  ├─ 0
      │     │  │  ├─ type: VariableDeclaration
      │     │  │  ├─ typeName
      │     │  │  │  ├─ type: ElementaryTypeName
      │     │  │  │  ├─ name: address
      │     │  │  │  └─ stateMutability
      │     │  │  ├─ name: borrower
      │     │  │  ├─ identifier
      │     │  │  │  ├─ type: Identifier
      │     │  │  │  └─ name: borrower
      │     │  │  ├─ storageLocation
      │     │  │  ├─ isStateVar: false
      │     │  │  ├─ isIndexed: false
      │     │  │  └─ expression
      │     │  ├─ 1
      │     │  │  ├─ type: VariableDeclaration
      │     │  │  ├─ typeName
      │     │  │  │  ├─ type: ElementaryTypeName
      │     │  │  │  ├─ name: address
      │     │  │  │  └─ stateMutability
      │     │  │  ├─ name: _tokenContract
      │     │  │  ├─ identifier
      │     │  │  │  ├─ type: Identifier
      │     │  │  │  └─ name: _tokenContract
      │     │  │  ├─ storageLocation
      │     │  │  ├─ isStateVar: false
      │     │  │  ├─ isIndexed: false
      │     │  │  └─ expression
      │     │  └─ 2
      │     │     ├─ type: VariableDeclaration
      │     │     ├─ typeName
      │     │     │  ├─ type: ElementaryTypeName
      │     │     │  ├─ name: uint256
      │     │     │  └─ stateMutability
      │     │     ├─ name: tokenId
      │     │     ├─ identifier
      │     │     │  ├─ type: Identifier
      │     │     │  └─ name: tokenId
      │     │     ├─ storageLocation
      │     │     ├─ isStateVar: false
      │     │     ├─ isIndexed: false
      │     │     └─ expression
      │     ├─ returnParameters
      │     ├─ body
      │     │  ├─ type: Block
      │     │  └─ statements
      │     │     ├─ 0
      │     │     │  ├─ type: VariableDeclarationStatement
      │     │     │  ├─ variables
      │     │     │  │  └─ 0
      │     │     │  │     ├─ type: VariableDeclaration
      │     │     │  │     ├─ typeName
      │     │     │  │     │  ├─ type: UserDefinedTypeName
      │     │     │  │     │  └─ namePath: IERC721Enumerable
      │     │     │  │     ├─ name: token
      │     │     │  │     ├─ identifier
      │     │     │  │     │  ├─ type: Identifier
      │     │     │  │     │  └─ name: token
      │     │     │  │     ├─ storageLocation
      │     │     │  │     ├─ isStateVar: false
      │     │     │  │     ├─ isIndexed: false
      │     │     │  │     └─ expression
      │     │     │  └─ initialValue
      │     │     │     ├─ type: FunctionCall
      │     │     │     ├─ expression
      │     │     │     │  ├─ type: Identifier
      │     │     │     │  └─ name: IERC721Enumerable
      │     │     │     ├─ arguments
      │     │     │     │  └─ 0
      │     │     │     │     ├─ type: Identifier
      │     │     │     │     └─ name: _tokenContract
      │     │     │     ├─ names
      │     │     │     └─ identifiers
      │     │     ├─ 1
      │     │     │  ├─ type: ExpressionStatement
      │     │     │  └─ expression
      │     │     │     ├─ type: FunctionCall
      │     │     │     ├─ expression
      │     │     │     │  ├─ type: Identifier
      │     │     │     │  └─ name: require
      │     │     │     ├─ arguments
      │     │     │     │  ├─ 0
      │     │     │     │  │  ├─ type: BinaryOperation
      │     │     │     │  │  ├─ operator: ==
      │     │     │     │  │  ├─ left
      │     │     │     │  │  │  ├─ type: MemberAccess
      │     │     │     │  │  │  ├─ expression
      │     │     │     │  │  │  │  ├─ type: Identifier
      │     │     │     │  │  │  │  └─ name: msg
      │     │     │     │  │  │  └─ memberName: sender
      │     │     │     │  │  └─ right
      │     │     │     │  │     ├─ type: Identifier
      │     │     │     │  │     └─ name: borrower
      │     │     │     │  └─ 1
      │     │     │     │     ├─ type: StringLiteral
      │     │     │     │     ├─ value: Only borrower can withdraw collateral
      │     │     │     │     ├─ parts
      │     │     │     │     │  └─ 0: Only borrower can withdraw collateral
      │     │     │     │     └─ isUnicode
      │     │     │     │        └─ 0: false
      │     │     │     ├─ names
      │     │     │     └─ identifiers
      │     │     ├─ 2
      │     │     │  ├─ type: ExpressionStatement
      │     │     │  └─ expression
      │     │     │     ├─ type: FunctionCall
      │     │     │     ├─ expression
      │     │     │     │  ├─ type: Identifier
      │     │     │     │  └─ name: require
      │     │     │     ├─ arguments
      │     │     │     │  ├─ 0
      │     │     │     │  │  ├─ type: BinaryOperation
      │     │     │     │  │  ├─ operator: >
      │     │     │     │  │  ├─ left
      │     │     │     │  │  │  ├─ type: IndexAccess
      │     │     │     │  │  │  ├─ base
      │     │     │     │  │  │  │  ├─ type: IndexAccess
      │     │     │     │  │  │  │  ├─ base
      │     │     │     │  │  │  │  │  ├─ type: Identifier
      │     │     │     │  │  │  │  │  └─ name: tokenColletralNum
      │     │     │     │  │  │  │  └─ index
      │     │     │     │  │  │  │     ├─ type: Identifier
      │     │     │     │  │  │  │     └─ name: borrower
      │     │     │     │  │  │  └─ index
      │     │     │     │  │  │     ├─ type: Identifier
      │     │     │     │  │  │     └─ name: _tokenContract
      │     │     │     │  │  └─ right
      │     │     │     │  │     ├─ type: NumberLiteral
      │     │     │     │  │     ├─ number: 0
      │     │     │     │  │     └─ subdenomination
      │     │     │     │  └─ 1
      │     │     │     │     ├─ type: StringLiteral
      │     │     │     │     ├─ value: Borrower has no collateral to withdraw
      │     │     │     │     ├─ parts
      │     │     │     │     │  └─ 0: Borrower has no collateral to withdraw
      │     │     │     │     └─ isUnicode
      │     │     │     │        └─ 0: false
      │     │     │     ├─ names
      │     │     │     └─ identifiers
      │     │     ├─ 3
      │     │     │  ├─ type: ExpressionStatement
      │     │     │  └─ expression
      │     │     │     ├─ type: FunctionCall
      │     │     │     ├─ expression
      │     │     │     │  ├─ type: Identifier
      │     │     │     │  └─ name: require
      │     │     │     ├─ arguments
      │     │     │     │  ├─ 0
      │     │     │     │  │  ├─ type: BinaryOperation
      │     │     │     │  │  ├─ operator: ==
      │     │     │     │  │  ├─ left
      │     │     │     │  │  │  ├─ type: FunctionCall
      │     │     │     │  │  │  ├─ expression
      │     │     │     │  │  │  │  ├─ type: MemberAccess
      │     │     │     │  │  │  │  ├─ expression
      │     │     │     │  │  │  │  │  ├─ type: Identifier
      │     │     │     │  │  │  │  │  └─ name: token
      │     │     │     │  │  │  │  └─ memberName: ownerOf
      │     │     │     │  │  │  ├─ arguments
      │     │     │     │  │  │  │  └─ 0
      │     │     │     │  │  │  │     ├─ type: Identifier
      │     │     │     │  │  │  │     └─ name: tokenId
      │     │     │     │  │  │  ├─ names
      │     │     │     │  │  │  └─ identifiers
      │     │     │     │  │  └─ right
      │     │     │     │  │     ├─ type: FunctionCall
      │     │     │     │  │     ├─ expression
      │     │     │     │  │     │  ├─ type: Identifier
      │     │     │     │  │     │  └─ name: address
      │     │     │     │  │     ├─ arguments
      │     │     │     │  │     │  └─ 0
      │     │     │     │  │     │     ├─ type: Identifier
      │     │     │     │  │     │     └─ name: this
      │     │     │     │  │     ├─ names
      │     │     │     │  │     └─ identifiers
      │     │     │     │  └─ 1
      │     │     │     │     ├─ type: StringLiteral
      │     │     │     │     ├─ value: Token is not being used as collateral
      │     │     │     │     ├─ parts
      │     │     │     │     │  └─ 0: Token is not being used as collateral
      │     │     │     │     └─ isUnicode
      │     │     │     │        └─ 0: false
      │     │     │     ├─ names
      │     │     │     └─ identifiers
      │     │     ├─ 4
      │     │     │  ├─ type: ExpressionStatement
      │     │     │  └─ expression
      │     │     │     ├─ type: FunctionCall
      │     │     │     ├─ expression
      │     │     │     │  ├─ type: MemberAccess
      │     │     │     │  ├─ expression
      │     │     │     │  │  ├─ type: Identifier
      │     │     │     │  │  └─ name: token
      │     │     │     │  └─ memberName: transferFrom
      │     │     │     ├─ arguments
      │     │     │     │  ├─ 0
      │     │     │     │  │  ├─ type: FunctionCall
      │     │     │     │  │  ├─ expression
      │     │     │     │  │  │  ├─ type: Identifier
      │     │     │     │  │  │  └─ name: address
      │     │     │     │  │  ├─ arguments
      │     │     │     │  │  │  └─ 0
      │     │     │     │  │  │     ├─ type: Identifier
      │     │     │     │  │  │     └─ name: this
      │     │     │     │  │  ├─ names
      │     │     │     │  │  └─ identifiers
      │     │     │     │  ├─ 1
      │     │     │     │  │  ├─ type: Identifier
      │     │     │     │  │  └─ name: borrower
      │     │     │     │  └─ 2
      │     │     │     │     ├─ type: Identifier
      │     │     │     │     └─ name: tokenId
      │     │     │     ├─ names
      │     │     │     └─ identifiers
      │     │     ├─ 5
      │     │     │  ├─ type: ExpressionStatement
      │     │     │  └─ expression
      │     │     │     ├─ type: BinaryOperation
      │     │     │     ├─ operator: =
      │     │     │     ├─ left
      │     │     │     │  ├─ type: IndexAccess
      │     │     │     │  ├─ base
      │     │     │     │  │  ├─ type: IndexAccess
      │     │     │     │  │  ├─ base
      │     │     │     │  │  │  ├─ type: Identifier
      │     │     │     │  │  │  └─ name: tokenColletralNum
      │     │     │     │  │  └─ index
      │     │     │     │  │     ├─ type: Identifier
      │     │     │     │  │     └─ name: borrower
      │     │     │     │  └─ index
      │     │     │     │     ├─ type: Identifier
      │     │     │     │     └─ name: _tokenContract
      │     │     │     └─ right
      │     │     │        ├─ type: FunctionCall
      │     │     │        ├─ expression
      │     │     │        │  ├─ type: MemberAccess
      │     │     │        │  ├─ expression
      │     │     │        │  │  ├─ type: IndexAccess
      │     │     │        │  │  ├─ base
      │     │     │        │  │  │  ├─ type: IndexAccess
      │     │     │        │  │  │  ├─ base
      │     │     │        │  │  │  │  ├─ type: Identifier
      │     │     │        │  │  │  │  └─ name: tokenColletralNum
      │     │     │        │  │  │  └─ index
      │     │     │        │  │  │     ├─ type: Identifier
      │     │     │        │  │  │     └─ name: borrower
      │     │     │        │  │  └─ index
      │     │     │        │  │     ├─ type: Identifier
      │     │     │        │  │     └─ name: _tokenContract
      │     │     │        │  └─ memberName: sub
      │     │     │        ├─ arguments
      │     │     │        │  └─ 0
      │     │     │        │     ├─ type: NumberLiteral
      │     │     │        │     ├─ number: 1
      │     │     │        │     └─ subdenomination
      │     │     │        ├─ names
      │     │     │        └─ identifiers
      │     │     └─ 6
      │     │        ├─ type: ExpressionStatement
      │     │        └─ expression
      │     │           ├─ type: BinaryOperation
      │     │           ├─ operator: =
      │     │           ├─ left
      │     │           │  ├─ type: IndexAccess
      │     │           │  ├─ base
      │     │           │  │  ├─ type: Identifier
      │     │           │  │  └─ name: individualCOlletralNum
      │     │           │  └─ index
      │     │           │     ├─ type: Identifier
      │     │           │     └─ name: borrower
      │     │           └─ right
      │     │              ├─ type: FunctionCall
      │     │              ├─ expression
      │     │              │  ├─ type: MemberAccess
      │     │              │  ├─ expression
      │     │              │  │  ├─ type: IndexAccess
      │     │              │  │  ├─ base
      │     │              │  │  │  ├─ type: Identifier
      │     │              │  │  │  └─ name: individualCOlletralNum
      │     │              │  │  └─ index
      │     │              │  │     ├─ type: Identifier
      │     │              │  │     └─ name: borrower
      │     │              │  └─ memberName: sub
      │     │              ├─ arguments
      │     │              │  └─ 0
      │     │              │     ├─ type: NumberLiteral
      │     │              │     ├─ number: 1
      │     │              │     └─ subdenomination
      │     │              ├─ names
      │     │              └─ identifiers
      │     ├─ visibility: internal
      │     ├─ modifiers
      │     ├─ override
      │     ├─ isConstructor: false
      │     ├─ isReceiveEther: false
      │     ├─ isFallback: false
      │     ├─ isVirtual: false
      │     └─ stateMutability
      └─ kind: contract
