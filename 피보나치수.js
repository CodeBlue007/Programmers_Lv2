function solution(n) {
    const pibonacci = (n) => {
        let array = new Array(n+1).fill(0);
        array[0] = 0;
        array[1] = 1;
        
        for(let i=2; i<array.length; i++){
            array[i] = array[i-1]%1234567 + array[i-2]%1234567
        }
        
        return array[n];
    }
    
       let answer = pibonacci(n);
       return answer%1234567;
   
   }