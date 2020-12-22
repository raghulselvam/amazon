export const initialState={
    basket:[],
    user:null
}
export const getbaskettotal=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);


const reducer=(state,action)=>{
    console.log(action)
   switch(action.types){
       case "ADD_TO_BASKET":
           return{
               ...state,
               basket:[...state.basket,action.items]
           }
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
            
           case "REMOVE_BASKET":
               const newstate=[...state.basket];
               const index=newstate.findIndex(basketItem=>basketItem.id===action.id);
               if(index>=0){
                   newstate.splice(index,1);
               }
               else{
                   console.log("cannot remove item from basket");
               }

               return{
                   ...state,
                   basket:newstate
               }
           default: 
             return state;
   }
}
export default reducer;