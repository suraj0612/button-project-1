import React from "react";
import  ReactDOM  from "react-dom";
import Appa from "./Appa";
import Store from "./Store";
import { Provider } from "react-redux";





ReactDOM.render(<Provider store={ Store}><Appa/></Provider>,document.getElementById("root"));