const vaildPalindrome = (s) => {

    //remove special chars
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let left, right=s.length -1;

    for(left =0; left < right; left++, right --){
        if(s[left] !== s[right]){
            return false;
        }
    }

    return true;
};


//initialize the points from the center
const isEven = (number) =>{
    if(number % 2 === 0){
        return true;
    }

    return false;
};

const vaildPalindrome2 = (s) => {

    //remove special chars
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let left, right;
    if(isEven(s.length)){
        right = Math.floor(s.length /2);
        left = right - 1;
    }else{
        left = Math.floor(s.length /2);
        right = left;
    }

    while(left >=0 && right <= s.length-1){
        if(s[left] !== s[right]){
            return false;
        }
        left--;
        right++;
    }

    return true;
};

const reverseString = (str) => {

    return  str.split('').reverse().join('');
};

const vaildPalindrome3 = (s) => {

    //remove special chars
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    
    const reversedString = reverseString(s);

    for (let left = 0, right=0; left < s.length; left++, right++) {
        
        if(s[left] !== reversedString[right]){
            return false;
        }
    }

    return true;
};

// const s="race e car";

// const s="";

// const s=" ";

//const s="A man, a plan; a ccanal: Panama";

const s ="abb";

console.log(vaildPalindrome(s));
console.log(vaildPalindrome2(s));
console.log(vaildPalindrome3(s));