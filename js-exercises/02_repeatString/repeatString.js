const repeatString = function(str, num) {
    let ans = "";
    for(let i = 0; i < num; i++) {
        ans += str;
    }
    if(num < 0) return "ERROR";
    else return ans;
};

// Do not edit below this line
module.exports = repeatString;
