"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const utils_1 = require("../utils");
const demoutils_1 = require("./demoutils");
console.log('\n\n### Object ###\n');
console.log(demoutils_1.demoinput);
console.log('\n\n### Leafs ###\n');
const leafs = __1.PreciseProofs.createLeafs(demoutils_1.demoinput);
console.log(leafs);
console.log('\n\n### The Merkle Tree ###\n');
const merkleTree = __1.PreciseProofs.createMerkleTree(leafs.map((leaf) => leaf.hash));
const rootHash = __1.PreciseProofs.getRootHash(merkleTree);
console.log(merkleTree);
console.log("\n Root hash:" + rootHash);
utils_1.printMerkleTree(merkleTree, leafs);
console.log('\n\n### Proof ###\n');
const theProof = __1.PreciseProofs.createProof('street', leafs, false);
theProof.value = 'something that is not true';
console.log(theProof);
console.log("\nVerifying the proof to the root hash: " + rootHash);
console.log("Result: " + __1.PreciseProofs.verifyProof(rootHash, theProof));
//# sourceMappingURL=2_demo_invalidproof.js.map