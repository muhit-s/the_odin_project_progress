const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    for(arg of args) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === arg) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
