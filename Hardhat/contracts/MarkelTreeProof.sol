pragma solidity ^0.8.6;

contract MerkleTreeProof {
    bytes32 public root;

    function generateMerkleTree(bytes32[] memory leafNodes) public {
        root = createMerkleTree(leafNodes, 0, leafNodes.length - 1);
    }

    function createMerkleTree(bytes32[] memory leafNodes, uint left, uint right) private returns (bytes32) {
        if (left == right) {
            return leafNodes[left];
        } else {
            uint mid = left + (right - left) / 2;
            bytes32 leftChild = createMerkleTree(leafNodes, left, mid);
            bytes32 rightChild = createMerkleTree(leafNodes, mid + 1, right);
            return sha256(abi.encodePacked(leftChild, rightChild));
        }
    }

    function generateProof(bytes32 leafNode, uint index, bytes32[] memory proof) public view returns (bool) {
        bytes32 computedHash = leafNode;
        for (uint i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];
            if (index % 2 == 0) {
                computedHash = sha256(abi.encodePacked(computedHash, proofElement));
            } else {
                computedHash = sha256(abi.encodePacked(proofElement, computedHash));
            }
            index /= 2;
        }
        return computedHash == root;
    }

    function generateProofs(bytes32[] memory leafNodes, bytes32[][] memory proofs) public view returns (bool[] memory) {
        bool[] memory results = new bool[](leafNodes.length);
        for (uint i = 0; i < leafNodes.length; i++) {
            results[i] = generateProof(leafNodes[i], i, proofs[i]);
        }
        return results;
    }
}
