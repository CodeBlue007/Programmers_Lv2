function solution(s)
{
    let array = [...s];
    let stack = [];
    let idx = 0;
    let top = -1;
    
    while(idx < array.length){
        if(stack.length === 0){
            stack.push(array[idx]);
            top ++;
        }
        else{
            if(stack[top]===array[idx]){
                stack.pop();
                top --;
            }
            else{
                stack.push(array[idx]);
                top++;
            }
        }
        idx++;
    }
    
    return stack.length ===0? 1 : 0;
}