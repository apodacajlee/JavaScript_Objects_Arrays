console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(array){
    let sum = 0;

    // use forEach to iterate through array and add to sum
    array.forEach((number) => {
        sum += number; // for each number in the array, add it to the sum
    });

    return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "The Hitchhiker's Guide to the Galaxy, by Douglas Adams",
    pages: 224,
    readCount: 2,
};

book.info = function () {
    return `${this.title}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

//convert the sentence into an array of words
let words = sentence.split(' ');

//iterate over each word
words.forEach((word) => {
    //convert each word to an array of characters, using split again without a separator
    let charArray = word.split(''); //temp array of characters
    let revWord = charArray.reverse().join(''); //reverse characters, and convert the word back to a string
    words[words.indexOf(word)] = revWord; //reverse each temp array, and update the array of words
});

//convert the array of reversed words back into a string
sentence = words.join(' ');
console.log(sentence);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let rows = csvData.split('\n'); //split into rows
let headers = rows[1].split(',') //split first row into headers
let result = []; //declare result array before loop, for step 8
for(let i = 1; i < rows.length; i++) {
    let data = rows[i].split(',');

    let record = {
        name: data[0],
        age: data[1],
    };

    result = result.concat(record);
}

console.log(result);