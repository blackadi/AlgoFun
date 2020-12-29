import java.util.LinkedList;

public class ReversedLinkedlist {

    void reverseLinkList(LinkedList<Integer> head){

        while (!head.isEmpty()){
            System.out.println(head.getLast());
            head.removeLast();
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>();

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        System.out.println(list);

        ReversedLinkedlist reversedLinkedlist = new ReversedLinkedlist();
        reversedLinkedlist.reverseLinkList(list);
    }
}
