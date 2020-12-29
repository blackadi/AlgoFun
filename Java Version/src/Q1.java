import java.util.HashMap;

public class Q1 {

    static int[] getIdicies(int nums[], int target){
        int result[];
        HashMap<Integer, Integer> numsMap = new HashMap<Integer, Integer>();

        for(int p=0; p < nums.length; p++){

            //check if the hasmap has the numberToFind
            if(numsMap.get(nums[p]) != null){
                result = new int[]{numsMap.get(nums[p]), p};
                return result;
            }
            else{
                int numberToFind = target - nums[p];
                numsMap.put(numberToFind, p);
            }
        }

        return  null;
    }

    public static void main(String[] args) {

        int []nums = {3,2,4};
        int []result = getIdicies(nums, 6);
        System.out.println(result[0] + "," + result[1]);

    }
}
