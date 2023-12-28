const problem6 = (inventory) =>{
    if(!Array.isArray(inventory)){
        console.log(' Error. Not  an Array ')
        return ;
    }

    let arr =   inventory.filter((curr)=>{
        return curr.car_make === 'BMW' || curr.car_make === 'Audi' ;
        })
    
         return arr;
         }
         
module.exports = problem6;