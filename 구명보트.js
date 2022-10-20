function solution(people, limit) {
    
    people.sort((a,b) => a-b);
    let [start,partial_sum,count,end]= [0,0,0,people.length-1];
    
    while(start <= end){
        partial_sum = people[start];
        while(partial_sum + people[end] > limit && start <= end){
            end -= 1;
            count += 1;
        }
        if(partial_sum + people[end] <= limit && start <= end){
            end -= 1;
            start += 1;
            count += 1;
        }
        
        partial_sum = 0;
    }
    
    return count;
}