const atMostPalindrome = (s) => {

    let left = 0, right = s.length-1;

    while(left < right){

        if(s[left] !== s[right]){
            //remove from left and right
            return(checkIfPalindrome(s, left + 1, right) || checkIfPalindrome(s, left, right -1));
            
        }
        
        left++;
        right--;
    }

    return true;
};

const checkIfPalindrome = (s, left, right) =>{

    while(left < right){

        if(s[left] !== s[right]){
            return false;
        }

        left++;
        right--;
    }

    return true;
};

 const s = "abc";

// const s = "eedede";

// const s = "abab"

// const s = "aba";

// const s = "cxcaac";

// const s = "abca";

console.log(atMostPalindrome(s));