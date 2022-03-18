/*const text = "Given:
- a sentence with multiple lowercase words separated by spaces, 
- write a Javascript code that finds the longest word in the sentence. 
- If there are multiple words of the same length, 
-- choose one that has the highest number of vowels. 
- Ignore any character in the sentence that is not a letter or a space. 
- Find the most efficient way to achieve this."
*/

/** ------------------page funcion -----------------*/

function printResult() {
    let textInput = document.getElementById('testing');
    let text = textInput.value;
    let textResult, sortedWords;
    if (text == '') {
        alert("Please, add some text to be processed.")
        textResult = "Empty text!"
    }
    else {
        sortedWords = findSortedWords(text);
        textResult = composeResultString(sortedWords);
    }

    let resultElement = document.getElementById("resultArea");
    resultElement.innerHTML = textResult;
}

function composeResultString(sortedWords) {
    return '<p>The longest word with more vowels in your text is <strong>' +
        Object.keys(sortedWords[0])[0] + '</strong> (' +
        Object.keys(sortedWords[0])[0].length + 'l,' +
        sortedWords[0][Object.keys(sortedWords[0])[0]] + 'v).</p>' +
        "<h4>Same size words:</h4>" +
        "<p>" + sortedWords.reduce(printWordObject, '') + "</p >";
}

function printWordObject(currentString, newObj) {
    const keys = Object.keys(newObj);
    return currentString + "<strong>" + keys[0] + "</strong>" + "(" +
        newObj[keys[0]] + " vowels) ";
}

/** --------------- string processing funcions --------------------*/

function findSortedWords(str) {
    const wordsWithVowelsCounts = findWords(str);
    const sortedWords = wordsWithVowelsCounts.sort(reverseOrderBySize);
    const longestSize = Object.keys(sortedWords[0])[0].length;
    return sortedWords.filter(removeSmallWords(longestSize))
        .sort(reverseOrderByVowels);
}

function removeSmallWords(longestSize) {
    return function (obj) {
        let size = Object.keys(obj)[0].length;
        return size === longestSize;
    }
}

function reverseOrderBySize(first, second) {
    const counts1 = Object.keys(first)[0].length;
    const counts2 = Object.keys(second)[0].length;

    if (counts1 > counts2) {
        return -1;
    }
    if (counts1 < counts2) {
        return 1;
    }
    return 0;
}

function reverseOrderByVowels(first, second) {
    const counts1 = first[Object.keys(first)[0]];
    const counts2 = second[Object.keys(second)[0]];

    if (counts1 > counts2) {
        return -1;
    }
    if (counts1 < counts2) {
        return 1;
    }
    return 0;
}

function findWords(str) {
    str = str.toLowerCase();
    str = str.replace(/\d+/g, ' ');
    let words = str.match(/\w+\s+|\w+/g);
    words = words.map(trimAndCount);
    return words;
}

function trimAndCount(word) {
    let key = word.trim();
    let value = countVowels(word);
    let obj = {};
    obj[key] = value;
    return obj;
}

function countVowels(word) {
    let vowels = word.match(/[aeiou]/g);
    if (vowels) {
        return vowels.length;
    }
    return 0;
}