class LinkedList{
    constructor(){
        this.head = null;
    }
    unshift(item)
    {
        //add the new item to the start of my linkedlist
        
        let node = new Node(item, this.head);
        node.previous = this.head;    //saying put the previous node at the start of the linked list
        this.head = node;               // node will be at the start
    }
    shift(){                                                    // removes first item 
        let el2 = this.head.next;                  
        this.head = el2; 
        console.log(`this is our second element`);
        console.log(el2.next);               //print next list item        // grab the second element in our linked lists

    }
    removeAll(item){                        // this is written generically removing duplicate instances of arguments passed in. 
          // removes all instances of item from the list
        
        let gone = this.item.length;
        console.log(`${item} is removed from the list`);
        console.log(gone.next);

        function removeAll(array, key){
            var index = array.indexOf(key);
        
            if(index === -1) 
            return `removeAll statement`;
        
            array.splice(index, 1);
            removeAll(array,key);
        }
    }
    removesAt(index){ //remove an item at a particular index. not from an array from a linked lists see notepad notes
        let node = this.head;    
        let prev = null;           // we are faking that its an array
    
        for (let i=0; i<=index; i++){
            if(i===index-1){
                prev = node;
            }
            else if(i === index){  
                // if we are not at the end of the linked list             
                if(node.next!==null){
                let newNext = node.next; 
                prev.next = newNext;           
                }
            }
            else {
                // if we are at the end of the linked list
                let newNext = null;
                prev.next = newNext;
            }
           
            node = this.getNextNode(node);
    }

    insertAt(index, item){
        let node = this.head;    
                 // moving onto the next array   // we are faking that its an array
    
        Array.prototype.insert = function (index, item) {
            this.splice(index, 0, item);
        };

    };
    getNextNode(node){
        let n = node.next;
        return n;
    
    }
        
class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
        this.previous = null;
    }
}

print(){
    //This will print each node in my linked list
    let node = this.head;
}
    while(node){
        console.log(node.value);
        node = node.next;
    }
    

let list = new LinkedList();

list.unshift("heeey");
list.unshift("sally");
list.unshift("blue");
list.unshift("me");
list.unshift("go");
list.unshift("go");
list.unshift("go");
list.unshift("go");
list.unshift("go");
list.shift();
list.removesAt(2);  // would remove blue  dont forget the order changes


list.print();


// here is the list
// this.head is a node

// functions like an array, these are 

// learn this by tinkering with it 
// better practice with functions and a deeper understanding
// difficult for anyone

// linked list is like a manger points to node

// nodes points to themselves just how they are set up like classes within classes //

///////////////////////////////////////////////////////////////////////////////////////

// MAP VERSION of Second PART of Lab. 

let names = new Array(3);

names[0] = "tommy";
names[1] = "joey";
names[2] = "billy";

const map = new Map();
map.set("tommy");
map.set("tommy");
map.set("tommy");
map.set("joey");
map.set("tommy");
map.set("joey");
map.set("billy");
map.set("billy");
map.set("billy");



function countWithArray(){
  for(let i = 0; i<1000;i++){
  set.add(i);
  names.filter(function(){
    return value === false;
  }).length
}
set.size; 
set.map.filter(map);

console.log(map);
};



// ARRAY VERSION PART TWO

const numberArray  = [5, 2, 5, 2, 2, 8, 2, 2, 9, 4]

function count(numbers) {
  return numbers.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

console.log(count(numberArray));
   
