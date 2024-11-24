export const initialState= {
    basket:[],
    user:null
};

// selector 
export const getBasketTotal = (basket) => 
 basket?.reduce((amount,item) => amount + item.price,0)

// how reduce function is working 
// reducer function is taking two parameter first paramete is for initial value and second parameter for each loop value of basket and if we
// will not pass initial value then the reduceer function wil assume first element of array as the initial value and the iteration start from
// 2 element
//eg :- 0 +1 +2+3+4+5
// and if we will not pass initial value then 
// eg :- 1+2+3+4+5
// value will be same but the logic will be different.
// reducer function is doing the calculation and automatically returning the value for us 

 
// console.log(initialState.basket.length);  // it will only print the initial value of initialState which is 0 because we send the initialState to the data layer and we are modifying it with the help of use reducer hook
// the after that we passed our initialState and modifying function for initial state to the datalayer so that it will be accessible for each component of our app.  the we are using useContext hook for pulling data from 
// the data layer 
// but when we are console.log the initialState in reducer.js file then it is only printing the initial value of initialState because we are not using useContext hook for pulling initialState from datalayer.

console.log("hey i am reducer file ")  // this is a global call 
const reducer =(state,action) => {
    // console.log(action)  // this is calling when we are adding item into the basket
    // console.log(action.id);   // this is calling when we are removing item from the basket
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        // break;  break is not required after return (their is a little bit variation in switch case in javascript and react)

        case "EMPTY_BASKET": 
            return {
                ...state,
                basket:[]
            }

// when we are using return inside the switch loop that mean their is no need to use break because the meaning of 
// return is that when specific code will return something then the termination code will get stop and also the 
// break doing the same thing when the interpreter see the break in our code then it stop the termination of next line 
// of code . so the meaning of return and break is same at this block of code .

        case "remove_from_basket":
            // console.log(action.id)
            // console.log("working")
            const index = state.basket.findIndex(basket=> basket.id === action.id);
            let new_Basket=[...state.basket];
            if (index >= 0) {
            new_Basket.splice(index,1);
            } else {
                console.warn(`can't remove product (id: ${action.id}) as it is not in basket`)
            }
            // return {
            //     ...state,
            //     basket:state.basket.filter(item=> item.id != action.id)    // filter is looping through each element of the basket array then performing some task the returning new array 
            // }  // it is removing all the same element from the basket 

            return {
                ...state,
                basket:new_Basket   // not necessary to do ...state it is working also without that but sunny doing that that's wy i am also doing that
            }
        // break; break is not required in react switch case
        case "SET_USER":
            return {
                ...state,
                user:action.user

            }
        default:
          return state;
    } 
    // console.log(state,action); 
//    switch (action.type) {
//     case "ADD_TO_BASKET":
//         return {
//             basket:["working"]
//         }
//     default:
//         return state;
//    }

};


export default reducer;

// reducer function only be get called when dispatch is get trigged;
