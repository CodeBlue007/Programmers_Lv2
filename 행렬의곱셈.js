function solution(arr1, arr2) {
    let answer =[];
    
    for(let i=0; i<arr1.length;i++){
        let temp = [];
        for(let j=0; j<arr2[0].length;j++){
            let val = 0;
            for (let k=0; k<arr2.length;k++){
                val += arr1[i][k]* arr2[k][j];
            }
            temp.push(val);
        }
        answer.push(temp);
    }
    
    return answer;
}