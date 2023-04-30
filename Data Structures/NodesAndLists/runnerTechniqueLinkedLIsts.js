const LinkedList = require('./LinkedList');

/*
    Approaching Linked List Problems w/ multiple iterator pointers

    - "2 Pointer Techniques"
*/


// Two Pointers Moving in Parallel
// - "Create a function that returns the nth last element of a singly linked list"

/*
    1: use an array to store the LL
        - easy to read
        - wastes memory

    
*/
const arrayNthLast = (list, n) => {
    const arrayList = [];
    
    let currentNode = list.removeHead();
    while (currentNode) {
        arrayList.push(currentNode);
        currentNode = currentNode.getNextNode();
    }

    return arrayList[list.length - n];
}


/*
    2: Runner Technique
    - 2 pointers at different positions moving at the same rate.
*/
const nthLastNode = (linkedList, n) => {
    let current = null;
    let tailSeeker = linkedList.head;
    let count = 0;
    while (tailSeeker) {
      tailSeeker = tailSeeker.next;
      if (count >= n) {
        if (!current) {
          current = linkedList.head;
        }
        current = current.next;
      }
      count++
    }
    return current;
  }


// Pointers moving at different speeds
//  - find the middle node of a linked list

// Naive, use an array representation
const arrayMiddleNode = (list) => {
  const arrayList = [];
    
  let currentNode = list.removeHead();
  while (currentNode) {
      arrayList.push(currentNode);
      currentNode = currentNode.getNextNode();
  }

  return arrayList[list.length / 2];
}


/*
  use fast and slow pointers. 
  - by moving the fast pointer 2 x for every 1 move of the slow pointer, once the fast pointer reaches the end
  of the data structure, the slow pointer is halfway through  (i.e. the middle!)
*/
const findMiddle = linkedList => {
  let fastPointer = linkedList;
  let slowPointer = linkedList;

  while (fastPointer !== null) {
    fastPointer = fastPointer.getNextNode();
    if (fastPointer !== null) {
      fastPointer = fastPointer.getNextNode();
      slowPointer = slowPointer.getNextNode();
    }
  }
  return slowPointer;
}

/*
  This is stupid. 
  This moves the slow pointer every other iteration. 
  I hate this because it requires an extra variable and unnecessary math. 
  - It's less readable, and technically more complicated. Even if it is simple.. it isn't as simple as it could be
*/
const findMiddleAlternative = linkedList =>  {
  let count = 0;
  let fast = linkedList;
  let slow = linkedList;

  while (fast !== null) {
    fast = fast.getNextNode();
    if (count % 2 !== 0) {
      slow = slow.getNextNode();
    }
    count++;
  }

  return slow;
}