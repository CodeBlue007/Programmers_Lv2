function solution(bridge_length, weight, truck_weights) {
    let queue = [];
    let stack = truck_weights.reverse();
    let answer = 0;
    
    const updateQueue = (time) =>{
        queue.forEach((val) => {
            val[0] += time;
        });
        
        queue.forEach((val,idx)=>{
            if(val[0] >= bridge_length){
                queue.splice(idx,1);
            }
        })
        
        answer += time;
    }
    
    while(stack.length !==0){
        let curWeight = stack.pop();
        if(queue.length === 0){
            queue.push([0,curWeight]);
        }
        else{
            let weightSum = queue.reduce((acc,cur)=> acc+=cur[1], 0);
            if(curWeight + weightSum <= weight){
                updateQueue(1);
                queue.push([0,curWeight]);
            }
            else{
                do{
                    let leftTime = bridge_length - queue[0][0];
                    updateQueue(leftTime);
                    weightSum = queue.reduce((acc,cur)=> acc+=cur[1], 0);
                }while(curWeight + weightSum > weight);
                
                if(curWeight + weightSum <= weight){
                queue.push([0,curWeight]);
                }
            }
        }
    }
    
    return answer+bridge_length+1;
}