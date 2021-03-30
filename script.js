const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function longestWord(string) {
  let cleanString = string.replace(regex, '')
  let longestWord = []
  let arr = cleanString.split(' ')
  console.log(arr)
  arr.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })
  return longestWord
}

console.log(longestWord('What is the longest word in this sentance?'))



