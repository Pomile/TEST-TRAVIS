import mocha from "mocha";
import chai from "chai";

const { describe, it } = mocha;
const expect = chai.expect;
const foo = "bar";
const beverages = { tea: ["chai", "matcha", "oolong"], grade: "high quality" };

function testfunc() {
  return { msg: "Thank you for testing" };
}

describe("Chai.expect Test Suite", () => {
  describe("Test equality Suite - to.equal", () => {
    it("should return 9", () => {
      expect(3 * 3).to.equal(9);
    });

    it("should return bar", () => {
      expect(foo).to.equal("bar");
    });

    it("should return chai", () => {
      expect(beverages.tea[0]).to.equal("chai");
    });

    it("should return nooo why fail??", () => {
      expect({ a: 1 }, "nooo why fail??").to.eql({ a: 1 });
    });

    it("should return false for 100 == 90", () => {
      expect(100 === 90).to.equal(false);
    });
  });

  describe("Test type Suite - to.be.a ,to.be.an, to.be.true/false", () => {
    it("should return true for a string", () => {
      expect("bar").to.be.a("string");
    });

    it("should return true for a number", () => {
      expect(9).to.be.a("number");
    });

    it("should return true for a function", () => {
      expect(testfunc).to.be.a("function");
    });

    it("should return true for an object", () => {
      expect(testfunc()).to.be.an("object");
    });

    it("should return true for an array", () => {
      expect(Array.isArray([])).to.equal(true);
      expect([1, 2]).to.be.an.instanceof(Array);
    });

    it("should return false for an array", () => {
      expect(Array.isArray(9)).to.equal(false);
    });
  });

  describe("Test Length Suite- to.have.lengthOf", () => {
    it("should return true for string value to have length of 3 ", () => {
      expect(foo).to.have.lengthOf(3);
    });
  });

  describe("Test object property Suite - to.have.property_with.lengthOf/with.an/a", () => {
    it("should return true for object property of tea with length of 3 ", () => {
      expect(beverages).to.have.property("tea").with.lengthOf(3);
    });

    it("should return true for object property of tea with a value type of an array ", () => {
      expect(beverages).to.have.property("tea").with.an("array");
    });

    it("should return true for object property of grade to equal high quality ", () => {
      expect(beverages).to.have.property("grade").to.equal("high quality");
    });
    it("should return true for object property of grade to be a type string ", () => {
      expect(beverages).to.have.property("grade").to.be.a("string");
    });
  });

  describe("Test .include", () => {
    it("should assert substring ", () => {
      expect("foobar").to.include("foo");
    });

    it("should assert wrong substring ", () => {
      expect("foobar").to.not.include("taco");
    });

    it("should assert member of an array ", () => {
      expect([1, 2, 3]).to.include(2);
    });

    it("should asserts that the given object val’s properties are a subset of the target’s properties. ", () => {
      expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 });
    });
    it("should assert a type array and a member of the array ", () => {
      expect([1, 2, 3]).to.be.an("array").that.includes(2);
    });

    it("should assert array deeply (but not strictly) includes `{a: 1}`", () => {
      expect([{ a: 1 }]).to.deep.include({ a: 1 });
    });

    it("should assert object property keys ", () => {
      expect(beverages).to.include.all.keys(("tea", "grade"));
    });
  });

  describe("Test .nested", () => {
    it("should assert nested object ", () => {
      expect({ a: { b: ["x", "y"] } }).to.nested.include({ "a.b[1]": "y" });
    });

    it("should assert deep and nested object ", () => {
      expect({ a: { b: [{ c: 3 }] } }).to.deep.nested.include({ "a.b[0]": { c: 3 } });
    });

    it("should asserts that the given object val’s properties are a subset of the target’s properties. ", () => {
      expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 });
    });
    it("should assert a type array and a member of the array ", () => {
      expect([1, 2, 3]).to.be.an("array").that.includes(2);
    });

    it("should assert array deeply (but not strictly) includes `{a: 1}`", () => {
      expect([{ a: 1 }]).to.deep.include({ a: 1 });
    });
  });
});
