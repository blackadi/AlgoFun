const findMaxSubstring = (S) =>{

    let max =0;

    for(let i=0; i < S.length ; i++){
        let currentMax = 0;
        //Create Haspmap for each element
        const subString = {};

        for(let j=i; j < S.length; j++){
            
            if(subString[S[j]] >= 0){//this mean there is no key defind
                break;
            }
            subString[S[j]] = 1;
            currentMax++;
        }
        if(currentMax > max){
            max = currentMax;
        }
    }

    return max;
};

const findMaxSubstringOptimization = (S) => {
  
    let left =0, right=0, max=0, currentMax=0;
    let subString = {};

    if(S.length <= 1){
        return S.length;
    }

    while(left < S.length -1){

        if(subString[S[right]] || right == S.length){
            left++;
            right = left;
            subString = {};
            currentMax=0;
        }else{
            subString[S[right]] = true;
            right++;
            currentMax++;
            max = Math.max(currentMax, max);
        }
    }

    return max;
};

const optimizeSolution = (S) => {

    let max=0, left=0; right=0, subString = {}, currentMax=0;

    if(S.length <= 1){
        return S.length;
    }

    while(left < S.length-1){

        if(subString[S[right]] >= 0){
            if(subString[S[right]] >= left){
                left = subString[S[right]] + 1;
                subString[S[right]] = right;
                currentMax = (right - left) + 1;
                max = Math.max(max,currentMax);
                right++;
            }else{
                currentMax = (right - left) + 1;
                subString[S[right]] = right;
                right++;
                
                max = Math.max(max,currentMax);
            }


        }else{
            // if(right >= S.length){
            //     left++;
            //     right = left;
            // }
            if(right == S.length)return max;
            subString[S[right]] = right;
            currentMax = (right - left) + 1;
            right++;
            max = Math.max(max, currentMax);
        }

        
    }

    return max;
};

const lengthOfLongestSubstring = (S) => {

    let left=0, longest=0;
    let seenChars = {};
    
    for(let right=0; right < S.length; right++){
        const seenChar = S[right];
        const prevSeenCharIndex = seenChars[seenChar];
        
        if(prevSeenCharIndex >= left){
            left = prevSeenCharIndex + 1;
        }
        
        seenChars[seenChar] = right;
        longest = Math.max(longest, (right - left) +1);
    }
    
    return longest;  
};

// const S = "abcbda";

// const S = "abcabccdb";

// const S = "";

// const S = "abccabb";

// const S = "ccccccccccc";

// const S = " ";

// const S = "abcbdaac";

const S = "pwwkew";

console.log(findMaxSubstring(S));
console.log(lengthOfLongestSubstring(S));