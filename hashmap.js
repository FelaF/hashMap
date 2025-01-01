class HashMap {
    constructor(size = 16){
        this.size = size;
        this.buckets = Array(this.size).fill(null).map(()=>[]);
        this.loadFactor = 0;
        this.count = 0;
    }
    check(){
        if (this.loadFactor > 0.75){
            this.resize();
        }
    }
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 17;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);

        }
        
        return hashCode % this.size;
      } 
    set(key, value){
        const index = this.hash(key);
        const bucket = this.buckets[index]
        const keyIndex = bucket.findIndex(item => item.key === key);
        if (keyIndex === -1){
            bucket.push({key, value});
            this.count++
            this.loadFactor = this.count / this.size;
        }
        else{
            bucket[keyIndex].value = value
        }
    }
    get(key){
        const index = hash(key)
        const bucket = this.buckets[index]
        const item = bucket.find(item => item.key === key);
        return item? item.value: null

    }
    has(key){
        const index = this.hash(key)
        const bucket = this.buckets[index]
        return bucket.some(item => item.key === key)
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.buckets[index]
        const keyIndex = bucket.findIndex(item => item.key === key);
        if (keyIndex > -1){
            bucket.splice(keyIndex, 1)
            this.count--
            this.loadFactor = this.count / this.size
            return true
        }
        return false
    }
    length(){
        return this.count
    }
    clear(){
        this.buckets.forEach(bucket => {
            bucket = []
        })
    }
    keys(){
        let keys = [];
        this.buckets.forEach(bucket => {
            keys.push(bucket[0])
        })
        return keys
    }
    values(){
        let values = [];
        this.buckets.forEach(bucket => {
            values.push(bucket[1])
            return values
        })
    }
    resize(){
        const oldBuckets = this.buckets;
        this.size *= 2;
        this.buckets = Array(this.size).fill(null).map(() => []);
        this.count = 0;
        this.loadFactor = 0;
        for (const bucket of oldBuckets) {
            for (const item of bucket) {
                this.set(item.key, item.value);
            }
        }

    }

}


const test = new HashMap()
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
test.set('cheese', 'yellow')
test.set('chess', 'brown')
test.set('chest', 'black')
test.set('chester', 'grey')


console.log(test)