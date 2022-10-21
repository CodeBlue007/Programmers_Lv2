function solution(clothes) {
    
    let map = new Map();
    
    clothes.forEach((value,idx) => {
        map.set(value[1], map.has(value[1])? map.get(value[1])+1 : 1);
    });
    
    let array = [...map.values()];
    
    let answer = array.reduce((acc,cur) => {return acc *= cur+1},1)
                       
    return answer-1;       
}