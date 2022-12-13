function isPalindrome(word) {
  function reverseString(word) {
    return word.split("").reverse().join("")
  }
  const reversedWord = reverseString(word);
  return word === reversedWord

}

/*
Add your pseudocode here
reverse the input string
Compare the reversed string if its the same as the input
  return true if  they do
  else return false
*/

/*
  Add written explanation of your solution here
  Created a function that took the word and split it which returns an array that can be passed the reverse() method then joined it using the join() function.
*/
  
  // You can run `node index.js` to view these console logs
  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  