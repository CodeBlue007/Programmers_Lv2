function solution(n) {
    let curNum = n.toString(2);
     let count = countOne(curNum);
     let answer = 0;
     
     while(answer !== count){
         n +=1;
         let nextNum = n.toString(2);
         answer = countOne(nextNum);
     }
     return n;
 }
 
 
 function countOne(string){
     let count = 0;
     for(let i=0; i<string.length; i++){
         string[i] === '1'? count++ :null;
     }
     return count;
 }