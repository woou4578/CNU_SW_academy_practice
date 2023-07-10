class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  find(value) {
    let currNode = this.head
    while(currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    if(prevNode === null) {
      console.error("연결 리스트가 존재하지 않아 삭제할 수 없습니다.");
    } else {
      while(prevNode.next !== null) {
        if(prevNode.next.value === value) {
          break;
        }
        prevNode = prevNode.next;
      }
      if(prevNode.next === null) {
        console.error("삭제하고자 하는 값이 없습니다.");

      } else {
        prevNode.next = prevNode.next.next;

      }
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += ` ${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.
      substr(0, displayString.length -2);
    displayString += "]";
    console.log(displayString);
  }

  size() { // 현재 연결 리스트의 사이즈 출력
    let cnt = 0;
    let currNode = this.head;
    while(currNode !== null) {
      cnt++;
      currNode = currNode.next;
    }
    return cnt;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);

// 3이 들어있지 않은데 삭제하려고 해 경고문을 출력
linkedList.remove(3); 
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();

console.log(linkedList.size());