function solution(priorities, location) {
    let front = 0;
    let rear = priorities.length-1;
    let info = [];
    let count = 0;
    priorities.forEach((val,idx) => {
        info.push([idx,val]);
    })
    
    while(priorities.length>0){
        if(front > rear){
            front = 0;
        }
        let priormax = Math.max(...priorities);
        if(priormax === info[front][1]){
            count += 1;
            if(info[front][0] === location){
                break;
            }
            else{
                info.splice(front,1);
                priorities.splice(front,1);
                rear -=1;
            }
                
        }
        else{
            front ++;
        }        
    }
    
    return count;
    
}