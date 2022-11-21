import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./Footer";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";

const App = () =>{
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Ultimos ingresos del mes"}/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App;