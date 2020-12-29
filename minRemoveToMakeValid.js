const minRemoveToMakeValid = (s) => {

    let leftBraket = [], newS = s.split(''), left=0; right=0;

    for(let index=0; index < s.length; index++){
        
        if(s[index] === "("){
            leftBraket.push(index);
            left++;
        }

        if(s[index] === ")"){
            if(left > 0){    
                leftBraket.pop();
                left--;
            }else{
                newS[index]="";
            }
        }
    }

    if(right > 0){
        return "";
    }else{
        if(left > 0){
            while(left > 0){
                let removeAt = leftBraket.pop();
                newS[removeAt] = "";
                left--;
            }
        }
        return newS.join('');
    }

}

//const s = "(abc(ad)a";
//const s = "lee(t((c)o)))de)";
// const s = "(ab(c)d";
//const s = "())()(((";
const s = "a)bc(d)";

console.log(minRemoveToMakeValid(s));