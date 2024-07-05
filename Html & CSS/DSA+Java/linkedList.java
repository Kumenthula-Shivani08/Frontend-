class LL{
  Node head;
  private int size;
  LL(){
    size = 0;
  }
  public class Node{
    String data;
    Node next;
    Node(String data){
    this.data = data;
    this.next=null;
    size++;
  }
}
public void addFirst(String data){
  Node newNode = new Node(data);
  newNode.next = head;
  head = newNode;
  return;
}
public void addLast(String data){
  Node newNode = new Node(data);
  if(head == null){
    head = newNode;
    return;
  }
  Node LastNode  = head;
  while(LastNode.next!=null){
    LastNode = LastNode.next;
  }
      LastNode = LastNode.next;

}
public void printList(){
  Node currNode = head ;
  while(currNode!=null)
  {
    System.out.print(currNode.data+"->");
    currNode = currNode.next;
  }
  System.out.println("null");
}
public void removeFirst(){
  if(head == null){
    System.out.println("Empty list ,nothing to delete");
    return;

  }
  head = this.head.next;
  size--;
}
  public void removeLast() {
       if(head == null) {
           System.out.println("Empty List, nothing to delete");
           return;
       }
       size--;
       if(head.next == null) {
           head = null;
           return;
       }
       Node currNode = head;
       Node LastNode =  head.next;
        while(LastNode.next!=null){
           currNode = currNode.next;
           LastNode = LastNode.next;
       }


       currNode.next = null;
   }
  public int getSize(){
    return size;
  }

  public static void main(String args [])
  {
    LL list = new LL();
    list.addLast("is");
    System.out.println(list.getSize());
  }
}

