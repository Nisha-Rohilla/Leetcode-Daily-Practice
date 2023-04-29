/*
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr=[];
    let max = Math.max(...candies)
    for(let i=0; i<candies.length;i++){
       let a = candies[i]+extraCandies;
        if(a>=max){
          arr.push(true)
        }
        else{
          arr.push(false)
        }
    }
    return arr;
      
  };