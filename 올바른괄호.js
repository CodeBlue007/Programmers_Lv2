function solution(s){
    let answer = false;
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === '(') stack.push(s[i]);
        else {
            if(stack.length === 0){
                return answer;
            }
            else {
                stack.pop();
            }
        }
    }
    return stack.length===0? true : answer;
}