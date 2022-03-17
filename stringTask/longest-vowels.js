 const text = "Given a sentence with multiple lowercase words separated by spaces, write a Javascript code that finds the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not a letter or a space. Find the most efficient way to achieve this."

/*const text = "Smart people learn from everything and everyone, average people from their experience, everything again, stupidity, stupid people already, have all the answers\" (Socrates 15:25)"*/

console.log(findLongestVowelsWord(text));

function findLongestVowelsWord(str){   
    let words = findLongests(str);
    let vowelsCounts = words.map(countVowels);
    maxVowelsIndex = vowelsCounts.reduce(findMaxVowelsIndex,-1);
    return words[maxVowelsIndex];
}

function listWords(str){
        str = str.replace(/\d+/g,' ');
        let words = str.match(/\w+\s+|\w+/g);
        words = words.map(trimWord);
        return words;
}

function trimWord(w){
    return w.trim();
}

function findLongests(str){
    let words = listWords(str);
    let largestSize=0;
    largestSize = words.reduce(findLongestSize, 0);
    return words.filter(getLongestOnly, largestSize);
}

function countVowels(arr){
    let vowels = arr.match(/[aeiou]/g);
    return vowels.length;
}

function getLongestOnly(word){
    return word.length === this.valueOf();
}

function findMaxVowelsIndex(previousValue, currentValue, index){ 
    if (currentValue > previousValue){
        return index;
    }
    else{
        return previousValue;
    }
}

function findLongestSize(previousValue, currentValue){  
    if (currentValue.length >= previousValue){
        return currentValue.length;
    }
    else{
        return previousValue;
    }  
}



