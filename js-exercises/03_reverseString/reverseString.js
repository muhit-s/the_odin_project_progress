const reverseString = function(word) {
    let ans = "";
    const wordArray = word.split("");
    for(let i = wordArray.length - 1; i >= 0; i--) {
        ans += wordArray[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
