function solution(s) {
    let arr = [...s];
    let flag = true;
    
    for(let i=0; i<arr.length;i++){
        if(arr[i] !== ' '){
            if(flag){
                flag = false;
                arr[i] = arr[i].toUpperCase();
            }
            else{
                arr[i] = arr[i].toLowerCase();
            }
        }
        else{
            flag = true;
        }
    }
    return arr.join('');
}