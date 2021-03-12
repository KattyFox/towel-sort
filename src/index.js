
module.exports = function towelSort (matrix) {
  if (!matrix||matrix.length===0){
    return []
  }
  let result = [];
  for (i = 0; i < matrix.length; i++) {
      console.log(i % 2 === 0);

      if (i % 2 === 0) {
      }
      else {  
          const reversed = matrix[i].reverse();
      }
      if (!matrix||matrix.length===0){
        return []
      }
      let tmp = matrix[i];
      for (let j =0 ;j< tmp.length; j++){
          result.push(tmp[j]);
      }
  }

 return result 
}

