function isAnagram(word1,word2){

isAnagram = true;
if (word1.length != word2.length) {
    isAnagram = false;
}
else {
    for (let ch of word1) {
        if (word2.indexOf(ch) == -1) {
            isAnagram = false;
            break;
        }
    }
}
if(isAnagram){
    return `${word1} and ${word2} are anagrams`
}
else{
    return `${word1} and ${word2} are not anagrams`
}
}

console.log(isAnagram("listen","silent"));