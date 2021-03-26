// contracts/NewCoin.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("NewCoin", "NCI") {
        _mint(msg.sender, initialSupply);
    }
}