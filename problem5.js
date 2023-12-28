const helper = require('./problem4');
const problem5 = (inventory) =>{

    if(!Array.isArray(inventory)){
        console.log(' Error. Not  an Array ')
        return ;
    }
    let carYear = helper(inventory);   


    let before2000 = carYear.filter((curr)=>{
        return curr < 2000;
    } )
  
    return before2000;
         }
         
module.exports = problem5;