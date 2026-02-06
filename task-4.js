// Task-4: Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longWord(str){
    let words = str.split(' ');
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

console.log(longWord("I am learning Programming to become a programmer."));
console.log(longWord("I am learning JavaScript"));
console.log(longWord("She is a supercalifragilisticexpialidocious Woman."));