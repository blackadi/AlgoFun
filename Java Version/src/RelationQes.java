import java.util.*;

public class RelationQes {
    String parent;
    String child;

    public RelationQes(String parent, String child) {
        this.parent = parent;
        this.child = child;
    }
}

class PrintTree{
    public static void main(String[] args) {
        List<RelationQes> input = new ArrayList();
        input.add(new RelationQes("animal", "mammal"));
        input.add(new RelationQes("animal", "bird"));
        input.add(new RelationQes("lifeform", "animal"));
        input.add(new RelationQes("cat", "lion"));
        input.add(new RelationQes("mammal", "cat"));
        input.add(new RelationQes("animal", "fish"));

        print(input);
    }
    static void print(List<RelationQes> input){

        HashMap<String, List<String>> map = new HashMap<>();
        List<String> newList;
        Set<String> children = new HashSet<>();
        
        /*
        lifeform -> [animal]
        animal -> [mammal, bird, fish]
        cat -> [lion]
        mammal -> [cat]
         */

        for(RelationQes relation: input){
            children.add(relation.child);
            if(map.containsKey(relation.parent)){
                map.get(relation.parent).add(relation.child);
            }else{
                newList = new ArrayList<>();
                newList.add(relation.child);
                map.put(relation.parent, newList);
            }
        }

        System.out.println(map);

        

    }
}