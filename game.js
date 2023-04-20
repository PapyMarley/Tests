const EASY = 1; // less or equal to 5 letter
const MEDIUM = 2; // 5 to 7 letter
const HARD = 3; // equal or more than 7 letter
const fs = require('fs');
const csv = require('csv-parser');

const WORD_ARRAY = [
    /*[0]*/'fly','try', // 3 letter  EASY)
    'toto','card', // 4 letter  EASY)
    'candy','mocha', // 5 letter (MEDIUM)
    'dabster','iceboat', // 7 letter (MEDIUM)
    'bachelorisms','ultimateness' // 12 letter (Hard)
/*[worldARRAY.length]*/]
class Game{
    guess (oneLetter){
        if(oneLetter === "a"){
            return true;
        } else {
            return false;
        }
    }
    wordArrayFilter(difficulty){
        let wordArray = this.WORD_ARRAY;
        switch(difficulty){
            case EASY: {
                let oneUsageArray = new Array
                for (let i = 0; i < this.listOfWords.length; i++){
                    if (this.listOfWords[i].length <= 5){
                        oneUsageArray.push(this.listOfWords[i])
                    }
                }
                console.log("je susi la phase EASY")
                return oneUsageArray
            }
            case MEDIUM: {
                let oneUsageArray = new Array
                for(let i = 0; i < this.listOfWords.length; i++){
                    if (this.listOfWords[i].length >=5 && this.listOfWords[i].length <=7){
                        oneUsageArray.push(this.listOfWords[i])
                    }
                }
                console.log("I'm the MEDIUM PART")
                return oneUsageArray
            }
            case HARD: {
                let oneUsageArray = new Array
                for (let i = 0; i < this.listOfWords.length; i++){
                    if (this.listOfWords[i].length > 7){
                        oneUsageArray.push(this.listOfWords[i])
                        console.log("PHASE HARD")
                    }
                }
                return oneUsageArray
            }
        }
    }
    getRandomIndex(wordArray){
        return Math.floor(Math.random() * wordArray.length)
    }
    getRandomWord(difficulty){
        switch(difficulty){
            case EASY: {
                let choosenIndex = this.getRandomIndex(WORD_ARRAY)    
                let easyWord = WORD_ARRAY[choosenIndex]
                return easyWord
            }
            case MEDIUM:{
                let choosenIndex = this.getRandomIndex(WORD_ARRAY)
                let mediumWord = WORD_ARRAY[choosenIndex]
                return mediumWord
            }
            case HARD:{
                let choosenIndex = this.getRandomIndex(WORD_ARRAY)
                let hardWord = WORD_ARRAY[choosenIndex]
                return hardWord
            }

        }
    }

    //CONSTRUCTOR PART
    constructor(){
        this.listOfWords = [];
        this.numberOfTry = 5;
        fs.createReadStream('words_fr.txt')
            .pipe(csv())
            .on('data', (row) => {
                this.listOfWords.push(row.word.toLowerCase());
            })
            .on('end', () => {
                console.log(this.listOfWords);
                console.log('CSV file successfully processed');
            });
    }
}
module.exports = {Game:Game, EASY:EASY, MEDIUM:MEDIUM, HARD:HARD}
