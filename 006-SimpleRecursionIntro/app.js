// write a function that counts down from a number 'n' 
// you should not use loops or methods (except console.log())
// when it reaches 0, the function should stop running. 


// This is a hard challenge. Show fairly early. 
function countDown(n) {
    if (n === 0) {return 'Done!'}
    console.log(`${n} 🎉`)
    countDown(n - 1)
}

countDown(5)


