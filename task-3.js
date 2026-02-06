// Task-3: Write a function to count the number of vowels in a string.

function vowels (str){
    let count = 0;
    for (let char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    return count;
}

console.log(vowels("Education"));

console.log(vowels("Hello! Universe"));

console.log(vowels("Education is Important."));