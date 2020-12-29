const findTotalArea = (heights) => {

    let totalArea = 0;
    
    for (let currentPoint = 0; currentPoint < heights.length; currentPoint++) {
        let maxRight =0,maxLeft =0;
        
        //first loop for start to end
        for (let p1 = currentPoint; p1 < heights.length; p1++) {
            //find maxRight
            maxRight = Math.max(maxRight, heights[p1]);    
        }
        

        //second loop for end to start
        for(let p2 = currentPoint; p2 >= 0; p2--){ 
            //find maxRight
            maxLeft = Math.max(maxLeft, heights[p2]);
        }

        let currentWaterArea = Math.min(maxLeft, maxRight);
        //console.log(currentPoint + "currentPoint");
        //console.log(currentWaterArea - heights[currentPoint] + "maxLeft" + maxLeft + " maxRight" + maxLeft);
        totalArea = totalArea + (currentWaterArea - heights[currentPoint]);
    }
    return totalArea;
};

const findTotalWaterOptimization = (heights)=>{

    if(heights.length == 0){
        return 0;
    }
    let leftPoint=0, currentActivePointer=0, rightPoint=heights.length-1, leftMax=0, rightMax=0, totalWaterFound=0;

    while(leftPoint != rightPoint ){
        leftMax = Math.max(leftMax, heights[leftPoint]);
        rightMax = Math.max(rightMax, heights[rightPoint]);
        
        if(leftMax <= rightMax){
            leftPoint++;
            currentActivePointer = leftPoint -1;//to keep at current point to move to next
            
        }else{
            rightPoint--;
            currentActivePointer = rightPoint + 1;//to keep at current point to move to next
        }

        totalWaterFound = totalWaterFound + (Math.min(leftMax,rightMax) - heights[currentActivePointer]);
    }
    return totalWaterFound;
};

//const heights = [0,1,0,2,1,0,3,1,0,1,2];
//const heights = [0,1,0,2,1,0,1,3,2,1,2,1]
//const heights = [1,6,2,9,4];
//const heights = [8,0,3,0,1,2,3,9,7];
//const heights = [2,4,6,8];
//const heights = [5,0,3,0,1,0,2,0,1,2,3,4,7];
const heights = [];
 

console.log(findTotalArea(heights));
console.log(findTotalWaterOptimization(heights));