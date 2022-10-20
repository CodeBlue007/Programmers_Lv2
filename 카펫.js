function solution(brown, yellow) {
    let set = new Set();
    for(let i=1; i<=yellow; i++){
        if(set.has(i)) break;
        if(yellow%i === 0){
            set.add(i);
            set.add(yellow/i);
        }
    }
    
    const Isvalid = (width,height) =>{
        let brownNum = (width+2)*2 + height*2;
        if(brownNum === brown){
            return true;
        }
        else{
            return false; 
        }
    }
    
    let array = [...set].sort((a,b) => a-b);
    let answer = [];
    
    for(let i=0;i<array.length;i++){
        let height = array[i];
        let width = array[array.length-1-i];
        
        if(height > width) break;
        else if(height === width){
            answer.push(width+2);
            answer.push(height+2);
            break;
        }
        else{
            let bool = Isvalid(width, height);
            if(bool){
                answer.push(width+2);
                answer.push(height+2);
                break;
            }
        }
    }
    
    return answer;
}