function solution(progresses, speeds) {
    let stack = [];
    let answer = [];
    let [front,rear] = [0,progresses.length-1]
    
    while(front<=rear){
        for(let i=0; i<progresses.length; i++){
        progresses[i] += speeds[i];
        }
        
        while(progresses[front] >= 100){
            stack.push(progresses[front]);
            front +=1;
        }
        if(stack.length === 0) continue;
        else{
            answer.push(stack.length);
            stack = [];
        }
    }
    return answer;
}