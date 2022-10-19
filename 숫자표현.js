function solution(n) {
    
    let count =0;
    let [sum,roopcount] = [0,1];
    
    while(roopcount <= n){
        sum = 0;
        let i = roopcount;
        if(roopcount > n/2) {
            count ++;
            break;
        }
        while(sum<n){
        sum +=i;
        if(sum === n){
            count ++;
            break;
        }
        if(sum > n) break;
        i++;
    }
        roopcount++;
    }

    return count;
}