function solution(s) {
    let array = s.split(' ').map(x => parseInt(x));
    let max = Math.max(...array);
    let min = Math.min(...array);
    
    return `${min} ${max}`;
    
    
}