const EASY = 1; // less or equal to 5 letter
const MEDIUM = 2; // 5 to 7 letter
const HARD = 3; // equal or more than 7 letter

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

    wordArrayFilter(){
        wordArray = this.WORD_ARRAY;
        switch(wordArray){
            case EASY: {
                let oneUsageArray = new Array
                for (let i = 0; i < wordArray.length; i++){
                    if (wordArray[i].length <= 5){
                        oneUsageArray.push(wordArray[i]);
                    }
                }
                console.log(oneUsageArray)
                return oneUsageArray;
            }
            case MEDIUM: {
                let oneUsageArray = new Array
                for(let i = 0; i < wordArray.length; i++){
                    if (wordArray[i].length >=5 && wordArray[i].length <=7){
                        oneUsageArray.push(wordArray[i]);
                    }
                }
                console.log(oneUsageArray)
                return oneUsageArray;
            }
            case HARD: {
                let oneUsageArray = new Array
                for (let i = 0; i < wordArray.length; i++){
                    if (wordArray[i].length > 7){
                        oneUsageArray.push(wordArray[i]);
                        console.log(oneUsageArray)
                    }
                }
                console.log(oneUsageArray)
                return oneUsageArray;
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

    wordKeeper(){
        
    }
}

module.exports = {Game:Game, EASY:EASY, MEDIUM:MEDIUM, HARD:HARD}
