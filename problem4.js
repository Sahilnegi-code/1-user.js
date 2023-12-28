const problem4 = (inventory) =>{
    if(!Array.isArray(inventory)){
        console.log(' Error. Not  an Array ')
        return ;
    }

let arr =   inventory.map((curr)=>{
    return curr.car_year;
    })

     return arr;
     }
     
     module.exports = problem4;