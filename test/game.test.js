const {Game, EASY, MEDIUM, HARD} = require("../game.js")
const Chai = require("chai")

let expect = Chai.expect
let game = new Game

describe("game engine test", function(){
    // Example test
    describe("when a letter is found", function(){
        it("should return true when the letter is present", function(){
            expect(game.guess("a")).is.true
        })
    });
    describe("When a letter is not found", function(){
        it("should return false when the letter is not present", function(){
            expect(game.guess("z")).is.false
        })
    });
    // Game test
    describe("difficultyInput Validator", function(){
        describe("difficultyInput ", function(){

        })
    })
    describe("getRandomWord test", function(){
        describe("getRandomWord(difficulty)",function(){
            describe("When easy, word is <= 5", function(){
                it("should return a random word with less or 5 letter", function(){
                    expect(game.getRandomWord(EASY).length).is.lessThanOrEqual(5)
                })
            })
        })
        describe("getRandomWord(difficulty)",function(){
            describe("When medium, word is 5 to 7", function(){
                it("should return a random word with 5 to 7 letter", function(){
                    expect(game.getRandomWord(MEDIUM).length).is.lengthOf(5)&&
                    expect(game.getRandomWord(MEDIUM).length).is.lessThan(8)
                })
            })
        })
        describe("getRandomWord(difficulty)",function(){
            describe("When hard, word is > 7", function(){
                it("should return a random word with at least 7 letter", function(){
                    expect(game.getRandomWord(HARD).length).to.have.greaterThanOrEqual(8)
                })
            })
        })
    })
    //wordArrayFilter test
    describe("wordArrayFilter()", function(){
        describe("When word is <= 5", function(){
            it("should return a new array with word of less or at least 7 letter", function(){
                expect(game.wordArrayFilter(EASY).length).to.have.lessThanOrEqual(5)
            })
        })
        describe("When word is > 5 && < 8", function(){
            it("should return ", function(){
                expect(game.wordArrayFilter(MEDIUM).length).is.lengthOf(5)&&
                expect(game.wordArrayFilter(MEDIUM).length).is.lessThan(8)
            })
        })
        describe("When word is >= 8", function(){
            it("should return", function(){
                expect(game.wordArrayFilter(HARD).length).to.have.greaterThanOrEqual(8)
            })
        })
    })
})
