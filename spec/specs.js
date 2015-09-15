describe('wordOrder', function() {
    it("given 2 words it will return ", function() {
        expect(wordOrder("hello world")).to.be.an("array");
    });

});

describe('newWordOrder', function() {

    it("it will search for a word with one letter and replace it with a different letter.", function() {
        expect(newWordOrder("a", "a", "b").to.equal("b"));
    });

    it("it will search for a word with more than one letter and replace it with a different word.", function() {
        expect(newWordOrder("hello", "hello", "world").to.equal("world"));
    });

    it("it will search for a word in a sentence and replace it with a different word.", function() {
        expect(newWordOrder("hello how are you?", "hello", "world").to.equal("world how are you?"));
    });

    //multiple instances of a word
    //punctuation "hello!" match with "hello"
    //negative case: "my dog is named patches", "banana"

});
