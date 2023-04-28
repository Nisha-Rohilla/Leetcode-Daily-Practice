// With the help of 2 for loop
var getConcatenation = function(nums) {
    const result = [];
    for(let i=0; i<nums.length; i++){
        result[i] = nums[i]
    }
    for(let i=0; i<nums.length; i++){
        result[i+nums.length]=nums[i]
    }
    return result

    
};

// with the help of one loop

var getConcatenation = function(nums) {
    const result = [];
    for(let i=0; i<nums.length; i++){
        result[i] = nums[i]
        result[i+nums.length]=nums[i]
    }
    return result
    
    
};