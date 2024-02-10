"use strict";
/*
 Input: 2 strings, word and letters
 Output: Boolean value (true or false) if we can build a word with the letters
 canConstructWord('aa', 'abcd') => false
 canConstructWord('abc', 'dcba') => true
 canConstructWord('aabb', 'bcabad'); => true
 Psuedocode:
 Create the frequency counter function
 Call the frequency counter on each of the strings
 Loop through the first frequency counter
 Check that there is a key of the first obj on the second obj
 The value of the key on the 2nd object is greater than or equal to the value of the key on the first object
 If the if statement returns false, return false
 Otherwise once we exit the loop return true
 */

function frequencyCounter(items) {
  const counter = {};

  for (let char of items) {
    let curr = counter[char] || 0;
    counter[char] = curr + 1;
  }

  return counter;
}

function canConstructWord(word, letters) {
  const wordCounter = frequencyCounter(word);
  const lettersCounter = frequencyCounter(letters);

  for (let key in wordCounter) {
    if (key in lettersCounter) {
      if (wordCounter[key] > lettersCounter[key]) {
        return false;
      }

    } else {
      return false;
    }
  }

  return true;
}
