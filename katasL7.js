
//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
function removeDuplicateWords (s) {
    let allWords = s.split(' ')
    let uniqueWords = []
    allWords.filter((word)=>{
      if (!uniqueWords.includes(word)) {
        uniqueWords.push(word)
      }
    })
    let uniqueWordsString = uniqueWords.join(' ')
    return uniqueWordsString
  }
  
  removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')