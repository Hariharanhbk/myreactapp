import "./App.css";
import Counter from "./Counter/Counter";
import styled from "styled-components";
import CounterMain from "./Counter/CounterMain";
import Mounting from "./LifeCycle/Mounting";
import Updating from "./LifeCycle/Updating";
import Unmounting from "./LifeCycle/Unmounting";
import ComponentTask from "./Task/ComponentTask";
import Hooks from "./ReactHooks/Hooks"
import HooksComponent from "./FunCounter/FunCounter";
import MainHook from "./FunCounter/MainFunCounter";
import MainFunCounter from "./FunCounter/MainFunCounter";
import Register from "./Login/Register";
// import ComponentTask from './Task/ComponentTask';
import List from "./ReactHooks/List";
import TodoList from "./Todo/TodoList";
import Component1 from './Components/Component1';
import Component2, { Component3, Component4 } from './Components/Component2';
import Login from "./Login/Login";
import ProductList from "./ReactHooks/ProductList";
import Home from "./ReactHooks/Home";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Header from "./ReactHooks/Header";
import Footer from "./ReactHooks/Footer";
import FormTask from "./Task/FormTask.jsx";
import ResultForm from "./Task/ResultForm";
import Weather from "./Task/Weather.jsx";
import Quiz from "./Task/Quiz.jsx";
import PageNotFound from "./ReactHooks/PageNotFound.jsx";
import Compo1 from "./UseContext.jsx/Compo1.jsx";



function App() {
  return (

    // <BrowserRouter>
    // <Header></Header>
    // <Routes> 
    // <Route path="/" element={<Login />} />
    //   <Route path="/home/:name" element={
    //   <Home />
    //   }></Route>
    //   <Route path="/login" element={<Login />}></Route>
    //   <Route path="/product" element={<ProductList />}></Route>
    //   <Route path="*" element={<PageNotFound/>}></Route>
    // </Routes>
    // <Footer></Footer>
    // </BrowserRouter>

    /* <Routes>
        <Route path="/" element={<FormTask/>} />
        <Route path="/result" element={<ResultForm />} />
      </Routes> */
 /* <Weather></Weather> */
  /* <Quiz></Quiz> */
  //   <ProductList></ProductList>
    // <Register></Register>
    // <TodoList></TodoList>
    // <Hooks></Hooks>
    // <Mounting color="blue"></Mounting>
    // <Updating color="blue"></Updating>
    //  <Unmounting></Unmounting>
    // <CounterMain></CounterMain>     
      //  <Mounting></Mounting>   
     // <Component1></Component1>
     // <Component2></Component2>
     // <Component3></Component3>
     // <Component4></Component4> 
    //  <MainFunCounter></MainFunCounter>
    // <ComponentTask></ComponentTask>
    // <List></List>
    <Compo1></Compo1>
  );
}

export default App;
