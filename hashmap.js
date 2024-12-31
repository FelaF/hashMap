function hashMap(){
    let loadFactor = 0
    let capacity = 0
    let buckets = []

    function hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      } 
    function set(key,value){

    }
    function get(key){
        return hash(key)
    }
    function has(key){
        
    }
     
}