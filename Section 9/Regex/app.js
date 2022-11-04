// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// // re = /hello/g; // Global search

// // console.log(re);
// // console.log(re.source);

// // // exec() - Return result in an array or null
// // const result = re.exec('hello world');

// // console.log(result);
// // console.log(result[0]);
// // console.log(result.index);
// // console.log(result.input);

// // // test() - Returns true or false
// // const result = re.test('Hello');
// // console.log(result);

// // match() = Return result array or null
// // const str = 'Hello There';
// // const result = str.match(re);
// // console.log(result);

// // // search() - Returns index of the first match if not found it returns a -1
// // const str = 'Hello There';
// // const result = str.search(re);
// // console.log(result);

// // // replace() - Return new string with some or all matches of a pattern
// // const str = 'Hello There';
// // const newStr = str.replace(re, 'Hi');
// // console.log(newStr);

// // Metacharacters and Symbols


let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must ends with
re = /^hello$/; // Must begin AND end with
re = /h.llo/; // Matches any ONE character
re = /h*llo/; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur between {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} amount of times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

//Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non Word character

// String to match
const str = '3x3x3x';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`)
    }
}

reTest(re, str);