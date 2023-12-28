const problem1 = (inventory) =>{
    if(!Array.isArray(inventory)){
        console.log(' Error. Not  an Array ')
        return ;
    }
   const arr =  inventory.filter((obj)=>{
        return obj.id === 33;
    })
return arr;
}

module.exports = problem1;