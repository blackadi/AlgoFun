

    const getIndicies = function(items, target) {
        let count = 0;
        for(let i = 0; i < items.length; i++){
            count++;
            for(let j = i; j < items.length; j++){
                count++;
                //console.log(items[i] + " + " + items[j] + " = " + (items[i] + items[j]));
                if(items[i] + items[j] === target){
                    console.log("Found at indicies i="+ i + " j=" + j);
                    console.log(count);
                    return [i, j];
                }
            }
        }
        console.log(target + " sum Not Found");
        console.log(count);
    }

    //use two pointer technique
    const foundIndicies = function(nums, target) {
        if(nums.length != 0 && nums.length != 1)
        {
            for(let p1=0; p1 < nums.length; p1++){
                const numberToFind = target - nums[p1];
                //console.log({p1, value: nums[p1]});
                //console.log({numberToFind});

                for(let p2=p1+1; p2 < nums.length; p2++){
                    //console.log({p2, value: nums[p2]});
                    if(numberToFind === nums[p2]){
                        return [p1, p2]; 
                    }
                }
            }
            return null;
        }
        return null;
        
    } 

    const foundIndiciesOptimize = function(nums, target) {
        if(nums.length != 0 && nums.length != 1)
        {
            const numsMap = {};
            
            for(let p=0; p < nums.length; p++){
                
                const currentMapValue = numsMap[nums[p]];
                //if(allNTF[numberToFind] === numberToFind)
                if(currentMapValue >= 0 ){ //if not undefiend
                    return [currentMapValue, p];
                }
                else{
                    const numberToFind = target - nums[p];
                    numsMap[numberToFind] = p; //store and NTF and the index of nums[p1]
                }
            } 

            return null;
        }
        return null;
        
    } 

const nums = [3,2,4];

//console.log(getIndicies(nums, 11));

//console.log(foundIndicies(nums, 11));

console.log(foundIndiciesOptimize(nums, 6));