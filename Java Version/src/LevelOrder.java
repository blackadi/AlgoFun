import java.util.*;

public class LevelOrder {
    public static List<List<Integer>> getLevelOrder(TreeNode root) {

        if(root == null){
            return new ArrayList<>();//empt y list
        }
        else{
            Queue<TreeNode> nodeOrder = new LinkedList<>();
            int length, counter =0;
            List<Integer> res = new ArrayList<Integer>();
            List<List<Integer>> finalRes = new ArrayList<>();

            nodeOrder.add(root);
            length = nodeOrder.size();

            while(nodeOrder.size() != 0){
                TreeNode node = nodeOrder.poll();
                res.add(node.value);
                counter++;

                if(node.left != null){
                    nodeOrder.add(node.left);
                }

                if(node.right != null){
                    nodeOrder.add(node.right);
                }

                if(counter == length){
                    finalRes.add(new ArrayList<>(res));
                    length = nodeOrder.size();
                    res.clear();
                    counter=0;
                }
            }

            return finalRes;
        }
    }

    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();
        tree.insert(60);
        tree.insert(40);
        tree.insert(90);
        tree.insert(30);
        tree.insert(50);
        tree.insert(45);
        tree.insert(55);
        tree.insert(80);
        tree.insert(170);
        tree.insert(51);

        //             60
        //      40            90
        //  30      50     80      170
        //       45    55
        //           51

        List<List<Integer>> result = new ArrayList<>();
        result = getLevelOrder(tree.root);
        System.out.println(result);
    }
}

