const problem3 = (inventory) =>{
    if(!Array.isArray(inventory)){
        console.log(' Error. Not  an Array ')
        return ;
    }
    inventory.sort((a,b)=> a.car_model.localeCompare(b.car_model));
     return inventory;
     }
     
     module.exports = problem3;