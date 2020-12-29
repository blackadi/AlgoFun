
const binarySearch = (left, right, num) => {
    
    if(left > right){
        return -1;
    }
    const mid = Math.floor((left + right) / 2);

    if(array[mid] > num){

        //search left side
        return binarySearch(left, mid - 1, num);
    }else{
        if(array[mid] < num){

            //search right side
            return binarySearch(mid + 1, right, num);
        }else{
            return array[mid];
        }
    }
}

const array = [1,2,3,4,5,6,7];

console.log(binarySearch(0, 6, 0));