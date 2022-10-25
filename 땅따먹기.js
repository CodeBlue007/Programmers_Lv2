function solution(land) {
    
    for(let i=1; i<land.length; i++){
        for(let j=0; j<land[i].length; j++){
            let max = findMax(land[i-1],j)
            land[i][j] += max;
        }
    }
    
    return Math.max(...land[land.length-1]);
}

function findMax(array,index){
    let max = -1;
    for(let i=0; i<array.length; i++){
        if(i !== index){
            max < array[i] ? max = array[i] : null;
        }
    }
    return max;
}
// 2차원 dp문제