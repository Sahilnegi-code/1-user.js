const problem2 = (inventory) =>{
    if(!Array.isArray(inventory)){
        console.log(' Error. Not  an Array ')
        return ;
    }
const arr =  inventory.filter((obj)=>{
         return obj.id === inventory.length;
     })
   
 return arr;
 }
 
 module.exports = problem2;