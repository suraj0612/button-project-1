import { createStore } from "redux";
import Combine_reducer from "./Reducers/Index";



let Store =   createStore (Combine_reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());







export default Store;