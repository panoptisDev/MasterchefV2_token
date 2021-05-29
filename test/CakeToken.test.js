const { assert } = require("chai");

const EggToken = artifacts.require('EggToken');

contract('EggToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.egg = await EggToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.egg.mint(alice, 1000, { from: minter });
        assert.equal((await this.egg.balanceOf(alice)).toString(), '1000');
        // assert.equal((await this.egg.balanceOf(bob)).toString(), '1000');
    })
});
