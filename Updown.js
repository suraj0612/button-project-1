
let initialState= 10;

const Updown = (state= initialState, action) => {
 switch(action.type){
  case "INCREMENT" : return state + 1;
  case "DECREMENT": return state-1;
  default : return state;  
 }

}

export default Updown;
