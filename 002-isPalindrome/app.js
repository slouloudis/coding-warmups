// isPalindrome.

// given a string, `str`, return true if the string is a palindrome. We are ignoring cases. We are only looking at alphanumeric caracters
// eg racecar - racecar // true
//    warmups - spumraw // flase

let str = `kayak`
let str2 = `Yo, Banana Boy!`
let str3 = `palindrome`
let str4 = `Hello a olleH`

function isPalindrome(s) {
  //
  s = s.toLowerCase().replace(/[\W_]/g,'')
  console.log(s)
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

// 'santize' input string and remove non-alphanumeric characters, lowercase it. 
// create left and right pointer
// if pointer on each side are not equal, return flase
// otherwise, return true. 

console.log(isPalindrome(str))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))



// /: The forward slashes indicate the beginning and end of the regular expression.

// [\W_]: This is a character class that matches any non-word character (\W) or an underscore character (_). The \W is a shorthand character class representing any non-word character, and the underscore _ is matched explicitly.

// /g: The g flag stands for "global," which means that the replacement should be applied to all occurrences of the matched characters in the string, not just the first one.