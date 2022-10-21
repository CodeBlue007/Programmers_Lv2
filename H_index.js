function solution(citations) {
    citations.sort((a,b) => b-a);
    let hIndex = 0;
    let loopCount =0
    for(let i=0; i<citations.length; i++){
        if(citations[i]<=i){
            hIndex = i;
            break;
        }
        loopCount ++;
    }
    
    return loopCount === citations.length? citations.length : hIndex;
}