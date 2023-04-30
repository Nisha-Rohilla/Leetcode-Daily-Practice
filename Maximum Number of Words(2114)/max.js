/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let count = 0;
  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" ");
    if (words.length > count) {
      count = words.length;
    }
  }
  return count;
};
