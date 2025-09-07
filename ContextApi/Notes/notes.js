//! why to use context api
//? using context api is nessasry bcoz there is a problem with props drilling like we cant use parenent element data to greatgrand son like
//?parent >child1 >child2 >child3 so there is not a way that child 3 can get the data frm parent hence we use useContext

//TODO context api = a way to pass data through the compoent to the component treee without passing props manually
//!createContext = create a context object
//! context = it is a component which provides the context vaklue to its children
//!useContext(consumer) = a hooks which allows to consume a context

//? makesure create context always provides a componet so use capital letter to make variables

//! ============================= useMemo Hooks =====================================
//? ye objec uya prop o optimise karne ke lie hpta hai
//? used for memorization
//? memorization is a technique to optimize perormance by catching the result of expesive functions calls
//? simple meaning ye hai ki complex chizo ke answer save karke rakhta hai or jabtak uski khud ki value change na ho taktak re render nahi hota
// import { useMemo } from "react";
// const memorization = useMemo(() => {
//  return xyz;
// }, [dependencies]);

//!=============================== useCallback hook =======================================
//? ye fucntion ko optimise karne ke lie hota hai
//? ise ham pura cmponent ko bhi otimisekar sakte hai

//!=============================== useReducer Hook ============================
// import { useReducer } from "react";
// const [state, dispatch] = useReducer(reducer , initial state); //! where state = inital state also dispatch is () and reducter is function which dtakes two argument (action , currState)
//? it returns array containg the current state and dispatch fuinction
//? dispatch function is used to send action to the reducerr which turns udates the states based on the actions type and any associated data (payload)
//! DISPATCH KO ONCLICK KETIME USE KARNA HPTA HAI JO REDUCER FUCNTION KE PASS DATA BHEJEGA
