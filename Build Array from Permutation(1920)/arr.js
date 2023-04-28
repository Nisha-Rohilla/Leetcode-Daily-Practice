var buildArray = function(nums) {
    let ans = [];
  for(let i=0; i<nums.length; i++){
      ans[i] = nums[nums[i]]
  }
  return ans
};

// With the help of push() method

var buildArray = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        arr.push(nums[nums[i]])
    }
    return arr;
};