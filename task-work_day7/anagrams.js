function anagrams(word1, word2) {
    count = 0;
    used = {};
    for (let ch of word1) {
        for (i = 0; i < word2.length; i++) {
            if (ch == word2[i] && !used[i]) {
                used[i] = true;
                count++;
                break;
            }  
        }
    }
    if (count == word2.length) {
        return `${word1} is an anagram of ${word2}`
    }
    else {
        return `${word1} is not an anagram of ${word2}`
    }
}

console.log(anagrams("listen","silent"));
console.log(anagrams("aabbcc","abacbb"));
