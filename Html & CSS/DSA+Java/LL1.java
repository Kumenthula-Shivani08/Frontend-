public class linkedList{
class LL1{
  Node head;
  private int size
  LL1(){
    size = 0;
  }
  public class Node{
    String data;
    Node next;
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
public void removeLast(){
  if(head == null){
    System.out.printn("Empty list nothing to delete");
    return;
  }
  Node currNode = head;
  Node LastNode =  head.next;
  while(LastNode.next!=null){
    currNode = currNode.next;
    LastNode = LastNode.next;
  }
  public int getSize(){
    return size;
  }
  public static void main(String args [])
  {
    LL1 list = new LL1();
    list.addLast("is");
    System.out.println(list.getSize());
  }
}
}
