// isPalindrome.

// given a string, `str`, return true if the string is a palindrome. We are ignoring cases. We are only looking at alphanumeric characters
// so you will need to find out how to 'sanitize' the string. 
// eg racecar - racecar // true
//    warmups - spumraw // false

let str = `kayak` // true
let str2 = `Yo, Banana Boy!` // true. You are going to need a regular expression for this. 
let regEx = '/[\W_]/g'
let str3 = `palindrome` // false



function isPalindrome(s) {
    s = s.toLowerCase().replace(/[\W_]/g, '')
    return s == s.split('').reverse().join('')

}

console.log(isPalindrome(str2))


let arr = ['H', 'e', 'l', 'l', 'o'];

let right = 0; // h 
let left = arr.length - 1; // o 

while (right < left) {
    let hold = arr[right] // H 
    arr[right] = arr[left] // H > o 
    arr[left] = hold // o > H 
    right++
    left--
}

console.log(arr)