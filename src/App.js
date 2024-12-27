import logo from './logo.svg';
import './App.css';
import './css/layout.css'
import './css/base.css'
import Header from "./Header";
import Footer from "./Footer";

import {MathJaxContext} from "better-react-mathjax";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import Archimedes from "./pages/Archimedes";
import Taylor from "./pages/Taylor";


let currentPage

switch (window.location.pathname) {
    case ("/home"):
        currentPage = <Home/>
        break
    case ("/archimedes"):
        currentPage = <Archimedes/>
        break
    case ("/taylor"):
        currentPage = <Taylor/>
        break
    default:
        currentPage = <Home/>
        break
}


function App() {
    return (
        <MathJaxContext>
            <div className={"container"}>
                <Navbar/>
                {currentPage}
                <Footer></Footer>
            </div>
        </MathJaxContext>
    );
}

export default App;
