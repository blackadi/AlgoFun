const matchingparentheses  = (value) => {

    let parentheses = [];

    for(let p=0; p < value.length; p++){

        if(value[p] === "(" || value[p] === "[" || value[p] === "{"){
            parentheses.push(value[p]);
        }
        else{
            let match = parentheses.pop();

            if(match === "("){
                if(value[p] !== ")"){
                    parentheses = [];
                    return false;
                }
            }else{
                
                if(match === "{"){
                    if(value[p] !== "}"){
                        parentheses = [];
                        return false;
                    }
                }else{
                    
                    if(match === "["){
                        if(value[p] !== "]"){
                            parentheses = [];
                            return false;
                        }
                    }else{
                        parentheses = [];
                        return false;
                    }
                }
            }
        }
    }

    if(parentheses.length === 0)
    return true;
    else 
    return false;
}

const isValidParentheses = (s) => {

    //store matching patterns inside hashmap
    const brakets = {"{": "}", "(":")", "[":"]"};

    let leftBraket = [];

    for(let p=0; p < s.length; p++){
        //start moving from the first index and check every open braket [leftBraket]    
        if(brakets[s[p]]){
            //store the opended left braket in a stack
            leftBraket.push(s[p]);
        }else{
            //did not find a open left braket, lets check corrocponding closing braket
            let rightBraket = leftBraket.pop();
            if(brakets[rightBraket] !== s[p]){
                //then the colse braket did not match the open braket
                return false;
            }
        }
    }

    //if the stack is not empyt return false
    return leftBraket.length===0;
}

const value = ["{()[]}", "", "{}", "{()}", "{}{}", "][", "[)()]", "([{]})", "[", "(("];

for (let index = 0; index < value.length; index++) {
    //console.log(matchingparentheses(value[index]));
    console.log(isValidParentheses(value[index]));   
}