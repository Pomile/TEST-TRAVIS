import "mocha";
import chai from "chai";
import arithGeo from "../progression";

const assert = chai.assert;


describe("Check Sequence Type", () => {
  describe("Validate Sequence", () => {
    it("80 is Invalid Input", () => {
      assert.equal(arithGeo(80), "invalid input");
    });

    it("'deliberate' is Invalid Input", () => {
      assert.equal(arithGeo("deliberate"), "invalid input");
    });
  });

  describe("Check Sequence Type", () => {
    it("[10,20,10.50, 40] should return -1", () => {
      assert.equal(arithGeo([10, 20, 10.50, 40]), -1);
    });

    it("[10,20, 'lizzy', 70] should return -1", () => {
      assert.equal(arithGeo([10, 20, "lizzy", 70]), -1);
    });

    it("[] should return 0", () => {
      assert.equal(arithGeo([]), 0);
    });

    it("[10] should return 1", () => {
      assert.equal(arithGeo([10]), 1);
    });

    it("[10, 20] should return 2", () => {
      assert.equal(arithGeo([10, 20]), 2);
    });

    it("[10,20, 30, 40] should return arithmetic", () => {
      assert.equal(arithGeo([10, 20, 30, 40]), "arithmetic");
    });
    it("[10,20, 30, 40] should return geometric", () => {
      assert.equal(arithGeo([10, 20, 40, 80]), "geometric");
    });

    it("[-20,-30, -40, -50] should return arithmetic", () => {
      assert.equal(arithGeo([-20, -30, -40, -50]), "arithmetic");
    });

    it("[-200,-400, -800, -1600] should return geometric", () => {
      assert.equal(arithGeo([-200, -400, -800, -1600]), "geometric");
    });
  });
});

