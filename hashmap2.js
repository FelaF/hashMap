import {Node, LinkedList} from "./pll.js"

class HashMap{
    constructor(size = 16){
        this.size = size
        this.buckets = Array(this.size).fill().map(() => new LinkedList());
        this.loadFactor = 0
        this.count = 0
    }
    check(){
        this.loadFactor = this.count / this.size;
        if (this.loadFactor > 0.75){
            this.resize();
        }
    }
    hash(key){
        let hash = 0
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.size
        }
        return hash
    }
    set(key, value){
        const index = this.hash(key)
        const LList = this.buckets[index]
        let newNode = new Node({key, value}) // Correct way to create Node
    
        if (LList.size() === 0){ 
            LList.append(newNode)

        }
        else {
            let current = LList.head();
            while(current){
                if (current.data.key === key){
                    current.data.value = value
                    return
                }
                current = current.nextNode; // Remove parentheses
            }
            LList.append(newNode)
        }
        this.count++
        this.check()
    }
    get(key) {
        const index = this.hash(key);
        const LList = this.buckets[index];
        if (LList){
            let current = LList.head()
            while(current){
                if (current.data.key === key){
                    return current.data.value
                }
                current = current.nextNode
            }
        }
        return null
    }
    has(key){
        const index = this.hash(key);
        const LList = this.buckets[index];
        console.log(index);
        console.log(LList.toString()); 
        console.log(LList.head())
        if (LList && LList.head()) { 
            let current = LList.head();
            while (current) {
                console.log(current);
                if (current.data && current.data.key === key) {
                    return true;
                }
                current = current.nextNode;
            }
        }
        return false;
    }
    remove(key) {
        if (this.has(key)) {
            const index = this.hash(key);
            const LList = this.buckets[index];
            
            if (LList && LList.head()) { // Check if LList exists and has nodes
                let current = LList.head();
                let prev = null;
    
                while (current) {
                    if (current.data && current.data.key === key) {
                        // If the node to remove is the head
                        if (!prev) {
                            LList.head = current.nextNode; // Assuming there's a setter for head
                        } else {
                            prev.nextNode = current.nextNode;
                        }
                        this.count--;
                        this.check(); // Check if resizing is needed after removal
                        return;
                    }
                    prev = current;
                    current = current.nextNode;
                }
            }
        }
        // Key not found or bucket is empty, do nothing or handle accordingly
    }
    length() {
        return this.count;
    }
    
    clear() {
        this.buckets = Array(this.size).fill().map(() => new LinkedList());
        this.count = 0;
        this.loadFactor = 0;
    }
    
    keys() {
        let keys = [];
        this.buckets.forEach(bucket => {
            let current = bucket.head();
            while (current) {
                keys.push(current.data.key);
                current = current.nextNode;
            }
        });
        return keys;
    }
    
    values() { // Note: you had 'value()' which seems like a typo for 'values'
        let values = [];
        this.buckets.forEach(bucket => {
            let current = bucket.head();
            while (current) {
                values.push(current.data.value);
                current = current.nextNode;
            }
        });
        return values;
    }
    
    entries() {
        let entries = [];
        this.buckets.forEach(bucket => {
            let current = bucket.head();
            while (current) {
                entries.push([current.data.key, current.data.value]);
                current = current.nextNode;
            }
        });
        return entries;
    }
    
    resize() {
        const newSize = this.size * 2;
        const oldBuckets = this.buckets;
        this.size = newSize;
        this.buckets = Array(this.size).fill().map(() => new LinkedList());
        this.count = 0;
        oldBuckets.forEach(bucket => {
            let current = bucket.head();
            while (current) {
                this.set(current.data.key, current.data.value);
                current = current.nextNode;
            }
        });
        this.check();
    }
}




/* 
const nodeOne = new Node("1")
const nodeTwo = new Node("2")
const nodeThree = new Node("3")

firstHashMap.buckets[0].append(nodeOne)
firstHashMap.buckets[0].append(nodeThree)
firstHashMap.buckets[0].prepend(nodeTwo)


console.log(firstHashMap.has("Four"))
console.log(firstHashMap.hash("Four"))
firstHashMap.set("Four", 5)

console.log(firstHashMap.hash("Jimeny"))
firstHashMap.set("Jimeny","Crickets")


console.log(firstHashMap.remove("Jimeny"))
console.log(firstHashMap.remove("Four"))




console.log(firstHashMap.buckets[15].toString())

console.log(firstHashMap.buckets[0].toString())
console.log(firstHashMap.buckets[7].toString())
console.log(firstHashMap)
*/
const test = new HashMap() // or HashMap() if using a factory
console.log(test)
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.entries())
test.set('catdog', "greenyellow")
test.set('dolphin', 'blue')
test.set("rotweiler", "brown")
test.set("golden retriever", "golden")
console.log(test.entries())

test.set("moon", "silver")

console.log(test.entries())
console.log(test)
test.set('ice cream', "black")
test.set("catdog", "broken")
test.set("kite", "yellow")
test.set("golden retriever", "yellow")
console.log(test.entries())