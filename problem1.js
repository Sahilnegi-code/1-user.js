const problem1 = (inventory) =>{

   const arr =  inventory.filter((obj)=>{
        return obj.id === 33;
    })
return arr;
}

module.exports = problem1;