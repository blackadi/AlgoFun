const array = [4,6,1,6,8,0];

const mergeSort = (array) => {

    if(array.length === 1){
        return array;
    }

    //split array into left and right
    let half = Math.floor(array.length / 2)
    let right = array.slice(0, half);
    let left = array.slice(half, array.length);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0, rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(array);
console.log(answer);