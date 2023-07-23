let arr = ['h', 'e', 'l', 'l', 'o'];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  let hold = arr[left]
  arr[left] = arr[right]
  arr[right] = hold
  left++
  right--
}

console.log(arr)