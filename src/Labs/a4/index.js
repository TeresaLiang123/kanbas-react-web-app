import Add from "./Add";
import BooleanStateVariables from "./BooleanStateVariable";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import PassingDataOnEvent from "./PassingDataEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import AreaStateVariable from "./AreaStateVariable"
import ChildStateComponent from "./ChildStateVariable";
import React from "react";
const Assignment4 = () => {
    function sayHello() {
        alert("Hello"); 
      }
    
  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent></ClickEvent>
      <PassingDataOnEvent></PassingDataOnEvent>
      <PassingFunctions theFunction={Add(2, 3)}></PassingFunctions>
      <EventObject></EventObject>
      <PassingFunctions theFunction={sayHello} />
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <AreaStateVariable></AreaStateVariable>
      <ChildStateComponent></ChildStateComponent>
    </div>
  );
}
export default Assignment4;