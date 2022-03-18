/*const text = "Given:
- a sentence with multiple lowercase words separated by spaces, 
- write a Javascript code that finds the longest word in the sentence. 
- If there are multiple words of the same length, 
-- choose one that has the highest number of vowels. 
- Ignore any character in the sentence that is not a letter or a space. 
- Find the most efficient way to achieve this."
*/

/** ------------------html funcions -----------------*/

function printResult() {
    let textInput = document.getElementById('testing');
    let text = textInput.value;
    let textResult;
    if (text == '' || text == null) {
        alert("Please, add some text for processing.")
        textResult = "Empty text!"
    }
    else {
        textResult = findLongestVowelsWord(text);
        textResult = 'The longest word with more vowels in your text is \"<strong>' + textResult + '\"</strong>!'
    }

    let resultElement = document.getElementById("resultArea");
    resultElement.innerHTML = textResult;
}

/** --------------- string processing funcions --------------------*/

function findLongestVowelsWord(str) {
    let words = findLongests(str.toLowerCase());
    if (words.length == 1) {
        return words[0];
    }
    let vowelsCounts = words.map(countVowels);
    let maxVowelsIndex = vowelsCounts.reduce(findMaxIndex, 0);
    return words[maxVowelsIndex];
}

function findLongests(str) {
    let words = findWords(str);
    let longestSize = words.reduce(findLongestSize, 0);
    words = words.filter(removeOldLongests(longestSize));
    return removeRepeated(words);
}

function removeRepeated(words) {
    let index = 0, wordsTail = [];
    while (index < words.length - 1) {
        wordsTail = words.slice(index + 1,);
        if (wordsTail.indexOf(words[index]) >= 0) {
            words.shift();
        }
        else {
            index++;
        }
    }
    return words;
}

function findLongestSize(previousValue, currentValue) {
    if (currentValue.length >= previousValue) {
        return currentValue.length;
    }
    else {
        return previousValue;
    }
}

function findWords(str) {
    str = str.replace(/\d+/g, ' ');
    let words = str.match(/\w+\s+|\w+/g);
    words = words.map(trimWord);
    return words;
}

function trimWord(word) {
    return word.trim();
}

function removeOldLongests(maxSize) {
    return function (word) {
        return (word.length === maxSize);
    };
}

function countVowels(word) {
    let vowels = word.match(/[aeiou]/g);
    return vowels.length;
}

function findMaxIndex(previousMaxIndex, currentElem, arrIndex, array) {
    if (currentElem > array[previousMaxIndex]) {
        return arrIndex;
    }
    else {
        return previousMaxIndex;
    }
}





