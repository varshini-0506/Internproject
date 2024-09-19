import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const root=ReactDOM.createRoot(document.getElementById("root"));


const Index = () => {

  return (
    <Header/>

  )
}


root.render(<Index/>)