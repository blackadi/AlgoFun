//solving it using push and pop 
const buildingArrayString = (value) => {
    //build the string and return it without backspace

    let newValue = [];
    for(let p=0; p < value.length; p++){
        if(value[p] === "#"){
            //remove the last element from the array
            newValue.pop();
        }else{
            //push the new element inside the new array
            newValue.push(value[p]);
        }
    }

    return newValue;
};

const stringMatch = (S,T) => {
    //send both strings to buildArrayString to remove any backspace then compare

    const newS = buildingArrayString(S);
    const newT = buildingArrayString(T);

    if(newS.length != newT.length){
        return false;
    }else{
        //check each char inside the array if they match or not
        for (let p = 0; p < newS.length; p++) {
            if(newS[p] != newT[p]){
                return false;
            }
        }
        return true;
    }
};

const isMatchOptimization = (S,T) => {

    let p1=S.length-1, p2=T.length-1;

    while(p1 >= 0 || p2 >=0 ){
        if(S[p1] === '#' || T[p2] === "#"){

            if (S[p1] === "#") {
                let backCounter=2;
                while(backCounter > 0){
                    p1--;
                    backCounter--;

                    if(S[p1] === "#"){
                        backCounter = backCounter + 2;
                    }
                }
            }

            if(T[p2] === "#"){
                let backCounter=2;

                while(backCounter > 0){
                    backCounter--;
                    p2--;

                    if(T[p2] === "#"){
                        backCounter = backCounter +2;
                    }
                }
            }

        }else{
            if(S[p1] !== T[p2]){
                return false;
            }else{
                p1--;
                p2--;
            }
        }
    }
    return true;
};

//const S="1234#";
// const S="ab#c";
// const T="ad#c";

// const S="ab###";
// const T="a4###";

// const S="zsdasd#sad$###dsad";
// const T="a4#c";

// const S="";
// const T="";

// const S="y#fo##f";
// const T="y#f#o##f";

const S="a##c";
const T="#a#c";

// const S="a#c";
// const T="b";

// const S="ab##";
// const T="c#d#"

// console.log(findMatchString(S,T));
console.log(isMatchOptimization(S,T));