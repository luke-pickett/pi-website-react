import logo from './logo.svg';
import './App.css';
import './css/layout.css'
import './css/base.css'
import Header from "./Header";
import Footer from "./Footer";

import {BrowserRouter as Router, Routes} from 'react-router-dom'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {MathJaxContext} from "better-react-mathjax";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import Archimedes from "./pages/Archimedes";
import Taylor from "./pages/Taylor";

const detailComponents = {
    home: <Route exact path={''} component={Home}/>
}

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
        <Router>
            <MathJaxContext>
                <div className={"container"}>
                    <Navbar/>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/archimedes'} element={<Archimedes/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </MathJaxContext>
        </Router>

    );
}

export default App;
