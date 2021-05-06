const print = require("../src/index")

test("print hello name", () => {
    expect(print("Junior")).toBe("Hello Junior")
})