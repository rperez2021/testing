module.exports = {
    assert: function(expected, actual, message = "Test") {
        if (expected === actual) {
            console.log("Thumbs Up" + message)
        } else {
            diff = expected + "\n   " + actual;
            console.log("Poop " + message + "\n   Assertion failed no match\n    " + diff);
        }
    },
    assert_true: function(actual, message) {
        this.assert(true, actual, message)
    },
    assert_false: function(actual, message) {
        this.assert(false, actual, message)
    }
};