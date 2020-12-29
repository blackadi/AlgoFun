const quickSort = (array, left, right) =>{
    if(left < right){

        const partitionIndex = partition(array, left, right);
        quickSort(array, 0, partitionIndex -1);
        quickSort(array, partitionIndex + 1, right);
    }
}

const partition = (array, left, right) => {

    let i = left;
    for (let j = i; j < right; j++) {
        if(array[j] < array[right]){
            swap(array, i, j);
            i++;
        }
    }

    swap(array, i, right);

    return i;
}

const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const hoareQuickSelect = (array, left, right, indexToFind) => {
   
        let partitionIndex = partition(array, left, right);
        
    
        if(partitionIndex === indexToFind){
            return array[indexToFind];
        }else{
            if(partitionIndex > indexToFind){
                return hoareQuickSelect(array, left, partitionIndex - 1, indexToFind);
            }else{
                return hoareQuickSelect(array, partitionIndex + 1, right, indexToFind);
            }
        }
    
}

//const array = [5,3,1,6,4,2];
//const array = [2,7,8,6,4,1,9,3,5]
//const array = [3,2,3,1,2,4,5,5,6];
const array = [2,1];


//quickSort(array, 0, array.length - 1);


var findKthLargest = (nums, k) => {
    let indexToFind = nums.length - k;
    const result = hoareQuickSelect(array, 0, array.length - 1, indexToFind);
    console.log(result);
}

findKthLargest(array, 1);