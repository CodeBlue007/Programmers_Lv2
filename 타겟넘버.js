function solution(numbers, target) {
    
    let cnt = 0;

const dfs = (idx,answer) => {
    let temp = answer;
    let tempMinus = answer - numbers[idx];
    let tempPlus = answer + numbers[idx];
    
    if(idx === numbers.length){
        if(answer === target) cnt +=1;
     }
    else{
      dfs(idx+1, tempMinus);
      dfs(idx+1, tempPlus);
    }
}
    dfs(0,0);

    return cnt;
    
}