word1 = "listen";
word2 = "silent";

if (word1.length != word2.length) {
    console.log("Not anagrams");
} else {
    isAnagram = true;

    for (i = 0; i < word1.length; i++) {
        count1 = 0;
        count2 = 0;
        ch = word1[i];

        alreadyChecked = false;
        for (k = 0; k < i; k++) {
            if (word1[k] == ch) {
                alreadyChecked = true;
                break;
            }
        }
        if (alreadyChecked) continue;

        for (j = 0; j < word1.length; j++) {
            if (word1[j] == ch) count1++;
            if (word2[j] == ch) count2++;
        }

        if (count1 != count2) {
            isAnagram = false;
            break;
        }
    }

    console.log(isAnagram ? `${word1} and ${word2} are anagrams` : `${word1} and ${word2} are not anagrams`);
}
