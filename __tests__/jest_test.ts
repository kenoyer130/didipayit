it('adds 5 to 1 to equal 6 in Typescript', () => {
    const sum = require("../src/jest_test");
    expect(sum(5, 1)).toBe(6);
});