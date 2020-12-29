import java.util.*;

public class Q13 {

    static String f(String s){
        String newS[] = s.split("");
        Stack<Integer> leftBraket = new Stack<Integer>();

        for(int i=0; i < newS.length; i++){
            if(newS[i].equals("(")){
                leftBraket.push(i);
            }

            if(newS[i].equals(")")){
                if(!leftBraket.empty()){
                    leftBraket.pop();
                }else{
                    newS[i] = "";
                }
            }
        }

        while(!leftBraket.empty()){
            int index = leftBraket.pop();
            newS[index] = "";
        }

        return String.join("", newS);
    }
    public static void main(String[] args) {
        String s = "a)bc(d)";
        System.out.println(f(s));
    }
}
