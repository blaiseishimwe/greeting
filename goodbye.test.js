var utils = require("course-utilities");

// load the testing variable files
var goodbye = utils.load("./hello.js", "goodbye");

// add a goodBye() function test

test("outputs the correct string", () => {
  expect(goodbye()).toBe("See you later!");
});
