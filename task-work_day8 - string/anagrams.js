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

// code to display words count of text

// text = "This is a JavaScript program this program is simple this program counts the number of words in given text"

// words = text.toLowerCase().split(" ");
// wordCount = {};

// for(i = 0; i < words.length; i++) {
//    word = words[i];
//    if(wordCount[word]) {
//      wordCount[word]++;
//      }
//    else {
//     wordCount[word] = 1;
//     }
//     }

// console.log(wordCount);

// code to display words count of text using array

text = "This is a JavaScript program this program is simple this program counts the number of words in given text"

words = text.toLowerCase().split(" ");

wordList = [];
wordCount = [];
for(i = 0; i < words.length; i++) {
   word = words[i];
   index = wordList.indexOf(word);
   if(index != -1) {
     wordCount[index]++;
   }
  else {
    wordList.push(word);
    wordCount.push(1);
    }
}


for(i = 0; i < wordList.length; i++) {
   console.log(`${wordList[i]} : ${wordCount[i]}`);
}

// display non-recursive words

console.log("Non-recursive words are:");
for(i = 0; i < wordList.length; i++) {
    if(wordCount[i] == 1) {
        console.log(wordList[i]);
        
    }
}

// display most frequent word

maxCount = wordCount[0];
maxIndex = 0;
for (i = 1; i < wordList.length; i++) {
    if (wordCount[i] > maxCount) {
        maxCount = wordCount[i];
        maxIndex = i;
    }
}
console.log(`Most frequent word "${wordList[maxIndex]}" occurred ${maxCount} times`);






