import java.util.HashMap;

public class LengthOfLongestSubstring {

    static int lengthOfLongestSubstring(String s){

        if(s.length() <= 1) return s.length();

        int left=0;
        HashMap<Character, Integer> seenChars = new HashMap<Character, Integer>();
        int longest = 0;


        for(int right=0; right < s.length(); right++){
            char currentChar = s.charAt(right); //key of hashmap
            int prevSeenCharIndex;
            if(seenChars.get(currentChar) == null){
                prevSeenCharIndex = -1;
            }else {
                prevSeenCharIndex = seenChars.get(currentChar); //value
            }

            if(prevSeenCharIndex >= left){
                left = prevSeenCharIndex + 1;
            }
            
            seenChars.put(s.charAt(right), right);
            longest = Math.max(longest, (right - left) +1);

        }

        return longest;
    }
    public static void main(String[] args) {
        String s = "abcabcbb";

        int value = LengthOfLongestSubstring.lengthOfLongestSubstring(s);
        System.out.println(value);
    }
}
