var utils = require("course-utilities");

// load the testing variable files
var hello = utils.load("./hello.js", "hello");

// jest syntax and functions for testing
test("outputs the correct string", () => {
  expect(hello()).toBe("Hello World!");
});
