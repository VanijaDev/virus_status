const VirusStatusContract = artifacts.require("VirusStatusContract");

const {
  BN,
  expectRevert
} = require('@openzeppelin/test-helpers');
const { assert } = require('chai');

contract("VirusStatusContract", function(accounts) {

  let contract;
  const ACCOUNTS_1 = accounts[1];

  beforeEach("deploy contract", async function() {
    contract = await VirusStatusContract.new();
  });

  describe("setStatus", function() {
    it("should fail with 'not owner' if not owner", async function() {
      await expectRevert(contract.setStatus("0", 1, {
        from: ACCOUNTS_1
      }), "Ownable: caller is not the owner");
    });

    it("should fail with 'wrong status' if passed not 1 or 2", async function() {
      await expectRevert(contract.setStatus("0", 0), "wrong status");
      await expectRevert(contract.setStatus("1", 3), "wrong status");
      await expectRevert(contract.setStatus("22", 11), "wrong status");
    });

    it("should set correct status", async function() {
      //  11
      assert.equal(await contract.status.call("11"), 0, "11: should be 0 before");
      await contract.setStatus("11", 1);
      assert.equal(await contract.status.call("11"), 1, "11: should be 1 after");

      // //  1
      assert.equal(await contract.status.call("1"), 0, "1: should be 0 before");
      await contract.setStatus("1", 2);
      assert.equal(await contract.status.call("1"), 2, "1: should be 2 after");
    });

    it("should set correct status on update", async function() {
      //  11
      await contract.setStatus("11", 1);
      assert.equal(await contract.status.call("11"), 1, "11: should be 1 before");
      await contract.setStatus("11", 2);
      assert.equal(await contract.status.call("11"), 2, "11: should be 2 after");

      //  1
      await contract.setStatus("1", 2);
      assert.equal(await contract.status.call("1"), 2, "1: should be 2 before");
      await contract.setStatus("1", 1);
      assert.equal(await contract.status.call("1"), 1, "1: should be 1 after");
    });

    it("should keep same status if same is provided", async function() {
      //  11
      await contract.setStatus("11", 1);
      assert.equal(await contract.status.call("11"), 1, "11: should be 1 before");
      await contract.setStatus("11", 1);
      assert.equal(await contract.status.call("11"), 1, "11: should be 1 after");

      //  1
      await contract.setStatus("1", 2);
      assert.equal(await contract.status.call("1"), 2, "1: should be 2 before");
      await contract.setStatus("1", 2);
      assert.equal(await contract.status.call("1"), 2, "1: should be 2 after");
    });
  });
});
