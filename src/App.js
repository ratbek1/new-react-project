import './App.css';
import Header from "./components/Header";
import {Route,Routes} from "react-router-dom";
import Meat from "./components/Meat";
import About from "./components/About";
import Recipes from "./components/Recipes";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Hero/>}/>
            <Route path={"/recipes"} element={<Recipes/>}/>
            <Route path={"/meat"} element={<Meat/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/blog"} element={<Blog/>}/>
            <Route path={"/support"} element={<Support/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
