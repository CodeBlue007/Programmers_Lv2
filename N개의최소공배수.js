function solution(arr) {
    
    arr.sort((a,b) => a-b);
    let lcm = 1;
    const findLCM = (a,b,lcm) => {
        while(true){
            if(lcm %a===0 && lcm%b===0) break;
            lcm++;    
            }
        return lcm;
    }
    
    for(let i=0; i<arr.length; i++){
        if(i ===0) lcm = findLCM(arr[0],arr[1],lcm);
        else lcm = findLCM(arr[i],lcm,lcm);
    }
    
    return lcm
}