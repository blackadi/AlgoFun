const findMaxArea = (nums) => {
    let maxArea =0;
    let L = 0; //to calclate area = Length * Width

    for(let p1=0; p1 < nums.length; p1++){
        for(let p2=p1+1; p2< nums.length; p2++){
            if(nums[p1] < nums[p2]){
                L = nums[p1];
            }else{
                L = nums[p2];
            }

            const newArea = L * (p2 -p1);
            if(newArea > maxArea){
                maxArea = newArea;
            }
        }
    }

    return maxArea;
};

const findMaxAreaOptimization = (heights) => {
    let maxArea =0;
    let p2 = heights.length -1;
    let p1=0;
    // let height = Math.min(heights[p1], heights[p2]);//to find the min area
    // let width = p2 - p1;//to find the min area
    // maxArea = height * width;//to find the min area
    while(p1 < p2){
        const height = Math.min(heights[p1], heights[p2]);//to find the max area
        const width = p2 - p1;//to find the max area
        const newArea = height * width;//to find the max area

        //  height = Math.min(heights[p1], heights[p2]);//to find the min area
        //  width = p2 - p1;//to find the min area
        // const newArea = height * width;//to find the min area
        if(heights[p1] <= heights[p2]){
            p1++;//to find the max area
            //p2--;//to find the min area
        }else{
            p2--;//to find the max area
            //p1++; //to find the min area
        }
        maxArea = Math.max(maxArea, newArea);//to find the max area
        //maxArea = Math.min(maxArea, newArea);//to find the min area
    }

    return maxArea;
};

//const nums = [2,3,4,5,18,17,6];
const nums = [7,1,2,3,9]; 
//const nums = [1,3,7,9,2];
//const nums = [6,9,3,4,5,8];

console.log(findMaxArea(nums)); //time complicity: O(n^2) - space complicity O(1)
console.log(findMaxAreaOptimization(nums)); //time complicity: O(n) - space complicity O(1)